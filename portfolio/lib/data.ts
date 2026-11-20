// All facts on this page are sourced directly from Ishita Kohli's resume
// and the work links she provided. Nothing here is invented.

export const profile = {
  name: "Ishita Kohli",
  titles: ["Content Writer", "SEO Content Writer"],
  location: "Delhi, India",
  email: "ishitakohli0206@gmail.com",
  phone: "+91 97176 12075",
  linkedin: "https://www.linkedin.com/in/ishita-kohli-76418b235/",
  photo: "/images/ishita-kohli.jpg",
};

export const heroIntro =
  "I write content that has to work twice: read well, and rank well. Over the past year that's meant product guides for Gadgets 360, SEO-led blogs that pushed a client site into Google's top 5 results, and research writing that turns technical AI concepts into something a general reader can follow.";

export const about = {
  paragraphs: [
    "I'm a Computer Science and Data Science engineering student who writes for a living — a combination that shows up in how I approach content. I research the way an analyst would, structure the way a technical writer would, and edit for the reader every time.",
    "My work spans SEO blogs, product and technology write-ups, and research documentation. At Zeenik, that meant building keyword-researched blog content that moved a client's search visibility into Google's top 5 and grew organic traffic by 40%. At Gadgets 360, it means writing electronics and lifestyle product content for a national audience, under NDTV's editorial standards.",
    "Alongside client work, I've contributed to an academic research study on AI-based autism spectrum disorder diagnosis, and I write and lead communications for a 70-member volunteer organisation — so the throughline across all of it is the same: take something complex, structure it clearly, and make it land with the right reader.",
  ],
  facts: [
    { label: "Based in", value: "Delhi, India" },
    { label: "Most Recent", value: "Content Writing Intern, Gadgets 360 (NDTV)" },
    { label: "Studying", value: "B.Tech, Computer Science & Data Science Engineering" },
    { label: "Focus", value: "SEO content, product writing, research documentation" },
  ],
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  summary: string;
  bullets: string[];
  metrics?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "gadgets360",
    company: "Gadgets 360 (NDTV Venture)",
    role: "Content Writing Intern",
    duration: "March 2026 — May 2026",
    summary:
      "Writing product-focused electronics content for HotDeals360, the deals and buying-guide arm of Gadgets 360.",
    bullets: [
      "Write product-based articles covering electronics, research and reviews",
      "Create SEO-focused content that improves search visibility and engagement",
      "Cover trending topics to increase organic reach and impressions",
    ],
  },
  {
    id: "zeenik",
    company: "Zeenik",
    role: "Content Writing Intern",
    duration: "Sept 2025 — Dec 2025",
    summary:
      "Developed SEO-optimized blog and web content for a digital marketing and web development agency.",
    bullets: [
      "Developed and published SEO-optimized blogs and web content, boosting company visibility to the top 5 Google results and driving a 40% traffic increase",
      "Created 30+ compelling marketing content pieces to strengthen brand presence, driving audience engagement and 25% audience growth",
      "Analyzed 50+ industry keywords, improving content rankings for 80% of published posts",
    ],
    metrics: ["40% traffic increase", "25% audience growth", "50+ keywords analyzed", "80% posts ranked higher"],
  },
  {
    id: "rotaract",
    company: "Rotaract Club",
    role: "Founder & Secretary",
    duration: "April 2025",
    summary: "Founded and run communications for a student volunteer organisation.",
    bullets: [
      "Drafted reports, official messages, collaborative emails and professional documentation",
      "Spearheaded 80+ events, directing a 70-member volunteer team",
    ],
    metrics: ["80+ events led", "70-member team"],
  },
  {
    id: "research",
    company: "Independent Research",
    role: "AI in Healthcare — Research Contributor",
    duration: "August 2025",
    summary:
      'Contributed to a research study titled "Advances and Challenges in Automated Autism Spectrum Disorder Diagnosis."',
    bullets: [
      "Conducted paraphrasing, literature analysis, and content refinement for research documentation",
      "Developed skills in presenting academic AI concepts in a structured, concise manner",
    ],
  },
  {
    id: "social",
    company: "Independent",
    role: "Social Media Writing",
    duration: "January 2025",
    summary: "Runs a personal creative writing account.",
    bullets: [
      "Manages a writing account with 2K+ followers, creating engaging creative writing content",
      "Skilled at simplifying content for general audiences",
    ],
    metrics: ["2K+ followers"],
  },
];

