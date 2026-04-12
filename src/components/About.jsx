export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="code-wrap reveal">
          <div className="code-card">
            <div className="code-header">
              <span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span>
              <span className="code-file">rahul.config.js</span>
            </div>
            <div className="code-body">
              <div><span className="ln">1</span><span className="kw">const</span> <span className="fn">rahul</span> <span className="punc">=</span> <span className="punc">{'{'}</span></div>
              <div><span className="ln">2</span>&nbsp;&nbsp;<span className="prop">name</span><span className="punc">:</span> <span className="str">'Rahul Kumar'</span><span className="punc">,</span></div>
              <div><span className="ln">3</span>&nbsp;&nbsp;<span className="prop">role</span><span className="punc">:</span> <span className="str">'MERN Stack Dev'</span><span className="punc">,</span></div>
              <div><span className="ln">4</span>&nbsp;&nbsp;<span className="prop">university</span><span className="punc">:</span> <span className="str">'GNA University'</span><span className="punc">,</span></div>
              <div><span className="ln">5</span>&nbsp;&nbsp;<span className="prop">cgpa</span><span className="punc">:</span> <span className="num">7.5</span><span className="punc">,</span></div>
              <div><span className="ln">6</span>&nbsp;&nbsp;<span className="prop">stack</span><span className="punc">: [</span></div>
              <div><span className="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">'MongoDB'</span><span className="punc">,</span> <span className="str">'Express'</span><span className="punc">,</span></div>
              <div><span className="ln">8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">'React.js'</span><span className="punc">,</span> <span className="str">'Node.js'</span></div>
              <div><span className="ln">9</span>&nbsp;&nbsp;<span className="punc">],</span></div>
              <div><span className="ln">10</span>&nbsp;&nbsp;<span className="prop">ai</span><span className="punc">: [</span><span className="str">'OpenAI'</span><span className="punc">,</span> <span className="str">'Face++'</span><span className="punc">],</span></div>
              <div><span className="ln">11</span>&nbsp;&nbsp;<span className="prop">mobile</span><span className="punc">:</span> <span className="str">'Capacitor'</span><span className="punc">,</span></div>
              <div><span className="ln">12</span>&nbsp;&nbsp;<span className="prop">available</span><span className="punc">:</span> <span className="kw">true</span></div>
              <div><span className="ln">13</span><span className="punc">{'}'}</span></div>
              <div><span className="ln">14</span></div>
              <div><span className="ln">15</span><span className="cm">{'// shipping daily '}<span className="blink">█</span></span></div>
            </div>
          </div>
          <div style={{position:'absolute',bottom:'-30px',right:'-30px',width:'180px',height:'180px',background:'radial-gradient(circle,rgba(123,94,167,.25),transparent 70%)',pointerEvents:'none'}}></div>
        </div>

        <div className="about-text reveal d1">
          <div className="sec-tag"><span>About me</span></div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.8rem,3vw,2.7rem)',fontWeight:800,letterSpacing:'-.03em',lineHeight:1.1,marginBottom:'1.5rem'}}>
            MERN Dev building <span className="gradient-text">AI-powered</span> products
          </h2>
          <p>I'm a <strong>MERN Stack Developer</strong> who loves building end-to-end products. From database design to deployment, I handle the full lifecycle and care deeply about both code quality and UX.</p>
          <p>My specialty is integrating <strong>AI APIs</strong> — OpenAI for intelligent features, Face++ for computer vision — into practical, revenue-ready apps with <strong>Razorpay payments</strong> and <strong>Capacitor mobile</strong> builds.</p>
          <p>Pursuing <strong>BCA at GNA University</strong> (7.5 CGPA), trained at Sensation Solutions, and actively looking for my next opportunity.</p>
          <div className="chips">
            {['React.js','Node.js','MongoDB','Express.js'].map(t=><span key={t} className="chip on">{t}</span>)}
            {['OpenAI API','Face++ API','Capacitor','Razorpay'].map(t=><span key={t} className="chip on2">{t}</span>)}
            {['JavaScript','Python','C++','Java','MySQL','Bootstrap','Cloudinary','Git & GitHub'].map(t=><span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
