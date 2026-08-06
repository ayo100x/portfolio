import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectRow from '../components/ProjectRow'
import SectionLabel from '../components/SectionLabel'
import SocialLink from '../components/SocialLink'

const projectRows = [
  {
    index: '01',
    title: 'X Clone',
    description:
      'Modern social platform featuring authentication, profiles, posts, likes, notifications and responsive UI.',
    stack: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/ayo100x/X',
    demoUrl: '#',
  },
  {
    index: '02',
    title: 'E-Commerce Platform',
    description:
      'Complete online shopping experience with authentication, cart, checkout and order management',
    stack: ['Next.js', 'Node.js'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    index: '03',
    title: 'Notion Clone',
    description:
      'Collaborative workspace with nested pages, authentication and rich editing',
    stack: ['React', 'TypeScript', 'Node.js', 'Express'],
    githubUrl: '#',
    demoUrl: '#',
  },
]

const focusRows = [
  {
    index: '01',
    title: 'Building Full‑Stack Applications',
    description: 'Creating production‑ready web applications from frontend to backend.',
  },
  {
    index: '02',
    title: 'Backend Engineering',
    description: 'Learning scalable APIs, databases and application architecture.',
  },
  {
    index: '03',
    title: 'System Design',
    description: 'Studying distributed systems, scalability and software design patterns.',
  },
]

const learning = [
  'System Design',
  'Backend Architecture',
  'Authentication',
  'Distributed Systems',
  'Performance Optimization',
]

const stack = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Tailwind CSS',
  'Docker',
  'Git',
  'REST APIs',
  'Authentication',
  'System Design',
]

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')

    if (storedTheme) {
      return storedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />

      <main>
        <section className="masthead wrap" style={{ border: 'none' }}>
          <div className="kicker">FULL‑STACK DEVELOPER — SYSTEM DESIGN</div>
          <h1>
            Ayomide
            <br />
            Adelooye
          </h1>
          <p className="tagline">
            I build modern full‑stack applications with a focus on clean architecture,
            performance and scalable system design.
          </p>
        </section>

        <section className="wrap">
          <SectionLabel>About</SectionLabel>
          <p className="prose">
            I'm a full‑stack developer passionate about building products that solve real
            problems. I enjoy turning ideas into polished applications using modern web
            technologies while continuously improving my understanding of backend engineering
            and software architecture.
          </p>
          <p className="prose muted" style={{ marginTop: '16px' }}>
            I'm currently focused on building production‑quality projects, strengthening my
            backend skills and learning scalable system design.
          </p>
        </section>

        <section className="wrap">
          <SectionLabel>Currently learning</SectionLabel>
          <div className="chip-row">
            {learning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="stack" className="wrap">
          <SectionLabel>Stack</SectionLabel>
          <div className="chip-row">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap">
          <SectionLabel>Selected projects</SectionLabel>

          {projectRows.map((project) => (
            <ProjectRow
              key={project.title}
              index={project.index}
              title={project.title}
              description={project.description}
              stack={project.stack}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </section>

        <section id="focus" className="wrap">
          <SectionLabel>Current focus</SectionLabel>
          {focusRows.map((item) => (
            <div key={item.title} className="index-row">
              <div className="index-num">{item.index}</div>
              <div>
                <div className="index-title">{item.title}</div>
                <div className="index-desc">{item.description}</div>
              </div>
            </div>
          ))}
        </section>

        <section id="contact" className="wrap">
          <SectionLabel>Contact</SectionLabel>

          <h2>Let's build something.</h2>

          <div className="contact-email">
            <a href="mailto:ayomideadelooye@gmail.com">ayomideadelooye@gmail.com</a>
          </div>

          <p className="prose muted" style={{ marginTop: '20px' }}>
            Open to junior software engineering, frontend, backend and full-stack
            opportunities.
          </p>

          <div className="contact-socials">
            <SocialLink href="https://github.com/ayo100x" label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.56 0-.28-.01-1.03-.02-2.03-3.2.69-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.72 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.43-5.27 5.72.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.79.56a11.52 11.52 0 0 0 7.84-10.91C23.5 5.66 18.35.5 12 .5Z" />
              </svg>
            </SocialLink>

            <SocialLink href="https://x.com/ayo100x" label="X">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.35l7.24-8.28L1 2h6.4l4.42 5.84L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.61L17.8 20Z" />
              </svg>
            </SocialLink>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div>© 2026 Ayomide Adelooye</div>
        <div className='h-13'/>
      </footer>
    </>
  )
}
