"use client";

import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Layers,
  Store,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  GRAMODAYA_FEATURES,
  GRAMODAYA_RESPONSIBILITIES,
  GRAMODAYA_TIMELINE,
} from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { GridPattern } from "@/components/ui/floating-shapes";

const iconMap = {
  layers: Layers,
  store: Store,
  handshake: Handshake,
  trending: TrendingUp,
};

export function Gramodaya() {
  return (
    <Section id="work" alt className="overflow-hidden">
      <GridPattern />

      <div className="relative">
        <SectionHeader
          label="Featured Project"
          title="Gramodaya"
          subtitle="Flagship Technology Project of Karao Digital — our most significant long-term collaboration."
        />

        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden gradient-border mb-16">
            <div className="glass rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Long-Term Technology Partner
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    Complete Technology Ecosystem Management
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Gramodaya is the first major technology project delivered by
                    Karao Digital and continues to be one of our most significant
                    long-term collaborations.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Karao Digital manages the complete technology ecosystem for
                    Gramodaya and works closely with the organization on both
                    strategic planning and day-to-day operations — supporting both
                    innovation and operational excellence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {GRAMODAYA_FEATURES.map((feature, i) => {
                    const Icon = iconMap[feature.icon];
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-2xl bg-background/50 border border-card-border hover:border-accent/20 transition-colors group"
                      >
                        <Icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-medium text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Workflow Diagram */}
        <FadeIn delay={0.2} className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Technology Workflow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {["Strategy", "Development", "Operations", "Growth"].map(
              (step, i, arr) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center font-semibold text-lg shadow-lg shadow-accent/20">
                      {i + 1}
                    </div>
                    <span className="mt-3 text-sm font-medium">{step}</span>
                  </motion.div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-accent/40 mx-6 lg:mx-10" />
                  )}
                </div>
              )
            )}
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.3} className="mb-16">
          <h3 className="text-xl font-semibold mb-8">Partnership Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 md:-translate-x-px" />
            <div className="space-y-8">
              {GRAMODAYA_TIMELINE.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:text-right flex md:justify-end">
                    <div
                      className={`glass rounded-2xl p-6 max-w-md ${
                        i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                      }`}
                    >
                      <span className="text-accent font-semibold text-sm">
                        {item.year}
                      </span>
                      <h4 className="font-semibold mt-1">{item.title}</h4>
                      <p className="text-sm text-muted mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background -translate-x-1.5 md:-translate-x-1.5 top-6" />
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Responsibilities */}
        <FadeIn delay={0.4}>
          <h3 className="text-xl font-semibold mb-6">My Responsibilities</h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GRAMODAYA_RESPONSIBILITIES.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-muted/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </Section>
  );
}
