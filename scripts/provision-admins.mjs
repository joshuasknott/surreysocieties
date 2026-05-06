import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const envFiles = [
  path.join(root, ".env.local"),
  path.join(root, "apps", "ai", ".env.local"),
  path.join(root, "apps", "business", ".env.local"),
  path.join(root, "apps", "neurotech", ".env.local"),
];

for (const envFile of envFiles) {
  if (!fs.existsSync(envFile)) continue;
  const lines = fs.readFileSync(envFile, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index);
    const value = trimmed.slice(index + 1);
    if (!process.env[key]) process.env[key] = value;
  }
}

const admins = [
  {
    slug: "owner",
    name: "Josh Knott",
    email: "joshhknott@gmail.com",
    passwordEnv: "OWNER_ADMIN_INITIAL_PASSWORD",
    metadata: {
      owner: true,
      societies: ["ai", "business", "neurotech"],
    },
  },
  {
    slug: "ai",
    name: "AI Society Admin",
    email: "ussu.aianddatascience@surrey.ac.uk",
    passwordEnv: "AI_ADMIN_INITIAL_PASSWORD",
    metadata: {
      protectedAdmin: true,
      society: "ai",
    },
  },
  {
    slug: "business",
    name: "Business Society Admin",
    email: "ussu.bizsoc@surrey.ac.uk",
    passwordEnv: "BUSINESS_ADMIN_INITIAL_PASSWORD",
    metadata: {
      protectedAdmin: true,
      society: "business",
    },
  },
  {
    slug: "neurotech",
    name: "Neurotech Society Admin",
    email: "ussu.neurotechsoc@surrey.ac.uk",
    passwordEnv: "NEUROTECH_ADMIN_INITIAL_PASSWORD",
    metadata: {
      protectedAdmin: true,
      society: "neurotech",
    },
  },
];

const secretKey = process.env.CLERK_SECRET_KEY;

if (!secretKey) {
  throw new Error("CLERK_SECRET_KEY is required to provision Clerk admin users.");
}

for (const admin of admins) {
  if (!process.env[admin.passwordEnv]) {
    throw new Error(`${admin.passwordEnv} is required for ${admin.email}.`);
  }
}

async function clerkFetch(pathname, options = {}) {
  const response = await fetch(`https://api.clerk.com/v1${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = body?.errors?.[0]?.long_message || body?.errors?.[0]?.message || text;
    throw new Error(`Clerk API ${response.status}: ${message}`);
  }

  return body;
}

async function findUserByEmail(email) {
  const params = new URLSearchParams({ email_address: email });
  const body = await clerkFetch(`/users?${params.toString()}`, {
    method: "GET",
  });
  const users = Array.isArray(body) ? body : body?.data || [];
  return users.find((user) => {
    const primaryEmail = user.email_addresses?.find(
      (emailAddress) => emailAddress.id === user.primary_email_address_id
    );
    return primaryEmail?.email_address?.toLowerCase() === email.toLowerCase();
  }) || null;
}

async function ensureConvexJwtTemplate() {
  const claims = {
    aud: "convex",
    email: "{{user.primary_email_address}}",
    name: "{{user.full_name}}",
  };
  const templates = await clerkFetch("/jwt_templates", {
    method: "GET",
  });
  const existing = (Array.isArray(templates) ? templates : templates?.data || []).find(
    (template) => template.name === "convex"
  );

  if (existing) {
    await clerkFetch(`/jwt_templates/${existing.id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: "convex", claims }),
    });
    console.log("jwt: convex template updated");
    return;
  }

  await clerkFetch("/jwt_templates", {
    method: "POST",
    body: JSON.stringify({
      name: "convex",
      claims,
    }),
  });

  console.log("jwt: created convex template");
}

async function createAdminUser(admin) {
  const existing = await findUserByEmail(admin.email);

  if (existing) {
    console.log(`${admin.slug}: already exists (${admin.email})`);
    return;
  }

  await clerkFetch("/users", {
    method: "POST",
    body: JSON.stringify({
      email_address: [admin.email],
      password: process.env[admin.passwordEnv],
      first_name: admin.name,
      skip_password_checks: false,
      public_metadata: admin.metadata,
    }),
  });

  console.log(`${admin.slug}: created (${admin.email})`);
}

await ensureConvexJwtTemplate();

for (const admin of admins) {
  await createAdminUser(admin);
}

console.log("Admin provisioning complete.");
