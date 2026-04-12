import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">
        <div className="logo-mark">RK</div>
        rahul.dev
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#training">Training</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="https://github.com/rahul-5478" target="_blank" className="nav-cta">GitHub ↗</a>
    </nav>
  )
}
