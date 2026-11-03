"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

// Build a unique filter list from project tags
const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags.map((t) => t.toLowerCase())))
);
const filters = ["All", ...allTags.slice(0, 5)];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === active.toLowerCase())
        );

  return (
    <section id="portfolio" className="relative bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="A selection of projects I've built — from API integrations to interactive UIs."
        />

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                active === f
                  ? "bg-foreground text-background"
                  : "border border-border bg-white text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="card-soft card-soft-hover group relative overflow-hidden rounded-2xl p-5"
              >
                {/* Header */}
                <div className="relative mb-4 flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                    <span className="text-sm font-black text-emerald-700">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>

                {/* Title + desc */}
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features (revealed on hover) */}
                <ul className="mt-4 space-y-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-1.5 text-[11px] text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20 transition-colors hover:bg-emerald-500/20"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/70"
                    aria-label="View source"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-emerald-600"
                    aria-label="Open project"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/pczain76-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4 text-emerald-600" />
            See more on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
