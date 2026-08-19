import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Coursework from './components/Coursework.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Coursework />
        <Contact />
      </main>
    </>
  )
}
