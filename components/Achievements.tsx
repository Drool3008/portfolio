"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { achievements } from "@/lib/achievements";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 md:px-10 py-20">
      <div className="section-divider mb-16" />

      <div className="mb-12 md:mb-16">
        <p className="text-sm md:text-base font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
          Achievements
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--foreground)] tracking-tight leading-[1.1]">
          Beyond the code
        </h2>
      </div>

      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.li
            key={a.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="group list-none rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--foreground)]/40 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-lg border border-[var(--border)] bg-[var(--muted)] p-2.5 text-[var(--foreground)]">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--foreground)] leading-snug">
                  <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                    {a.title}
                  </span>
                </h3>
                {(a.org || a.date) && (
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {[a.org, a.date].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-3">
                  {a.blurb}
                </p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] hover:opacity-70 transition-opacity mt-4"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View
                  </a>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
