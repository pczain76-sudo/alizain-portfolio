"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Zap, Rocket } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  const highlights = [
    { icon: Code2, label: "Clean code", desc: "Readable, semantic, maintainable" },
    { icon: Zap, label: "Fast learner", desc: "Self-taught across the JS stack" },
    { icon: Rocket, label: "Project-driven", desc: "10+ real-world builds shipped" },
  ];

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me"
          description="A quick intro to who I am and what I bring to the table."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-12">
          {/* Left: code-window style card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="card-soft rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground">developer.js</span>
              </div>
              <pre className="overflow-x-auto rounded-xl bg-muted/60 p-4 text-xs leading-relaxed text-muted-foreground">
                <code>
                  <span className="text-purple-600">const</span>{" "}
                  <span className="text-emerald-600">developer</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-yellow-600">{"{"}</span>
                  {"\n  "}
                  <span className="text-green-700">name</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-rose-600">&apos;Ali Zain&apos;</span>,
                  {"\n  "}
                  <span className="text-green-700">role</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-rose-600">&apos;Full Stack Developer&apos;</span>,
                  {"\n  "}
                  <span className="text-green-700">stack</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-yellow-600">[</span>
                  <span className="text-rose-600">&apos;Next&apos;</span>,{" "}
                  <span className="text-rose-600">&apos;React&apos;</span>,{" "}
                  <span className="text-rose-600">&apos;JS&apos;</span>,{" "}
                  <span className="text-rose-600">&apos;MongoDB&apos;</span>,{""}
                  <span className="text-rose-600">&apos;PostgreSql&apos;</span>
                  <span className="text-yellow-600">]</span>,
                  {"\n  "}
                  <span className="text-green-700">goal</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-rose-600">&apos;Full Stack Specilization&apos;</span>,
                  {"\n  "}
                  <span className="text-green-700">learning</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-rose-600">&apos;Node.js + Express&apos;</span>,
                  {"\n  "}
                  <span className="text-green-700">available</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-600">true</span>,
                  {"\n"}
                  <span className="text-yellow-600">{"}"}</span>;
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
  Building modern applications with{" "}
  <span className="text-gradient">Next.js, MERN & PERN.</span>
</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.label} className="card-soft card-soft-hover rounded-xl p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
                    <h.icon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="text-sm font-semibold">{h.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{h.desc}</div>
                </div>
              ))}
            </div>

           <ul className="mt-8 grid gap-2 sm:grid-cols-2">
  {[
    "Full Stack Development (MERN & PERN)",
    "Next.js & React Application Development",
    "REST API Development & Integration",
    "Node.js & Express.js Backend",
    "MongoDB & PostgreSQL Databases",
    "Desktop Applications with Electron.js",
    "Responsive UI with Tailwind CSS",
    "Git & GitHub Workflows",
    "ERP, POS & Inventory Management Systems",
    "Performance & Application Optimization",
  ].map((item) => (
    <li
      key={item}
      className="flex items-start gap-2 text-sm text-muted-foreground"
    >
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
      {item}
    </li>
  ))}
</ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
