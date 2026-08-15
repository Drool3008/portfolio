"use client";

import { Timeline } from "@/components/ui/timeline";
import { MapPin, Clock } from "lucide-react";
import { experience } from "@/lib/experience";

function ExperienceCard({
  role,
  company,
  dates,
  location,
  description,
  highlights,
}: {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div className="mb-10 p-5 md:p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-3">
        <h4 className="text-base md:text-lg font-semibold text-[var(--foreground)] leading-snug">
          {role}
        </h4>
        <p className="text-sm font-medium text-[var(--accent-foreground)] mt-0.5 opacity-70">
          {company}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[var(--muted-foreground)] mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {dates}
        </span>
        <span className="opacity-30">·</span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {location}
        </span>
      </div>

      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
        {description}
      </p>

      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

const timelineData = experience.map((e) => ({
  title: e.period,
  content: (
    <ExperienceCard
      role={e.role}
      company={e.company}
      dates={e.dates}
      location={e.location}
      description={e.description}
      highlights={e.highlights}
    />
  ),
}));

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 md:px-10 py-20">
      <div className="section-divider mb-16" />

      <div className="mb-16">
        <p className="text-sm md:text-base font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--foreground)] mb-6 tracking-tight leading-[1.1]">
          Where I&apos;ve worked
        </h2>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
