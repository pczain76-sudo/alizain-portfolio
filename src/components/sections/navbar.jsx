"use client";

import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Handle scroll and active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((n) => n.href.slice(1));

      const current = sections.find((id) => {
        const el = document.getElementById(id);

        if (!el) return false;

        const rect = el.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActive(`#${current}`);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Handle navigation clicks
  const handleNav = (href) => {
    setOpen(false);

    // Update URL without page reload
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }

    // Smooth scroll to section
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(href);
  };

  // Handle browser Back and Forward
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash || "#home";

      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setActive(hash);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border py-2.5"
          : "py-4 bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 transition-all group-hover:ring-emerald-500/60">
            <Code2 className="h-4 w-4 text-emerald-600" />
          </span>

          <span className="hidden text-base font-semibold tracking-tight sm:block">
            Ali<span className="text-emerald-600"> Zain</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  active === item.href && "text-foreground"
                )}
              >
                {item.label}

                {active === item.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav("#contact")}
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-95"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="mx-4 mt-3 flex flex-col gap-1 rounded-xl border border-border bg-white p-3 shadow-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    "w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors",
                    active === item.href
                      ? "bg-emerald-500/10 text-emerald-700"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handleNav("#contact")}
                className="mt-2 w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}