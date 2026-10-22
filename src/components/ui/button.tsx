"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-card-border text-foreground hover:bg-accent-muted hover:border-accent/30 hover:-translate-y-0.5",
    ghost: "text-foreground hover:bg-accent-muted",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm gap-2",
    md: "px-7 py-3 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClassName}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
}
