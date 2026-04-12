export default function Training() {
  return (
    <section id="training">
      <div className="reveal">
        <div className="sec-tag"><span>Training & Certificates</span></div>
        <h2 className="sec-title">Real-world<br/>experience</h2>
      </div>
      <div className="training-wrap reveal">
        <div className="training-inner">
          <div className="training-left">
            <div className="badge">⚡ Industrial Training · 3 Months</div>
            <h3>MERN Stack Developer</h3>
            <div className="co">Sensation Solutions · Chandigarh / Mohali</div>
            <ul>
              <li>Built full-stack web apps using MongoDB, Express.js, React.js, Node.js</li>
              <li>Developed responsive frontends using React.js and Bootstrap</li>
              <li>Designed and integrated RESTful APIs with Node.js and MongoDB</li>
              <li>Contributed to real-world client projects with hands-on experience</li>
              <li>Applied Git version control, VS Code, and deployment workflows</li>
            </ul>
          </div>
          <div className="training-right">
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:'.75rem',fontWeight:700,color:'var(--muted)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:'1.2rem'}}>
              Certificates earned
            </div>
            <div className="cert-stack">
              <div className="cert-card">
                <div className="cert-label">Certificate of Completion</div>
                <div className="cert-name">Web Development</div>
                <div className="cert-org">Simplilearn</div>
              </div>
              <div className="cert-card">
                <div className="cert-label">Certificate of Completion</div>
                <div className="cert-name">DSA in C++</div>
                <div className="cert-org">LinkedIn Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
