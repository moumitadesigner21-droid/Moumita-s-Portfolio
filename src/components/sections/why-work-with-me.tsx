"use client";

import { Building2, HeartHandshake, Rocket, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    icon: Building2,
    title: "Business Understanding",
    description: "I don't just build websites — I understand how businesses operate and grow.",
  },
  {
    icon: Rocket,
    title: "Scalable Systems",
    description: "Solutions designed for long-term growth, not just short-term fixes.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "Your dedicated technology and digital growth partner for the journey ahead.",
  },
  {
    icon: Users,
    title: "Diverse Experience",
    description: "Startups, NGOs, educational institutions, and growing companies.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionHeader
          label="Why Work With Me"
          title="Because I Don't Just Build Websites"
        />

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted leading-relaxed">
              I understand businesses. I help organizations simplify operations,
              build stronger brands, improve digital presence, automate workflows,
              and create scalable systems that contribute to long-term growth.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted leading-relaxed">
              Whether it&apos;s a startup, NGO, educational institution, or growing
              company, my goal is to become a long-term technology and digital
              growth partner.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <FadeIn key={reason.title} delay={0.1 * i}>
            <div className="text-center p-6 rounded-2xl glass hover:shadow-lg hover:shadow-accent/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-accent-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted">{reason.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
