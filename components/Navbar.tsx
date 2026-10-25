"use client";

import { useState } from "react";
import { nav, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // The class is set by the inline script in layout.tsx; we only flip it here.
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  const linkClass = "rounded-md px-3 py-2 text-sm text-muted transition hover:bg-chip hover:text-ink";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#about" className="text-lg font-bold tracking-tight">
          {profile.firstName}.dev
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
          ))}
          <a href={profile.resume} className={linkClass} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line transition hover:bg-chip"
          >
            {/* sun shows in dark mode, moon shows in light mode */}
            <svg className="hidden h-5 w-5 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            <svg className="block h-5 w-5 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="container-x flex flex-col gap-1 border-t border-line py-3 md:hidden">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={linkClass}>{l.label}</a>
          ))}
          <a href={profile.resume} className={linkClass} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      )}
    </header>
  );
}
