
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const subject =
      (fd.get("subject") || "").toString().trim() ||
      `Portfolio contact from ${name}`;
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !email || !message) return;

    setSending(true);
    setError("");
    setSent(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: profile.email,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      form.reset();

    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);

      setTimeout(() => {
        setSent(false);
        setError("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">

          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="card-soft h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold">
                Get in <span className="text-emerald-600">touch</span>
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Let's get in touch! Feel free to contact me for collaboration,
                web development, or project opportunities anytime.
              </p>

              <div className="mt-6 space-y-3">
                {contactInfo.map((info) => {
                  const Inner = (
                    <div className="group flex items-center gap-4 rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:bg-emerald-500/5">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 transition-transform group-hover:scale-110">
                        <info.icon className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {info.label}
                        </div>

                        <div className="truncate text-sm font-medium">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={info.label}>{Inner}</div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>

                  Currently available for new projects
                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  Typical reply time: under 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="card-soft rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Message <span className="text-emerald-600">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Success / Error Messages */}
              {sent && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  Your message will be delivered directly to{" "}
                  <span className="text-emerald-600">
                    {profile.email}
                  </span>
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-muted-foreground"
      >
        {label}
        {required && <span className="text-emerald-600"> *</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
      />
    </div>
  );
}
