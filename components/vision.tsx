const values = [
  {
    title: "Customer Focus",
    body: "We appeal to the real needs of our users, building personalized experiences that put people first.",
  },
  {
    title: "Continuous Innovation",
    body: "We operate as an innovation laboratory — always experimenting, validating, and pushing what's possible.",
  },
  {
    title: "High Standards & Quality",
    body: "Every solution is optimized to save resources and engineered to the highest standards of quality.",
  },
]

export function Vision() {
  return (
    <section id="vision" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Vision</span>
            <p className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              To pioneer intelligent technologies that seamlessly enhance everyday life, creating a future where
              innovation empowers everyone.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Easy to use", "Personalized", "Optimized", "Adaptive"].map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Mission</span>
            <p className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              To transform businesses and lives through innovative AI, computing, and electronics solutions that deliver
              measurable value and sustainable growth.
            </p>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
              Our products are smart and intelligent, seamlessly integrating with the user&apos;s daily life to drive
              productivity and growth.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Core values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="glass rounded-2xl p-6">
                <span className="text-sm font-mono text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-medium">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
