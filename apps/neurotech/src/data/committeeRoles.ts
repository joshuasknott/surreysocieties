export interface CommitteeRole {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  responsibilities: string[];
  task: string;
  questions: { key: string; label: string; hint: string }[];
}

export const committeeRoles: CommitteeRole[] = [
  {
    slug: 'events-community', title: 'Events & Community Officer',
    summary: 'Bring people together through talks, socials and society events.',
    intro: 'Help people find their place in a welcoming neurotech community.',
    responsibilities: ['Plan socials, talks and society events', 'Welcome new members and build community', 'Coordinate venues, timings and event logistics'],
    task: 'Plan one event that would help new members connect with the society.',
    questions: [
      { key: 'eventIdea', label: 'What would the event look like?', hint: 'Describe the format, audience and what people would do.' },
      { key: 'eventPlan', label: 'How would you make it welcoming and practical to run?', hint: 'Consider access, promotion, logistics and a simple backup plan.' },
    ],
  },
  {
    slug: 'workshops-projects', title: 'Workshops & Projects Officer',
    summary: 'Turn curiosity into practical workshops and student projects.',
    intro: 'Give curious students approachable ways to learn and build.',
    responsibilities: ['Help organise practical neurotech workshops', 'Coordinate projects and support student teams', 'Source learning resources and demonstration ideas'],
    task: 'Sketch a beginner-friendly neurotech workshop or small student project.',
    questions: [
      { key: 'workshopIdea', label: 'What would participants explore or make?', hint: 'Explain who it is for and what they would take away.' },
      { key: 'workshopPlan', label: 'How would you run it with the resources available to a student society?', hint: 'A short plan covering materials, support and timing is enough.' },
    ],
  },
  {
    slug: 'industry-partnerships', title: 'Industry & Partnerships Officer',
    summary: 'Connect our members with researchers, organisations and opportunities.',
    intro: 'Build useful links between the society and the wider neurotech field.',
    responsibilities: ['Reach out to researchers and industry speakers', 'Build links with companies and other societies', 'Explore sponsorships and collaborative events'],
    task: 'Imagine a researcher, organisation or society you would approach for a collaboration.',
    questions: [
      { key: 'partnerIdea', label: 'Who would you approach, and why are they a good fit?', hint: 'A type of partner is fine; you do not need an existing contact.' },
      { key: 'partnershipPitch', label: 'What would your first message propose?', hint: 'Show how members and the partner would benefit.' },
    ],
  },
  {
    slug: 'social-media-content', title: 'Social Media & Content Officer',
    summary: 'Share our story and help more students get involved.',
    intro: 'Make society activity visible, inviting and easy to join.',
    responsibilities: ['Create posts, stories and event promotions', 'Capture highlights from society activities', 'Keep our channels active and on-brand'],
    task: 'Create one mock Surrey Neurotech Society social post using one or more supplied brand assets and upload it with your application. You could promote a fictional beginner workshop; label any invented event details as a concept.',
    questions: [
      { key: 'postCaption', label: 'What caption would you publish with your post?', hint: 'Include a clear invitation or next step.' },
      { key: 'postApproach', label: 'Who is the post for, and why did you design it this way?', hint: 'A few sentences are enough.' },
    ],
  },
];

export const getCommitteeRole = (slug: string) => committeeRoles.find((role) => role.slug === slug);
