const edu = [
  {
    icon: '🎓',
    degree: 'BCA',
    school: 'GNA University',
    score: 'CGPA · 7.5',
    scoreStyle: { background:'rgba(15,244,198,.1)', color:'var(--g1)', border:'1px solid rgba(15,244,198,.2)' }
  },
  {
    icon: '📚',
    degree: '12th Grade',
    school: 'JJ Senior Secondary School',
    score: '70% · Medical · PSEB',
    scoreStyle: { background:'rgba(123,94,167,.1)', color:'#a78fcc', border:'1px solid rgba(123,94,167,.2)' }
  },
  {
    icon: '🏫',
    degree: '10th Grade',
    school: 'Shri Mahavir Jain Model School',
    score: '75% · PSEB',
    scoreStyle: { background:'rgba(255,107,107,.1)', color:'#ff8f8f', border:'1px solid rgba(255,107,107,.2)' }
  }
]

export default function Education() {
  return (
    <section id="education">
      <div className="reveal">
        <div className="sec-tag"><span>Education</span></div>
        <h2 className="sec-title">Academic<br/>background</h2>
      </div>
      <div className="edu-grid">
        {edu.map((e, i) => (
          <div className={`edu-card reveal${i > 0 ? ' d'+i : ''}`} key={i}>
            <div className="edu-icon">{e.icon}</div>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <span className="edu-score" style={e.scoreStyle}>{e.score}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
