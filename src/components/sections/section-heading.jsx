"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  // Split title so last word gets the accent gradient
  const words = title.split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words.slice(-1).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
        <span className="h-1 w-1 rounded-full bg-emerald-500" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {head} <span className="text-gradient">{tail}</span>
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-sm text-muted-foreground sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
