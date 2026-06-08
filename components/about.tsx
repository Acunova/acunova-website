export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">About us</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                An innovation hub for intelligent technology
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Acunova is positioned at the intersection of artificial intelligence, data analytics, and embedded
                systems. Founded as an innovation hub, we combine cutting-edge expertise with practical business acumen
                to deliver transformative results for our clients.
              </p>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent">Our story</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Acunova was born from the recognition that businesses face increasing challenges navigating modern
                technology. In a landscape where AI, data, and embedded systems evolve rapidly, we established ourselves
                as both an innovation laboratory and a trusted technology partner.
              </p>
            </div>

            <div className="border-t border-glass-border p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Innovation", v: "Laboratory-driven product development" },
                  { k: "Advisory", v: "Strategic technology guidance" },
                  { k: "Intelligence", v: "AI, ML & advanced analytics" },
                  { k: "Embedded", v: "Electronics & connected IoT" },
                ].map((c) => (
                  <div key={c.k} className="glass rounded-2xl p-5">
                    <p className="text-sm font-medium text-foreground">{c.k}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                Each solution is built to be smart, integrated, and impactful — transforming promising prototypes into
                scalable, market-ready solutions that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
