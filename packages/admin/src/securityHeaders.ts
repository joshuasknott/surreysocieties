/**
 * Baseline response security headers for society Astro apps.
 *
 * Intentionally omits a strict CSP: Clerk, Convex, Google Fonts, and
 * Vercel image optimization make a single shared policy easy to break.
 * Add CSP later per-app once allowlists are verified.
 */

const SECURITY_HEADERS: ReadonlyArray<[string, string]> = [
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', 'camera=(), microphone=(), geolocation=()'],
  // SAMEORIGIN keeps same-site project embeds working; blocks cross-origin framing.
  ['X-Frame-Options', 'SAMEORIGIN'],
];

/**
 * Mutates and returns the response with baseline security headers when absent.
 * Safe to call on every middleware exit path.
 */
export function applySecurityHeaders(response: Response): Response {
  for (const [key, value] of SECURITY_HEADERS) {
    if (!response.headers.has(key)) {
      response.headers.set(key, value);
    }
  }
  return response;
}
