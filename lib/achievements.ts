export type Achievement = {
  title: string;
  org?: string;
  date?: string;
  blurb: string;
  link?: string;
};

// ponytail: "Startup Aid" details are a PLACEHOLDER. LinkedIn is auth-gated and
// the reposted post could not be fetched. Replace org/date/blurb/link with the
// real content, or send Dhawal's post text and it gets wired in.
export const achievements: Achievement[] = [
  {
    title: "Startup Aid",
    org: "‹ add org / event ›",
    date: "‹ add date ›",
    blurb:
      "‹ Placeholder — paste the details from your reposted “Startup Aid” LinkedIn post here: what it was, your role, and the outcome worth showcasing. ›",
    link: "https://www.linkedin.com/in/dhawal-pawanarkar-348003177/",
  },
];
