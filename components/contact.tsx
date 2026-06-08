"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"

const founders = [
  {
    name: "Francois Mavunila",
    role: "Co-Founder",
    initials: "FM",
    email: "francoismavunila@gmail.com",
  },
  {
    name: "Taboka Siyalumba",
    role: "Co-Founder",
    initials: "TS",
  },
]

const phones = ["+263 78 385 7780", "+263 77 493 8581"]
const emails = ["acunovapvtltd@gmail.com", "francoismavunila@gmail.com"]

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <img
              src="/glow-accent.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover opacity-50"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + form */}
            <div>
              <h2 className="max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something intelligent together
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Whether you need an innovation partner, technology advisory, or a custom intelligent solution —
                we&apos;d love to hear about your vision.
              </p>

              <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
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

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="size-4 text-primary" />
                    Call us
                  </div>
                  <ul className="mt-2 space-y-1">
                    {phones.map((p) => (
                      <li key={p}>
                        <a
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="size-4 text-primary" />
                    Email us
                  </div>
                  <ul className="mt-2 space-y-1">
                    {emails.map((e) => (
                      <li key={e}>
                        <a
                          href={`mailto:${e}`}
                          className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {e}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: founders */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-primary">Meet the founders</h3>
              <div className="mt-5 grid gap-4">
                {founders.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center gap-4 rounded-2xl border border-glass-border bg-card/80 p-5 backdrop-blur-xl"
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground">
                      {f.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-foreground">{f.name}</p>
                      <p className="text-sm text-muted-foreground">{f.role}</p>
                      {f.email && (
                        <a
                          href={`mailto:${f.email}`}
                          className="mt-1 inline-flex items-center gap-1.5 break-all text-sm text-primary transition-colors hover:text-foreground"
                        >
                          <Mail className="size-3.5 shrink-0" />
                          {f.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
