// Experience timeline data. Plain data, rendered by components/Experience.tsx.
export type ExperienceItem = {
  period: string; // short label shown on the timeline rail
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2026 – Now",
    role: "Technical Product Intern",
    company: "SucSEED Ventures",
    dates: "May 2026 – Present",
    location: "Hyderabad, Telangana",
    description:
      "Driving product strategy and discovery across early-stage ventures — turning user and stakeholder research into roadmap decisions.",
    highlights: [
      "Led product strategy and discovery: user research and stakeholder interviews to surface key pain points and opportunities",
      "Worked with cross-functional teams to define requirements, prioritize features, and drive roadmap decisions aligned to business goals",
      "Applied structured competitive analysis and market research to inform positioning and go-to-market strategy",
    ],
  },
  {
    period: "Early 2026",
    role: "Product Analyst",
    company: "Product Lab @ IIIT Hyderabad",
    dates: "Mar 2026 – Apr 2026",
    location: "Hyderabad, Telangana",
    description:
      "Analyzed an internal engineering pipeline and found a new market for it — no architecture changes required.",
    highlights: [
      "Interviewed the core engineering team to surface assumptions, pain points, and unvalidated user needs, then synthesized them into actionable insights",
      "Uncovered an untapped segment (FMCG, logistics, consumer-tech brands), opening a new use case around real-time regional news-sentiment monitoring",
      "Mapped how the existing pipeline could power brand-perception monitoring, crisis detection, and location-specific PR intelligence with zero architectural changes",
    ],
  },
  {
    period: "2021",
    role: "Embedded Systems",
    company: "The Robotics Forum",
    dates: "Jan 2021",
    location: "Pune, Maharashtra",
    description:
      "Built and programmed a multifunctional robot, integrating software with hardware end to end.",
    highlights: [
      "Worked hands-on with microprocessors (8051, 8061): architectures and functionality",
      "Implemented motor control, motion, and manipulation using MATLAB and C",
      "Programmed a robot for dynamic movement and manipulation tasks, integrating software with hardware for seamless operation",
    ],
  },
];
