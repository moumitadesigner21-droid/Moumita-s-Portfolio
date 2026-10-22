"use client";

import { Award } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const stats = [
  { value: 3, suffix: "+", label: "Long-Term Partners" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "+", label: "Service Areas" },
  { value: 100, suffix: "%", label: "Client Focus" },
];

export function Achievements() {
  return (
    <Section alt>
      <SectionHeader
        label="Track Record"
        title="Achievements"
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="text-center p-6 rounded-2xl glass">
              <div className="text-3xl md:text-4xl font-semibold text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {ACHIEVEMENTS.map((achievement) => (
          <StaggerItem key={achievement}>
            <div className="flex items-start gap-3 p-4 rounded-xl glass hover:shadow-md transition-shadow">
              <Award className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-sm font-medium">{achievement}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
