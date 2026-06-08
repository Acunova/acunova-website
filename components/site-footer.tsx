export function SiteFooter() {
  return (
    <footer className="px-4 pb-10">
      <div className="glass mx-auto max-w-6xl rounded-3xl p-8 sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" fill="none" className="size-7 text-primary" aria-hidden="true">
                <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <path d="M16 5 L26 27 H21 L16 15 L11 27 H6 Z" fill="currentColor" />
              </svg>
              <span className="text-lg font-semibold tracking-tight">Acunova</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Intelligent systems & solutions at the intersection of AI, data, and embedded technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Company"
              links={[
                { label: "About", href: "#about" },
                { label: "Vision", href: "#vision" },
                { label: "Approach", href: "#approach" },
                { label: "Focus Areas", href: "#focus" },
              ]}
            />
            <FooterCol
              title="Founders"
              links={[
                { label: "Francois Mavunila", href: "mailto:francoismavunila@gmail.com" },
                { label: "Taboka Siyalumba", href: "#contact" },
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                { label: "acunovapvtltd@gmail.com", href: "mailto:acunovapvtltd@gmail.com" },
                { label: "+263 78 385 7780", href: "tel:+263783857780" },
                { label: "+263 77 493 8581", href: "tel:+263774938581" },
              ]}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-glass-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Acunova. All rights reserved.</p>
          <p>Intelligence · Integration · Impact</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
