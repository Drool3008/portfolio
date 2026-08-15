export type Achievement = {
  title: string;
  org?: string;
  date?: string;
  blurb: string;
  wins?: { label: string; detail?: string }[];
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Startup Aid 2026 — 2nd Overall",
    org: "E-Cell, IIIT Hyderabad",
    date: "40-day sprint · 2026",
    blurb:
      "A 40-day entrepreneurship sprint with 239 participants across 66 teams. Our team placed 2nd overall and won across multiple challenges. Built with Aasritha Kalluri and Gargi Saini.",
    wins: [
      { label: "Final Pitch Showcase", detail: "2nd Place · ₹50,000" },
      { label: "Final Idea & Field Study", detail: "Challenge 1B · ₹10,000" },
      { label: "Brand-A-Thon (Branding)", detail: "Challenge 3 · ₹10,000" },
    ],
    link: "https://keshavdubey.framer.website/portfolio/from-idea-to-pitch-in-40-days",
    linkLabel: "Read the case study",
  },
];
