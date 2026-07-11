// ============================================================
// PROJECTS — this is the file you'll edit most often.
//
// To add a project: copy one of the blocks below, paste it at
// the TOP of the list (order here = order on the site), and
// fill in your info.
//
// Fields:
//   slug      → the URL for the project page (lowercase-with-dashes)
//   title     → project name
//   year      → shown on the card and detail page
//   tags      → small labels, e.g. ['Projection Mapping', 'TouchDesigner']
//   summary   → one sentence shown on the project card
//   role      → what you did
//   tools     → what you built it with
//   featured  → true = also shows on the homepage
//   accent    → the color tint of the card. Any CSS color works.
//   cover     → optional image: put a file in /public/projects/
//               and set cover: '/projects/your-image.jpg'.
//               If left as null the site renders a generative
//               placeholder tile in the accent color instead.
//   body      → paragraphs for the project detail page
//   link      → optional { label, url } for a live demo / video
//
// NOTE: the projects below are PLACEHOLDERS sketched from the
// shape of your practice — swap in your real work.
// ============================================================

export const projects = [
  // ✏️ PLACEHOLDER PROJECT — replace with your real work
  {
    slug: 'signal-bloom',
    title: 'Signal Bloom',
    year: '2025',
    tags: ['Projection Mapping', 'Installation'],
    summary:
      'A large-scale projection-mapped installation translating live audio into blooming generative forms.',
    role: 'Concept, creative direction, and all technical development',
    tools: ['TouchDesigner', 'MadMapper', 'Ableton Live'],
    featured: true,
    accent: '#d8ff3e',
    cover: null,
    body: [
      'PLACEHOLDER — describe the concept: what the piece explores, where it was shown, and how audiences experienced it.',
      'PLACEHOLDER — describe the build: the pipeline from input (audio, sensors, data) to output (projection surfaces, mapping approach), and any interesting technical problems you solved.',
    ],
    link: null,
  },
  // ✏️ PLACEHOLDER PROJECT — replace with your real work
  {
    slug: 'memory-archive',
    title: 'Memory Archive',
    year: '2024',
    tags: ['Interactive Media', 'Web'],
    summary:
      'An interactive web archive exploring cultural memory through participatory storytelling.',
    role: 'Design and full-stack development',
    tools: ['React', 'Python', 'PostgreSQL'],
    featured: true,
    accent: '#8b7bff',
    cover: null,
    body: [
      'PLACEHOLDER — what stories does the archive hold, who contributes to it, and why does it matter?',
      'PLACEHOLDER — how it works: contribution flow, moderation, and how the interface invites exploration.',
    ],
    link: null,
  },
  // ✏️ PLACEHOLDER PROJECT — replace with your real work
  {
    slug: 'counterculture-console',
    title: 'Counterculture Console',
    year: '2024',
    tags: ['Creative Coding', 'Generative'],
    summary:
      'A generative art system riffing on postmodern collage — every render is a one-of-one composition.',
    role: 'Creative coding and system design',
    tools: ['p5.js', 'JavaScript'],
    featured: true,
    accent: '#ff7ac3',
    cover: null,
    body: [
      'PLACEHOLDER — the visual language: what source material, rules, and randomness shape each composition.',
      'PLACEHOLDER — the system: how the generator is structured and what parameters you can play with.',
    ],
    link: null,
  },
  // ✏️ PLACEHOLDER PROJECT — replace with your real work
  {
    slug: 'teaching-creative-code',
    title: 'Teaching Creative Code',
    year: '2023 — ongoing',
    tags: ['Education', 'Curriculum'],
    summary:
      'Curriculum and workshops helping new technologists use code as a tool for cultural expression.',
    role: 'Curriculum development and instruction',
    tools: ['p5.js', 'Python', 'Workshop design'],
    featured: false,
    accent: '#5ee6d0',
    cover: null,
    body: [
      'PLACEHOLDER — who you teach, what the curriculum covers, and the philosophy behind it.',
      'PLACEHOLDER — outcomes: student work, programs you built this for, or workshops you have run.',
    ],
    link: null,
  },
]
