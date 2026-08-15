// Central site config. Edit here, not in components.
export const site = {
  name: "Dhawal Pawanarkar",
  role: "Developer & Product",
  roleLong: "M.Tech Product Design & Management · IIIT Hyderabad",
  tagline:
    "M.Tech Product Design & Management student at IIIT Hyderabad. I write full-stack code and think in products — I like figuring out what to build, then building it end to end.",
  location: "Hyderabad, India",
  email: "dhawalpawanarkar123@gmail.com",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/Drool3008",
    linkedin: "https://www.linkedin.com/in/dhawal-pawanarkar-348003177/",
    leetcode: "https://leetcode.com/Dhwl_30/",
  },
} as const;

export const education = [
  {
    school: "International Institute of Information Technology, Hyderabad",
    degree: "M.Tech in Product Design and Management",
    dates: "July 2025 – Present",
    location: "Hyderabad, Telangana",
  },
  {
    school: "Vishwakarma Institute of Technology",
    degree: "B.Tech in Instrumentation & Control — CGPA 8.41",
    dates: "June 2023",
    location: "Pune, Maharashtra",
  },
] as const;
