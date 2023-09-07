
// "use client"
import Hero from "@/components/Hero/page"
import About from "@/components/About/page"
import Skills from "@/components/Skills/page"
import Experience from "@/components/Experience/page"

export default function Home() {
  return (
    <main className="h-screen text-white snap-y snap-mandatory z-0">

      {/* hero section */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* about section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*  experience section */}
      <section id="experince" className="snap-center">
        <Experience />
      </section>

      {/*skills section*/}
      <section id="skills" className="snap-center">
        <Skills />
      </section>


    </main>
  )
}
