"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { site } from "@/lib/site";
import { ArrowRight, Github } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function CodeCard() {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-800">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-neutral-500 font-mono">dhawal.ts</span>
      </div>
      <pre className="p-5 text-[13px] leading-relaxed font-mono text-neutral-300 overflow-x-auto">
        <code>{`const dhawal = {
  role: ["Developer", "Product"],
  stack: ["Java", "JS", "C++", "Python"],
  frameworks: ["React", "Node", "Spring"],
  building: "real, usable products",
  open: true,
};`}</code>
        <span className="inline-block w-2 h-4 align-middle bg-neutral-500 animate-pulse" />
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <div id="hero" className="w-full bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease, delay: 0.1 }}
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-8 min-h-[560px] px-8 md:px-12 py-20"
      >
        {/* Left content */}
        <div className="flex-1 relative z-10">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4 font-medium">
            {site.roleLong}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.1] mb-5">
            I build products
            <br />
            <span
              className="italic font-normal text-neutral-400"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              from idea
            </span>
            <br />
            to production.
          </h1>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md mb-8">
            {site.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 hover:scale-[1.03] transition-all duration-200"
            >
              View work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 hover:text-white hover:scale-[1.03] transition-all duration-200"
            >
              Resume
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 hover:text-white hover:scale-[1.03] transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Right: code card (dev signature, no 3D) */}
        <div className="flex-1 w-full relative z-10 hidden md:block">
          <CodeCard />
        </div>
      </motion.div>
    </div>
  );
}
