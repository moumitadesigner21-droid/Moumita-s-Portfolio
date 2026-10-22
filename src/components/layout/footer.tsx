import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";

export function Footer() {
  return (
    <footer className="relative border-t border-card-border bg-section-alt">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {SITE.name}
            </h3>
            <p className="mt-2 text-muted">{SITE.designation}</p>
            <p className="mt-1 text-accent font-medium">{SITE.company}</p>
            <a
              href={SITE.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-muted hover:text-accent transition-colors"
            >
              {SITE.website}
            </a>
          </div>
          <div className="max-w-md">
            <p className="text-muted leading-relaxed">{SITE.tagline}</p>
          </div>
        </FadeIn>
        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Crafted with strategy, creativity & technology.</p>
        </div>
      </div>
    </footer>
  );
}
