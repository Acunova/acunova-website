import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Vision } from "@/components/vision"
import { FocusAreas } from "@/components/focus-areas"
import { Approach } from "@/components/approach"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <Hero />
      <Vision />
      <FocusAreas />
      <Approach />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  )
}
