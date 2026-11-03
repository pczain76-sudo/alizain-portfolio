"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technicalSkills, professionalSkills } from "@/lib/data";
import { SectionHeading } from "./section-heading";

function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="relative h-full rounded-full bg-emerald-500"
        />
      </div>
    </div>
  );
}

function CircularProgress({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-muted"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
            className="text-emerald-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-foreground">{level}%</span>
        </div>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="My toolbox"
          description="Technologies I work with every day, plus the soft skills I bring to teams."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Technical skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="card-soft h-full rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-semibold">Technical Skills</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {technicalSkills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="card-soft h-full rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-semibold">Professional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {professionalSkills.map((s, i) => (
                  <CircularProgress
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
