"use client";

import { CheckCircle2, Flower2, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import {
  EDUCATION_RESPONSIBILITIES,
  SCHOOLS,
} from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const schoolIcons = {
  tree: TreePine,
  flower: Flower2,
};

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        label="Education Sector"
        title="Helping Educational Institutions Grow Digitally"
        subtitle="Strengthening digital presence and accelerating admissions through strategic marketing and branding."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {SCHOOLS.map((school, i) => {
          const Icon = schoolIcons[school.icon];
          return (
            <FadeIn key={school.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden gradient-border h-full"
              >
                <div className="glass rounded-3xl p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{school.name}</h3>
                      <p className="text-sm text-accent">Digital Growth Partner</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {school.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn>
        <p className="text-muted leading-relaxed max-w-3xl mb-8">
          Alongside technology consulting and website development, I work closely
          with educational institutions to strengthen their digital presence and
          accelerate admissions through strategic marketing. I currently manage the
          complete digital marketing and branding activities for both schools.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h3 className="text-lg font-semibold mb-6">My Responsibilities</h3>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EDUCATION_RESPONSIBILITIES.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-muted/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-10">
        <p className="text-muted leading-relaxed max-w-3xl italic border-l-2 border-accent pl-6">
          Every campaign is carefully designed to build trust among parents,
          increase admissions, strengthen brand identity, and create a lasting
          digital presence for the schools.
        </p>
      </FadeIn>
    </Section>
  );
}
