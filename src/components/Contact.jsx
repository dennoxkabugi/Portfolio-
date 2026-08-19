const LINKS = [
  { label: 'Email', value: 'dennoxkabugi@gmail.com', href: 'mailto:dennoxkabugi@gmail.com' },
  { label: 'GitHub', value: 'github.com/dennoxkabugi', href: 'https://github.com/dennoxkabugi' },
  { label: 'Phone Number', value: '+254769816425', href: 'tel:+254769816425' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact">
        <p className="eyebrow">Contact</p>
        <h2 className="contact__title">Building something? Let's talk.</h2>
        <p className="contact__sub">
          Open to freelance web development work and full-stack builds — reach out
          directly or find the code on GitHub.
        </p>

        <div className="contact__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">{l.value}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact { padding-bottom: 64px; }
        .contact__title {
          font-size: clamp(1.7rem, 3.4vw, 2.4rem);
          margin-top: 14px;
          max-width: 18ch;
        }
        .contact__sub {
          margin-top: 14px;
          color: var(--muted);
          max-width: 46ch;
        }
        .contact__links {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--line);
        }
        .contact__links a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 4px;
          text-decoration: none;
          border-bottom: 1px solid var(--line);
          transition: padding-left 0.15s ease, color 0.15s ease;
        }
        .contact__links a:hover {
          padding-left: 12px;
          color: var(--amber);
        }
        .contact__link-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--muted-dim);
        }
        .contact__link-value {
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }
        .contact__footnote {
          margin-top: 28px;
          font-size: 0.8rem;
          color: var(--muted-dim);
        }
        .contact__footnote code {
          font-family: var(--font-mono);
          color: var(--teal);
        }
      `}</style>
    </section>
  )
}
