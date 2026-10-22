"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FloatingShapes, GridPattern } from "@/components/ui/floating-shapes";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 md:px-8">
      <GridPattern />
      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>{SITE.designation} · {SITE.company}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-5xl">
            Helping Businesses Grow Through{" "}
            <span className="gradient-text">
              Technology, AI & Digital Experiences
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-8 max-w-3xl">
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Hi, I&apos;m <span className="text-foreground font-medium">{SITE.name}</span>,
            Founder of {SITE.company}.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            I partner with businesses, startups, NGOs, and educational institutions
            to build modern websites, AI-powered solutions, business automation
            systems, digital brands, and growth-focused marketing strategies.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            From technology consulting to digital transformation, I help
            organizations create meaningful digital experiences that drive
            measurable results.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Let&apos;s Connect
          </Button>
        </FadeIn>

        <FadeIn delay={0.7} className="mt-20 flex justify-center">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
