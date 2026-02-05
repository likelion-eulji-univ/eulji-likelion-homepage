"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Activities from "@/components/activities"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Popup from "@/components/popup"
import FloatingButton from "@/components/floating-button"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <main className="min-h-screen">
      <Popup />
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <Projects />
      <Contact />
      <FloatingButton />
    </main>
  )
}
