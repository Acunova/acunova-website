"use client"

import { ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <img
              src="/glow-accent.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover opacity-50"
            />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something intelligent together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Whether you need an innovation partner, technology advisory, or a custom intelligent solution — we&apos;d
            love to hear about your vision.
          </p>

          <form
            className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="glass w-full rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Request Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
