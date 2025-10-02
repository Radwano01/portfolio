import { profile, skills, projects, certifications } from './content.js'
import resumePdf from './assets/Radwan Rahmoun CV.pdf'
import profileImg from './assets/prof_image.jpg'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div className="mt-6 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200/60 dark:border-gray-800/60 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60 z-10">
        <div className="mx-auto max-w-6xl px-4 h-14 md:h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold">{profile.name}</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#certifications" className="hover:text-indigo-600">Certifications</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
          </nav>
          
        </div>
      </header>

      <main>
        <section id="hero" className="py-20 md:py-28 bg-gradient-to-b from-indigo-50/60 to-transparent dark:from-indigo-950/30">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{profile.title}</h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{profile.tagline}</p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">View Projects</a>
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <a className="hover:text-indigo-600" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="hover:text-indigo-600" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-indigo-600" href={`mailto:${profile.email}`}>Email</a>
              </div>
            </div>
            <div className="justify-self-center">
              <img src={profileImg} alt={`${profile.name} profile`} className="h-40 w-40 md:h-52 md:w-52 rounded-full object-cover shadow-lg border border-gray-200/60 dark:border-gray-800/60" />
            </div>
          </div>
        </section>

        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-lg border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {p.url && (
                    <div className="mt-4">
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-500"
                      >
                        View Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <li key={c.url} className="rounded-lg border border-gray-200/60 dark:border-gray-800/60 p-4 flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{c.provider}</div>
                </div>
                <a href={c.url} target="_blank" rel="noreferrer" className="shrink-0 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">View</a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="rounded-lg border border-gray-200/60 dark:border-gray-800/60 p-4">
                <h4 className="font-medium">{s.category}</h4>
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-md border px-2 py-0.5">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" title="About Me">
          <p>
            Short bio goes here. Passion for solving backend problems, observability, and scalable architectures.
          </p>
          <a href={resumePdf} download className="mt-6 inline-flex rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Download Resume</a>
        </Section>

        
      </main>

      <footer className="py-8 border-t border-gray-200/60 dark:border-gray-800/60">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </div>
  )
}

export default App
