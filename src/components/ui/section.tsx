"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {label && (
        <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

export function Section({
  id,
  children,
  className,
  alt = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 px-6 md:px-8",
        alt && "bg-section-alt",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
