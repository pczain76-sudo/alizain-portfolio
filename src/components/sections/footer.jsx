"use client";

import { ArrowUp, Download, Heart, Mail, Phone, MapPin } from "lucide-react";
import { profile, socials, navItems } from "@/lib/data";

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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 text-sm font-black text-emerald-700">
                AZ
              </span>
              <span className="text-lg font-semibold">
                Ali<span className="text-emerald-600"> Zain</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
              {profile.shortPitch}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:text-emerald-600 hover:scale-110"
                  title={s.name}
                  aria-label={s.name}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-600"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-600"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {profile.phone}
                </a>
              </li>
                           <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {profile.location}
              </li>
            </ul>

            <a
              href="/resume/ali-zain-resume.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20"
            >
              <Download className="h-3.5 w-3.5" /> Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} <span className="font-medium text-foreground">{profile.name}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with <Heart className="h-3 w-3 fill-emerald-500 text-emerald-500" /> using Next.js · Tailwind
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-emerald-600"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
