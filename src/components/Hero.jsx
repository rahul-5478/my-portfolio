import photo from '../assets/photo.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-tag">
          <span className="status-dot"></span> Open to opportunities · MERN Stack Dev
        </div>
        <h1>
          <span className="h1-line gradient-text">Rahul</span>
          <span className="h1-line outline-text">Kumar</span>
          <span className="h1-line" style={{color:'var(--text)',fontSize:'.6em',letterSpacing:'-.02em',marginTop:'.2em'}}>
            Building the web<span className="gradient-text">.</span>
          </span>
        </h1>
        <p className="hero-desc">
          I build <strong>AI-powered MERN Stack</strong> applications — from facial analysis to job portals — shipping them to the web <em>and</em> mobile with clean code and real-world results.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-grad">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            View Projects
          </a>
          <a href="https://linkedin.com/in/rahul-kumar-a51935296" target="_blank" className="btn-outline">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Profile Photo */}
      <div className="hero-photo-wrap">
        <div className="hero-photo-outer">
          <div className="hero-photo-spin"></div>
          <div className="hero-photo-spin2"></div>
          <div className="hero-photo-ring">
            <img className="hero-photo-img" src={photo} alt="Rahul Kumar" />
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span style={{fontSize:'.58rem',letterSpacing:'.22em',textTransform:'uppercase',color:'var(--muted)'}}>Scroll</span>
        <div style={{width:'1px',height:'50px',background:'linear-gradient(to bottom,var(--g1),transparent)',animation:'scrollPulse 2.5s ease-in-out infinite'}}></div>
      </div>
    </section>
  )
}
