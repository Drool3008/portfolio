"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.6, ease, delay },
  });

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 md:px-10 py-20">
      <div className="section-divider mb-16" />

      <div ref={ref}>
        <motion.p
          {...anim(0)}
          className="text-sm md:text-base font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-4"
        >
          About
        </motion.p>

        <motion.h2
          {...anim(0.1)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--foreground)] mb-8 max-w-4xl tracking-tight leading-[1.1]"
        >
          Engineer by training, developer by build.
        </motion.h2>

        <motion.p
          {...anim(0.2)}
          className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-4"
        >
          I&apos;m a developer with an Instrumentation &amp; Control engineering
          background, now doing an M.Tech in Product Design &amp; Management at
          IIIT Hyderabad. I build full-stack web apps &mdash; mostly around Node,
          React, and databases &mdash; and care about shipping things people
          actually use.
        </motion.p>

        <motion.p
          {...anim(0.3)}
          className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-12"
        >
          Recently I&apos;ve worked product-side too, as a Technical Product Intern
          and Product Analyst &mdash; running research and turning it into roadmap
          decisions. I like sitting where engineering meets product: understanding
          why we&apos;re building something, then building it.
        </motion.p>

        <motion.div {...anim(0.4)} className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <p className="text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
                {ed.dates}
              </p>
              <h4 className="font-semibold text-[var(--foreground)] leading-snug mb-1">
                {ed.school}
              </h4>
              <p className="text-sm text-[var(--muted-foreground)]">{ed.degree}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-2 opacity-70">
                {ed.location}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
