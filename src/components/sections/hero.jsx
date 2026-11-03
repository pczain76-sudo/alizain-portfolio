"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, stats, socials } from "@/lib/data";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance & collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            <br />
            <span className="text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
              {profile.roleFull}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.shortPitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
                        <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              View work
            </a>
            <a
              href="/resume/ali-zain-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-emerald-600" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Next.js FUll Stack + MERN + PERN
            </span>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex items-center gap-2"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:text-emerald-600 hover:border-emerald-500/40 hover:scale-110"
                title={s.name}
                aria-label={s.name}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: floating card with avatar + stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm animate-float">
            <div className="card-soft rounded-2xl p-6">
              {/* Avatar — profile picture with AZ initials fallback */}
              <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-emerald-500/20">
                {imgError ? (
                  // Fallback: show "AZ" initials when no image uploaded yet
                  <div className="absolute inset-0 grid place-items-center text-5xl font-black text-white">
                    {profile.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                ) : (
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold">{profile.name}</h3>
                <p className="text-xs text-emerald-600">{profile.role}</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-muted/40 p-3 text-center"
                  >
                    <div className="text-2xl font-bold text-foreground">
                      {s.value.toLocaleString()}
                      <span className="text-base">{s.suffix}</span>
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="mt-4 block rounded-xl bg-muted px-4 py-2.5 text-center text-xs text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-700"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-emerald-600 md:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

function SocialIcon({ name }) {
  const cls = "h-4 w-4";
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8.6 1.7 1 .8-.6 2.2-1 3.5-.8 0 0 1.6.1 1.7 1.6 0 0 .9.3 1.6.6.8.4 1.7 1.2 1.7 1.2.6.2 1.4.5 2 .2.5-1.7.4-2.7.4-2.9 0-2.8-2.6-9.7-10.2-9.7z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.7 1.3-.1.2-.1.5-.1.8V19h-3V8h3v1.3c.4-.6 1.2-1.5 2.8-1.5 2.1 0 3.6 1.4 3.6 4.3V19z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M18.9 4.5h2.7l-5.9 6.7L23 21h-5.4l-4.3-5.6-4.9 5.6H5.6l6.3-7.2L5 4.5h5.5l3.9 5.1 4.5-5.1zm-1 15.7h1.5L9.1 6.1H7.5L17.9 20.2z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
