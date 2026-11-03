"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="My background"
          description="Academic and self-taught learning paths that shaped my developer journey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-soft card-soft-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500 opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 transition-transform group-hover:scale-110">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
              </div>

              <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[10px] text-emerald-700 ring-1 ring-emerald-500/20">
                <Calendar className="h-3 w-3" />
                {edu.period}
              </div>

              <h3 className="text-base font-semibold leading-tight">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-700">{edu.institution}</p>

              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {edu.location}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {edu.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
