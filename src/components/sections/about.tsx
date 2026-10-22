"use client";

import { Lightbulb, Target, Zap } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const highlights = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology solutions",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Growth-focused digital consulting",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Impactful brand experiences",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionHeader
          label="About Me"
          title="Building Digital Futures for Growing Organizations"
        />

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted leading-relaxed">
              I am the Founder of{" "}
              <span className="text-foreground font-medium">Karao Digital</span>,
              a creative technology studio dedicated to helping businesses embrace
              digital transformation through innovative technology, intelligent
              automation, strategic branding, and impactful digital experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted leading-relaxed">
              My expertise spans website development, AI integration, automation
              systems, branding, UI/UX, digital marketing, creative storytelling,
              and business growth consulting.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-muted leading-relaxed">
              I believe technology should simplify businesses, create opportunities,
              and empower organizations to scale with confidence.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-muted leading-relaxed">
              Every project I undertake combines creativity, strategy, and
              technology to deliver solutions that are practical, scalable, and
              future-ready.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <FadeIn key={item.title} delay={0.1 * i}>
            <div className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
