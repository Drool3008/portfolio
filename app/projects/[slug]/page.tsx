import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
        {label}
      </h3>
      <p className="text-[15px] font-medium text-[var(--foreground)] leading-snug">
        {value}
      </p>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen relative" style={{ background: "var(--background)" }}>
      {/* Back button */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-20">
        <Link
          href="/#projects"
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-md text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted)] via-[var(--background)] to-[var(--card)]" />
        <div className="relative z-10 max-w-5xl mx-auto w-full px-5 md:px-10 pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="w-fit rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5 text-[var(--foreground)] shadow-sm mb-6">
            {project.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-4 leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl leading-relaxed">
            {project.blurb}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-[var(--muted-foreground)] border border-[var(--border)] rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-5 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8 h-fit md:sticky md:top-10">
            {project.role && <Meta label="Role" value={project.role} />}
            {project.timeframe && <Meta label="Type" value={project.timeframe} />}
            <Meta label="Stack" value={project.tags.join(", ")} />
            <div className="flex flex-col gap-2 pt-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                  <Github className="w-4 h-4" /> View code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-8 text-[var(--foreground)]">{project.content}</div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="border-t border-[var(--border)] mt-10 md:mt-20">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-[var(--foreground)]">
            Want to see more?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full text-[var(--background)] bg-[var(--foreground)] hover:scale-[1.02] transition-all"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </div>
  );
}
