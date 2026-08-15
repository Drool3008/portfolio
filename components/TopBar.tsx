import { site } from "@/lib/site";

const nav = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-4">
        {/* Name */}
        <a
          href="#hero"
          className="text-base md:text-lg font-bold tracking-tight text-[var(--foreground)] hover:opacity-70 transition-opacity"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-3 sm:gap-5 md:gap-7 text-[11px] sm:text-sm font-medium text-[var(--muted-foreground)] overflow-x-auto no-scrollbar">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--foreground)] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
