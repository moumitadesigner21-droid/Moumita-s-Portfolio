"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <FadeIn delay={index * 0.05}>
      <div ref={ref} className="group">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-muted">{level}%</span>
        </div>
        <div className="h-2 rounded-full bg-accent-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent/70"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        </div>
      </div>
    </FadeIn>
  );
}

export function Skills() {
  return (
    <Section alt>
      <SectionHeader
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A diverse toolkit spanning development, design, marketing, and business strategy."
        align="center"
      />

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
        {SKILLS.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </Section>
  );
}
