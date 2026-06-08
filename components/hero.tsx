import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:pt-44">
      {/* background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/hero-aurora.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-10%] top-[-6%] h-[120%] w-[80%] object-contain opacity-80 sm:right-[-4%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Innovation Lab · AI · Embedded Systems
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Pioneering intelligent technologies for a better tomorrow
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Creating a future where innovation empowers everyone through seamless, adaptive, and optimized solutions across
          AI, data analytics, and connected systems.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#focus"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-glass-border"
          >
            Our Services
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { k: "AI & ML", v: "Intelligent solutions" },
            { k: "Data", v: "Advanced analytics" },
            { k: "IoT", v: "Connected systems" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl p-4">
              <dt className="text-lg font-semibold tracking-tight">{s.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
