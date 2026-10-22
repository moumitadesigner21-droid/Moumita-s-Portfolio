"use client";

import {
  Bot,
  Globe,
  Megaphone,
  Palette,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const iconMap = {
  globe: Globe,
  bot: Bot,
  megaphone: Megaphone,
  palette: Palette,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function Services() {
  return (
    <Section id="services" alt>
      <SectionHeader
        label="Services"
        title="What I Do"
        subtitle="Comprehensive digital solutions spanning technology, creativity, and business growth."
        align="center"
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <StaggerItem key={service.category}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group h-full glass rounded-2xl p-7 hover:shadow-xl hover:shadow-accent/5 transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
