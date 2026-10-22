"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        label="Testimonials"
        title="What Clients Say"
        subtitle="Placeholder reviews — ready for future client testimonials."
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="h-full glass rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-card-border">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
                <p className="text-xs text-accent mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
