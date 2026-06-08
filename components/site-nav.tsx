"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled ? "glass-strong shadow-lg shadow-black/30" : "glass",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="size-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight">Acunova</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Request Consultation
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-glass-border md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={cn("h-0.5 w-5 bg-foreground transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-5 bg-foreground transition", open && "opacity-0")} />
              <span className={cn("h-0.5 w-5 bg-foreground transition", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-glass hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Request Consultation
          </a>
        </div>
      )}
    </header>
  )
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path
        d="M16 5 L26 27 H21 L16 15 L11 27 H6 Z"
        fill="currentColor"
      />
    </svg>
  )
}
