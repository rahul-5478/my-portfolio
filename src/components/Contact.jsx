import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | 'loading'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('empty')
      return
    }
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="contact-wrap">
        <div className="contact-info reveal">
          <h2>
            Let's build<br/>something<br/>
            <span className="gradient-text">great.</span>
          </h2>
          <p>I'm actively seeking full-time, freelance, or internship opportunities. If you need a MERN Stack Developer who ships AI-integrated, mobile-ready products — let's talk.</p>
          <div className="c-links">
            <a href="https://linkedin.com/in/rahul-kumar-a51935296" target="_blank" className="c-link">
              <span className="c-icon">in</span>
              linkedin.com/in/rahul-kumar-a51935296
            </a>
            <a href="https://github.com/rahul-5478" target="_blank" className="c-link">
              <span className="c-icon">gh</span>
              github.com/rahul-5478
            </a>
          </div>
        </div>

        <div className="contact-form-wrap reveal d1">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Tell me about the project or opportunity..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {status === 'success' && <div className="form-success">✅ Message sent successfully!</div>}
          {status === 'error' && <div className="form-error">❌ Something went wrong. Try again.</div>}
          {status === 'empty' && <div className="form-error">⚠️ Please fill all fields.</div>}

          <button
            className="btn-grad"
            style={{width:'100%',justifyContent:'center',fontFamily:"'DM Mono',monospace",fontSize:'.76rem'}}
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
            </svg>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </section>
  )
}
