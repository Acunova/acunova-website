const pillars = [
  {
    n: "Intelligence",
    body: "Leveraging advanced technologies like AI and data analytics to create smart solutions that adapt to your needs.",
  },
  {
    n: "Integration",
    body: "Creating seamless hardware-software solutions that work perfectly together within your existing ecosystem.",
  },
  {
    n: "Impact",
    body: "Focusing on measurable business outcomes and sustainable growth through practical innovation.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <img
          src="/glow-accent.png"
          alt=""
          aria-hidden="true"
          className="h-[140%] w-[140%] max-w-none object-cover opacity-40"
          style={{ animation: "spin-slow 60s linear infinite" }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">How we work</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Innovation, built on three principles
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every solution we develop or recommend combines bold innovation with grounded practicality.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.n} className="glass-strong rounded-3xl p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl font-medium">{p.n}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