export type WorkCategory = "SEO & Blog Writing" | "Product & Web Content";

export type WorkItem = {
  id: string;
  title: string;
  publication: string;
  url: string;
  description: string;
  category: WorkCategory;
  skills: string[];
};

export const work: WorkItem[] = [
  {
    id: "seo-2026",
    title: "SEO in 2026: Ranking Checklist, Ranking Factors & Strategy",
    publication: "Zeenik",
    url: "https://zeenik.com/blog/seo-in-2026/",
    description:
      "A long-form guide breaking down how AI, EEAT and predictive search are reshaping ranking factors for 2026, built around a full on-page and technical SEO checklist.",
    category: "SEO & Blog Writing",
    skills: ["SEO Writing", "Keyword Research", "Content Strategy"],
  },
  {
    id: "ai-marketing-sme",
    title: "How AI Is Changing Marketing for Small and Medium Enterprises",
    publication: "Zeenik",
    url: "https://zeenik.com/blog/how-ai-is-changing-marketing-for-small-and-medium-enterprises/",
    description:
      "An explainer on how SMEs can use AI marketing tools to compete with larger companies, backed by original competitor research and a defined keyword strategy.",
    category: "SEO & Blog Writing",
    skills: ["Blog Writing", "Competitor Research", "SEO Writing"],
  },
  {
    id: "biometric-lockers",
    title: "Best Biometric Lockers: Fingerprint Secure Storage for Valuables",
    publication: "HotDeals360 · Gadgets 360 (NDTV)",
    url: "https://hotdeals360.com/electronics/best-biometric-lockers-fingerprint-secure-storage-for-valuables-11321590",
    description:
      "A buying guide comparing top fingerprint-enabled safes and lockers for home and office use, with specifications and pros and cons for each pick.",
    category: "Product & Web Content",
    skills: ["Product Writing", "Research", "SEO Writing"],
  },
  {
    id: "rgb-lights",
    title: "7 Best RGB Lights for Content Creators",
    publication: "HotDeals360 · Gadgets 360 (NDTV)",
    url: "https://hotdeals360.com/electronics/7-best-rgb-lights-for-content-creators-achieve-aesthetic-lighting-with-ease-11266665",
    description:
      "A curated round-up of RGB lighting gear for photographers, streamers and video creators, comparing battery life, colour accuracy and mounting options.",
    category: "Product & Web Content",
    skills: ["Product Writing", "Research", "Audience Writing"],
  },
];

export const metrics = [
  { value: "40%", label: "Traffic increase driven by SEO content at Zeenik" },
  { value: "25%", label: "Audience growth from marketing content at Zeenik" },
  { value: "50+", label: "Industry keywords researched and analyzed" },
  { value: "80%", label: "Published posts with improved rankings" },
  { value: "30+", label: "Marketing content pieces created" },
  { value: "80+", label: "Events led as Rotaract Club founder" },
];

export const skills = [
  "SEO Writing",
  "Content Writing",
  "Blog Writing",
  "Web Content",
  "Marketing Content",
  "Keyword Research",
  "Content Research & Paraphrasing",
  "Documentation",
  "Presentation Design",
  "Community Communication",
  "AI Awareness",
];

export type ServiceItem = {
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    title: "SEO Blog Writing",
    description:
      "Keyword-researched blog content built to rank — the kind that took a client's site into Google's top 5 results.",
  },
  {
    title: "Article & Web Content",
    description:
      "Product write-ups, guides and web copy, written to a national editorial standard.",
  },
  {
    title: "Marketing Content",
    description:
      "Content built around brand presence and audience growth, backed by competitor and keyword research.",
  },
  {
    title: "Research & Documentation",
    description:
      "Literature analysis, paraphrasing and content refinement for research and academic writing.",
  },
  {
    title: "Reports & Presentations",
    description:
      "Clear, structured reports, official communications and presentation content for organisations and teams.",
  },
];

export const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech, Computer Science and Data Science Engineering",
    detail: "CGPA: 8.92",
  },
  {
    period: "2022 — 2023",
    title: "CBSE Class XII",
    detail: "95.4%",
  },
  {
    period: "2020 — 2021",
    title: "CBSE Class X",
    detail: "97%",
  },
];
