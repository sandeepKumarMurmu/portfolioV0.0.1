"use client";

import { FormEvent } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  // No backend needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\nReply to: ${f.get("email")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-chipink focus:outline-none";

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="container-x max-w-3xl text-center">
        <h2 className="section-title !mb-3">Get in Touch</h2>
        <p className="text-muted">Ready to collaborate? Let&rsquo;s discuss your next project or role.</p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
          <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">{profile.phone}</a>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-line hover:bg-chip">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-line hover:bg-chip">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
          </a>
        </div>

        {/* <form onSubmit={onSubmit} className="card mt-10 space-y-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Name</span>
              <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Email</span>
              <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Message</span>
            <textarea name="message" required rows={4} className={field} placeholder="Tell me about the role or project" />
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
        </form> */}
      </div>
    </section>
  );
}
