"use client";

import { FloatingShapes, GridPattern } from "@/components/ui/floating-shapes";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden"
    >
      <GridPattern />
      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Meaningful Together</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-6">
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re launching a startup, scaling your business,
            building a digital brand, modernizing your organization, or
            implementing AI-powered solutions, I&apos;d love to help you create
            something impactful.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            href="mailto:hello@karaodigital.com"
            size="lg"
          >
            Let&apos;s Talk
          </Button>
          <Button href="#work" variant="secondary" size="lg">
            View My Work
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
