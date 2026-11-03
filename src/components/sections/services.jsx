"use client";

import { motion } from "framer-motion";
import { Layout, Code2, Smartphone, Atom } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const iconMap = {
  layout: Layout,
  code: Code2,
  responsive: Smartphone,
  react: Atom,
};

export function Services() {
  return (
    <section id="services" className="relative bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I do"
          description="From clean responsive layouts to dynamic JavaScript apps — here are the services I offer."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-soft card-soft-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>

                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>0{i + 1}</span>
                  <span className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
