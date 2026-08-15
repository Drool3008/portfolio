"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, Code2, Mail } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const socials = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "LeetCode", href: site.socials.leetcode, icon: Code2 },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 md:px-10 pt-20 pb-10">
      <div className="section-divider mb-16" />

      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease }}
          className="text-sm md:text-base font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-[var(--foreground)] mb-8 max-w-4xl tracking-tight leading-[1.1]"
        >
          Let&apos;s build something{" "}
          <span
            className="italic font-medium text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            together.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-2xl"
        >
          I&apos;m open to software and product roles and internships. If you have a
          team or a problem worth building for, I&apos;d love to talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mb-12"
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
          >
            Get in touch
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="flex flex-wrap items-center gap-5 mb-16"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <s.icon className="w-4 h-4" />
              <span>{s.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mb-6" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-8">
        <p className="text-xs text-[var(--muted-foreground)]">© 2026 {site.name}.</p>
        <p className="text-xs text-[var(--muted-foreground)]">{site.location}</p>
      </div>
    </section>
  );
}
