import glowupImg from '../assets/glowup-preview.jpg'
import hireaiImg from '../assets/hireai-preview.jpg'

const PROJECTS = [
  {
    id: 1, num: '01', name: 'GlowUp AI',
    stack: 'MERN · OpenAI · Face++ · Razorpay · Capacitor',
    description: 'Full-stack AI beauty & skincare app. Face++ API handles real-time facial analysis, OpenAI delivers personalized recommendations, Pexels serves curated imagery, and Razorpay processes in-app purchases. Deployed as a cross-platform mobile app via Capacitor.',
    tags: ['MongoDB','Express','React.js','Node.js','OpenAI','Face++','Razorpay','Capacitor'],
    liveUrl: 'https://glowup-ai-g1yy.vercel.app/',
    githubUrl: 'https://github.com/rahul-5478',
    image: glowupImg
  },
  {
    id: 2, num: '02', name: 'HireAI — Job Portal',
    stack: 'MERN · OpenAI · Cloudinary · Razorpay · Capacitor',
    description: 'AI-driven full-stack job portal. OpenAI powers smart job matching and content generation, Cloudinary manages all resume and media uploads, Razorpay handles subscription billing. Converted to a cross-platform mobile app with Capacitor.',
    tags: ['MongoDB','Express','React.js','Node.js','OpenAI','Cloudinary','Razorpay'],
    liveUrl: 'https://job-portal-gules-six.vercel.app/',
    githubUrl: 'https://github.com/rahul-5478',
    image: hireaiImg
  },
  {
    id: 3, num: '03', name: 'Smart Overpricing Detector',
    stack: 'MERN · OpenAI · CSV Processing · Capacitor',
    description: 'Intelligent pricing analysis tool using OpenAI and CSV data. Users upload product data to receive AI-driven insights on price fairness and market positioning. Shipped as a cross-platform mobile app via Capacitor.',
    tags: ['MongoDB','Express','React.js','Node.js','OpenAI','CSV','Capacitor'],
    liveUrl: null,
    githubUrl: 'https://github.com/rahul-5478',
    image: null
  }
]

const ArrowIcon = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div style={{marginBottom:'3.5rem'}}>
        <div className="sec-tag"><span>Selected projects</span></div>
        <h2 className="sec-title">Things I've<br/>shipped</h2>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <div className="project-row" key={p.id} style={{opacity:1,transform:'none'}}>
            <span className="proj-num">{p.num}</span>

            <div>
              <div className="proj-stack-line">{p.stack}</div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
            </div>

            <div className="proj-right">
              {p.image && (
                <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noreferrer">
                  <img
                    src={p.image}
                    alt={p.name + ' preview'}
                    className="proj-screenshot"
                  />
                </a>
              )}
              <div style={{display:'flex', gap:'.7rem', flexWrap:'wrap', justifyContent:'flex-end'}}>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="proj-link proj-link-live">
                    Live ↗
                  </a>
                )}
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="proj-link">
                  GitHub <ArrowIcon />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
