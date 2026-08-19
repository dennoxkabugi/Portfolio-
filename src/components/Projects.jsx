const SIDE_PROJECTS = [
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="projects__title">Work I've shipped</h2>

        <div className="feature">
          <div className="feature__text">
            <span className="feature__tag">Flagship project</span>
            <h3>Afya Mis</h3>
            <p className="feature__desc">
              A full-stack hospital management platform .
              It takes a patient details and admits to the hospital, 
              it also allows the hospital to manage patients, doctors and other staff.
            </p>

            <dl className="feature__specs">
              <div>
                <dt>Frontend</dt>
                <dd>HTML, CSS, JavaScript</dd>
              </div>
              <div>
                <dt>Backend</dt>
                <dd>Python</dd>
              </div>
              <div>
                <dt>Database</dt>
                <dd>Sqlite</dd>
              </div>
              <div>
                <dt>Deployment</dt>
                <dd>Docker, Render</dd>
              </div>
            </dl>

            <ul className="feature__notes">
              <li>User authentication and authorization</li>
              <li>Patient Management</li>
              <li>API Development</li>
            </ul>
          </div>

          <div className="feature__visual" aria-hidden="true">
            <div className="feature__browser">
              <div className="feature__browser-bar">
                <span /><span /><span />
                <div className="feature__browser-url">Afya mis</div>
              </div>
              <div className="feature__browser-body">
                <div className="feature__row feature__row--wide" />
                <div className="feature__row" />
                <div className="feature__row feature__row--short" />
                <div className="feature__grid-mini">
                  <div /><div /><div />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side-grid">
          {SIDE_PROJECTS.map((p) => (
            <div className="side-card" key={p.title}>
              <div className="side-card__head">
                <h4>{p.title}</h4>
                <span>{p.role}</span>
              </div>
              <p>{p.description}</p>
              <div className="side-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects__title {
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          margin-top: 14px;
        }
        .feature {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          border: 1px solid var(--line);
          background: var(--bg-panel);
          padding: 40px;
          border-radius: 4px;
        }
        .feature__tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--amber);
        }
        .feature__text h3 {
          font-size: 1.9rem;
          margin-top: 10px;
        }
        .feature__desc {
          margin-top: 16px;
          color: var(--muted);
          max-width: 48ch;
          font-size: 1rem;
        }
        .feature__specs {
          margin: 28px 0 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 20px;
        }
        .feature__specs dt {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--teal);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .feature__specs dd {
          margin: 4px 0 0;
          font-size: 0.92rem;
          color: var(--paper);
        }
        .feature__notes {
          margin: 28px 0 0;
          padding: 20px 0 0;
          border-top: 1px solid var(--line);
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .feature__notes li {
          font-size: 0.9rem;
          color: var(--muted);
          padding-left: 16px;
          position: relative;
        }
        .feature__notes li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 1px;
          background: var(--teal);
        }
        .feature__visual {
          display: flex;
          align-items: center;
        }
        .feature__browser {
          width: 100%;
          border: 1px solid var(--line-bright);
          border-radius: 6px;
          overflow: hidden;
          background: var(--bg-deep);
        }
        .feature__browser-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 12px;
          border-bottom: 1px solid var(--line);
          background: var(--bg-panel-raised);
        }
        .feature__browser-bar span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--line-bright);
        }
        .feature__browser-url {
          margin-left: 10px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--muted-dim);
        }
        .feature__browser-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .feature__row {
          height: 10px;
          border-radius: 2px;
          background: var(--line);
          width: 70%;
        }
        .feature__row--wide { width: 92%; background: var(--line-bright); }
        .feature__row--short { width: 45%; }
        .feature__grid-mini {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .feature__grid-mini div {
          height: 54px;
          border-radius: 4px;
          border: 1px solid var(--line-bright);
          background: linear-gradient(160deg, rgba(95,163,160,0.12), transparent);
        }
        .side-grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .side-card {
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 26px;
        }
        .side-card__head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
        }
        .side-card__head h4 { font-size: 1.05rem; }
        .side-card__head span {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--muted-dim);
        }
        .side-card p {
          margin-top: 12px;
          color: var(--muted);
          font-size: 0.92rem;
        }
        .side-card__tags {
          margin-top: 16px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .side-card__tags span {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          border: 1px solid var(--line-bright);
          border-radius: 3px;
          padding: 4px 8px;
          color: var(--teal);
        }
        @media (max-width: 860px) {
          .feature { grid-template-columns: 1fr; padding: 28px; }
          .side-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
