export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="about__label">
          <p className="eyebrow">About</p>
        </div>

        <div className="about__body">
          <p className="about__lede">
            I’m Kabugi, an ICT professional with a passion for technology,
            software development, and creating practical digital solutions. I
            enjoy building responsive and user-friendly web applications that
            solve real-world problems. I have experience working with
            technologies such as HTML, CSS, JavaScript, React, Python, FastAPI,
            SQLAlchemy, and databases. I’m particularly interested in web
            development, backend development, and information systems. Some of
            my projects include Afya MIS, a healthcare management system, and
            other web-based applications designed to improve how information is
            managed and accessed. I’m always looking to learn new technologies,
            improve my skills, and build innovative solutions.
          </p>
        </div>
      </div>

      <style>{`
        .about {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
        }
        .about__body {
          max-width: 62ch;
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: var(--muted);
          font-size: 1.02rem;
        }
        .about__lede {
          color: var(--paper);
          font-size: 1.18rem;
          line-height: 1.55;
        }
        @media (max-width: 720px) {
          .about {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
