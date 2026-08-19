import NetworkGraph from './NetworkGraph.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Nairobi, Kenya — ICT and Software Development &amp; freelance dev</p>
          <h1 className="hero__title">
            I connect the pieces most developers keep separate.
          </h1>
          <p className="hero__sub">
            I'm Dennis Kabugi, a ICT and Software Development Graduate. I build
            production systems end to end — from database schema to deployed API to
            the interface someone actually uses — and I'm layering in networking and
            security fundamentals so I understand what happens underneath the stack,
            not just on top of it.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">See the work</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="hero__graph">
          <NetworkGraph />
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 168px;
          padding-bottom: 96px;
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(2.1rem, 4.4vw, 3.4rem);
          line-height: 1.12;
          margin-top: 18px;
          max-width: 15ch;
        }
        .hero__sub {
          margin-top: 22px;
          max-width: 46ch;
          color: var(--muted);
          font-size: 1.05rem;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          margin-top: 34px;
          flex-wrap: wrap;
        }
        .btn {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          text-decoration: none;
          padding: 13px 22px;
          border-radius: 3px;
          border: 1px solid var(--line-bright);
          transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
        }
        .btn--primary {
          background: var(--amber);
          border-color: var(--amber);
          color: var(--bg-deep);
          font-weight: 500;
        }
        .btn--primary:hover {
          background: var(--amber-dim);
          border-color: var(--amber-dim);
        }
        .btn--ghost {
          color: var(--paper);
        }
        .btn--ghost:hover {
          border-color: var(--teal);
          color: var(--teal);
        }
        .hero__graph {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 860px) {
          .hero { padding-top: 120px; }
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero__title { max-width: none; }
          .hero__graph { order: -1; max-width: 340px; margin: 0 auto 12px; }
        }
      `}</style>
    </section>
  )
}
