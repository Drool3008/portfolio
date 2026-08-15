"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
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

      <ul ref={ref} className="grid grid-cols-1 gap-4">
        {achievements.map((a, i) => (
          <motion.li
            key={a.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="group list-none rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--foreground)]/40 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-lg border border-[var(--border)] bg-[var(--muted)] p-2.5 text-[var(--foreground)]">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--foreground)] leading-snug">
                  <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                    {a.title}
                  </span>
                </h3>
                {(a.org || a.date) && (
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">
                    {[a.org, a.date].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-3 max-w-3xl">
                  {a.blurb}
                </p>

                {a.wins && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {a.wins.map((w) => (
                      <div
                        key={w.label}
                        className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 p-4"
                      >
                        <p className="text-sm font-semibold text-[var(--foreground)] leading-snug">
                          {w.label}
                        </p>
                        {w.detail && (
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">
                            {w.detail}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[var(--foreground)] hover:opacity-70 transition-opacity"
                  >
                    {a.linkLabel ?? "View"}
                    <ArrowUpRight className="w-4 h-4" />
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
