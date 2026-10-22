"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { OTHER_PROJECTS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function OtherProjects() {
  return (
    <Section>
      <SectionHeader
        label="More Work"
        title="Other Projects"
        subtitle="Selected business websites crafted with performance, trust, and elegant design."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OTHER_PROJECTS.map((project, i) => {
          const href = "url" in project ? project.url : undefined;
          const CardWrapper = href ? "a" : "div";
          const wrapperProps = href
            ? {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Visit ${project.name}`,
              }
            : {};

          return (
          <FadeIn key={project.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden gradient-border h-full"
            >
              <CardWrapper
                {...wrapperProps}
                className={href ? "block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" : "h-full"}
              >
              <div className="glass rounded-3xl p-8 md:p-10 h-full flex flex-col">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 pointer-events-none`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <div className="p-2 rounded-full border border-card-border group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </CardWrapper>
            </motion.div>
          </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
