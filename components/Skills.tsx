"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const groups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "C++", "C", "Python", "SQL", "MySQL"],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React.js",
      "Angular",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "TensorFlow",
      "PyTorch",
      "jQuery",
      "Bootstrap",
    ],
  },
  {
    label: "Product",
    items: [
      "Product Strategy",
      "Product Discovery",
      "User Research",
      "Stakeholder Interviews",
      "Competitive Analysis",
      "Market Research",
      "Roadmapping",
      "PRD Writing",
      "Go-to-Market",
    ],
  },
  {
    label: "CS Concepts",
    items: [
      "Operating Systems",
      "Transactions & Concurrency",
      "Database Normalization",
      "Algorithms",
      "Computer Architecture",
      "Digital Logic",
    ],
  },
];

const certs = [
  {
    label: "C++",
    href: "https://drive.google.com/file/d/1bgMhLMbwqLPF97w9zKv7Dvwnv_TmhU-Z/view?usp=sharing",
  },
  {
    label: "Python",
    href: "https://drive.google.com/file/d/1na2FCg0TuN1H1pt1pnuwBHpeJswgDZQV/view?usp=sharing",
  },
  {
    label: "Node, Express & MongoDB",
    href: "https://drive.google.com/file/d/1ygVHo0XVxX8jVIKWZ8Cd3TWY6HAqiK1L/view?usp=sharing",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div id="skills" className="w-full bg-black">
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-20">
        <div className="max-w-3xl mb-14 space-y-4">
          <p className="text-sm md:text-base font-bold text-neutral-500 uppercase tracking-widest">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1]">
            My toolkit, across code and product.
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
          className="space-y-10"
        >
          {groups.map((g) => (
            <div key={g.label} className="border-t border-neutral-800 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm text-neutral-300 border border-neutral-800 rounded-full px-3 py-1.5 hover:border-neutral-600 hover:text-white transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-neutral-800 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Certificates
            </h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-300 border border-neutral-800 rounded-full px-3 py-1.5 hover:border-neutral-600 hover:text-white transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
