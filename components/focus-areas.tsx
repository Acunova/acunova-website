import { FlaskConical, Compass, Cpu, type LucideIcon } from "lucide-react"

type Area = {
  icon: LucideIcon
  title: string
  body: string
  points: string[]
}

const areas: Area[] = [
  {
    icon: FlaskConical,
    title: "Innovation Laboratory",
    body: "A structured environment for developing and validating technology solutions.",
    points: [
      "Incubate commercially viable products",
      "Test and validate business models",
      "Transform prototypes into market-ready solutions",
    ],
  },
  {
    icon: Compass,
    title: "Technology Advisory",
    body: "Consulting that helps organizations navigate their transformation journey.",
    points: [
      "Strategic implementation guidance",
      "Custom solution development",
      "Digital transformation roadmapping",
    ],
  },
  {
    icon: Cpu,
    title: "Intelligent Solutions",
    body: "Integrated solutions that drive real, measurable business value.",
    points: [
      "AI & Machine Learning",
      "Advanced data analytics",
      "Embedded electronics & IoT",
    ],
  },
]

export function FocusAreas() {
  return (
    <section id="focus" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">What we do</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Core focus areas
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Acunova sits at the intersection of artificial intelligence, data analytics, and embedded systems —
            combining cutting-edge expertise with practical business acumen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {areas.map((a) => {
            const Icon = a.icon
            return (
              <article
                key={a.title}
                className="glass group relative overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="glass-strong flex size-12 items-center justify-center rounded-2xl">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-medium">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
