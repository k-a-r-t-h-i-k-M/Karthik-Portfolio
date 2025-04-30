import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import AnimatedCursor from "@/components/animated-cursor"

export default function Home() {
  return (
    <main className="relative">
      <AnimatedCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
