"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />

      <div className="mb-12 md:mb-16">
        <p className="text-sm md:text-base font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
          Selected projects
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--foreground)] tracking-tight leading-[1.1]">
          Things I&apos;ve built
        </h2>
      </div>

      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="list-none"
          >
            <div className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--foreground)]/40 hover:shadow-md">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-fit rounded-lg border border-[var(--border)] bg-[var(--muted)] p-2 text-[var(--foreground)]">
                    {p.icon}
                  </div>
                  {p.timeframe && (
                    <span className="text-[10px] font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                      {p.timeframe}
                    </span>
                  )}
                </div>

                <h3 className="mt-1 text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--foreground)]">
                  <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                    {p.title}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {p.blurb}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-[var(--muted-foreground)] border border-[var(--border)] rounded-full px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                )}
                <a
                  href={`/projects/${p.slug}`}
                  className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--foreground)] transition-all group-hover:gap-2"
                >
                  Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
