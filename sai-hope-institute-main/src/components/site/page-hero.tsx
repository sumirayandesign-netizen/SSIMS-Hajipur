import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, crumbs = [] }: { eyebrow?: string; title: string; subtitle?: string; crumbs?: { to?: string; label: string }[] }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 gradient-brand-soft" />
      <div aria-hidden className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <nav className="flex items-center gap-1.5 text-xs text-subtle mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={12} />
              {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-deep">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep max-w-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-lg text-subtle max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}