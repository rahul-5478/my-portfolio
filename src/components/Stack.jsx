const techItems = [
  'React.js','Node.js','MongoDB','Express.js','JavaScript','OpenAI API',
  'Razorpay','Capacitor','Cloudinary','MySQL','Bootstrap','Git & GitHub'
]

export default function Stack() {
  return (
    <section className="stack-sec" id="stack">
      <div className="reveal">
        <div className="sec-tag"><span>Tech stack</span></div>
        <h2 className="sec-title">Tools I work<br/>with daily</h2>
      </div>

      <div className="marquee-wrap reveal">
        <div className="marquee-track">
          {[...techItems, ...techItems].map((t, i) => (
            <div className="spill" key={i}>
              <span className="sdot"></span>{t}
            </div>
          ))}
        </div>
      </div>

      <div className="stack-grid reveal">
        <div className="scard">
          <div className="scard-icon">⚛️</div>
          <h4>Frontend</h4>
          <ul><li>React.js</li><li>Bootstrap</li><li>JavaScript</li><li>HTML & CSS</li></ul>
        </div>
        <div className="scard">
          <div className="scard-icon">⚙️</div>
          <h4>Backend</h4>
          <ul><li>Node.js</li><li>Express.js</li><li>RESTful APIs</li><li>Python</li></ul>
        </div>
        <div className="scard">
          <div className="scard-icon">🤖</div>
          <h4>AI & APIs</h4>
          <ul><li>OpenAI API</li><li>Face++ API</li><li>Pexels API</li><li>Cloudinary</li></ul>
        </div>
        <div className="scard">
          <div className="scard-icon">🛠️</div>
          <h4>Tools & Deploy</h4>
          <ul><li>Capacitor</li><li>Razorpay</li><li>Git & GitHub</li><li>MySQL / MongoDB</li></ul>
        </div>
      </div>
    </section>
  )
}
