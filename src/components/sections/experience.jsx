"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="relative bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="My journey so far — from independent learner to freelance frontend developer."
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.article
                  key={`${exp.role}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 sm:pl-0 ${
                    isLeft ? "sm:pr-[52%]" : "sm:pl-[52%]"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-white ring-2 ring-emerald-500/30 sm:left-1/2 sm:-translate-x-1/2">
                    <Briefcase className="h-3.5 w-3.5 text-emerald-600" />
                  </div>

                  <div className="card-soft card-soft-hover rounded-2xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-emerald-700">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-foreground/80">{exp.org}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[10px] text-emerald-700 ring-1 ring-emerald-500/20">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
