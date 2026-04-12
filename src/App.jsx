import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Training from './components/Training'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const dot = dotRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
    }
    const anim = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      requestAnimationFrame(anim)
    }
    document.addEventListener('mousemove', onMove)
    anim()

    // Reveal on scroll
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), 60)
      }), { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <div className="mesh">
        <div className="mesh-blob m1"></div>
        <div className="mesh-blob m2"></div>
        <div className="mesh-blob m3"></div>
      </div>
      <Navbar />
      <Hero />
      <div className="sec-divider"></div>
      <About />
      <div className="sec-divider"></div>
      <Projects />
      <div className="sec-divider"></div>
      <Stack />
      <div className="sec-divider"></div>
      <Training />
      <div className="sec-divider"></div>
      <Education />
      <div className="sec-divider"></div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
