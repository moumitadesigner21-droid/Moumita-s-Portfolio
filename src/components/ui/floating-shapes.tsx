"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-gradient"
        style={{
          background:
            "radial-gradient(circle, rgba(11,110,79,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(11,110,79,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-accent/10 animate-float opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-3xl border border-accent/5 rotate-12 animate-float-delayed opacity-30" />
      <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-2xl bg-accent/5 rotate-45 animate-float opacity-50" />
    </div>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
}
