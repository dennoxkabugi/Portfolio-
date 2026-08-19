const GROUPS = [
  {
    title: 'Languages & Frameworks',
    node: 'py / js',
    items: ['Python (Flask, FastAPI)', 'JavaScript', 'PHP', 'HTML & CSS', 'C'],
  },
  {
    title: 'Data & Algorithms',
    node: 'algo',
    items: ['Data structures', 'Sorting & graph algorithms', 'Complexity analysis', 'Discrete mathematics'],
  },
  {
    title: 'Systems & Deployment',
    node: 'cloud',
    items: ['Docker', 'Render', 'Linux (WSL2 / Ubuntu)', 'Git & GitHub (SSH)'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="skills__title">What I bring to a build</h2>

        <div className="skills__grid">
          {GROUPS.map((g) => (
            <div className="skills__card" key={g.title}>
              <div className="skills__card-head">
                <h3>{g.title}</h3>
                <span className="skills__node">{g.node}</span>
              </div>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__title {
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          margin-top: 14px;
          max-width: 20ch;
        }
        .skills__grid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .skills__card {
          background: var(--bg-panel);
          padding: 28px 30px;
        }
        .skills__card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 14px;
          margin-bottom: 16px;
        }
        .skills__card-head h3 {
          font-size: 1.05rem;
        }
        .skills__node {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--teal);
          letter-spacing: 0.05em;
        }
        .skills__card ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .skills__card li {
          color: var(--muted);
          font-size: 0.95rem;
          padding-left: 16px;
          position: relative;
        }
        .skills__card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 1px;
          background: var(--amber);
        }
        @media (max-width: 720px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
