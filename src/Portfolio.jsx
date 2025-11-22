import React, { useState, useEffect } from "react";
import profileImg from './assets/profile.jpg'
// Single-file React component portfolio (JavaScript + Tailwind CSS)
// Usage: drop this file into a Create React App / Vite React project
// Add Tailwind to the project, place a profile image at src/assets/profile.jpg (optional)
// Resume PDF included: "/mnt/data/Trivikram_Alla_Resume.pdf"

 function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0f172a] dark:via-[#071129] dark:to-[#021026] text-slate-900 dark:text-slate-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">AT</div>
          <div>
            <h1 className="text-lg font-semibold">Alla Trivikram</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack & Backend Developer · Java · React · Spring Boot</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          
        </nav>

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-700 dark:text-slate-200">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-md px-6 py-4">
          <div className="flex flex-col gap-3">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-indigo-600 font-medium">Hi, I'm</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mt-2">Alla Trivikram</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
              Final-year B.Tech (CSE - AI/ML) specializing in backend and full‑stack systems.
              I build scalable REST APIs and user-centric frontends — focused on performance, security, and clean architecture.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/mnt/data/Trivikram_Alla_Resume.pdf" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-slate-900 text-white text-sm shadow hover:opacity-90" target="_blank" rel="noreferrer">Resume</a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md px-4 py-2 border text-sm">See Projects</a>
              <a href="https://github.com/trivikram-coder" className="inline-flex items-center gap-2 rounded-md px-4 py-2 border text-sm" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat title="DSA Solved" value="150+" />
              <Stat title="GPA" value="8.27" />
              <Stat title="Deployments" value="5+" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 p-1 shadow-xl">
              <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                {/* replace with actual profile image if available at src/assets/profile.jpg */}
                <img
  src={profileImg}
  alt="profile"
  onError={(e) => { e.currentTarget.style.display = 'none' }}
  className="
    w-40 h-52        /* Ideal portrait ratio 3:4 */
    rounded-xl
    object-cover
    border-4 border-white dark:border-slate-800
    shadow-lg
    transition-all duration-300 hover:scale-105
  "
/>

                <div className="mt-4 text-center px-4">
                  <div className="font-semibold">Alla Trivikram</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Backend & Full-Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-14">
          <h3 className="text-2xl font-semibold">Core Skills</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">Strong foundation in backend systems, distributed caching, and modern frontend engineering.</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Java (OOP, Streams)', level: 'Expert' },
              { name: 'Spring Boot, JPA', level: 'Advanced' },
              { name: 'React.js (Hooks)', level: 'Advanced' },
              { name: 'Node.js, Express', level: 'Advanced' },
              { name: 'MySQL, MongoDB', level: 'Advanced' },
              { name: 'Tailwind CSS', level: 'Advanced' },
              { name: 'JWT & Security', level: 'Advanced' },
              { name: 'Redis Caching', level: 'Intermediate' },
            ].map((s) => (
              <div key={s.name} className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="text-sm font-medium">{s.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.level}</div>
                <div className="mt-3 h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-indigo-500 to-pink-500`} style={{ width: s.level === 'Expert' ? '100%' : s.level === 'Advanced' ? '78%' : '45%' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Production-focused, performance-minded builds</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="Smart Expense Tracker"
              tech="React, Node, MongoDB, Redis, Tailwind"
              highlights={[
                'NLP-based intent detection & chat interface',
                'Reduced API latency by 40% using Redis caching',
                'Deployed backend on Render, frontend on Netlify',
              ]}
              link="http://smartexpensetrackeronline.netlify.app/"
            />

            <ProjectCard
              title="VK Store (E-commerce)"
              tech="Spring Boot, React, MySQL"
              highlights={[
                'Pagination, filtering & lazy loading for fast UI',
                'JWT-secured endpoints and admin dashboard',
                'Improved render speed by 35% via optimizations',
              ]}
              link="http://vkstoreonline.netlify.app/"
            />

            <ProjectCard
              title="Jarvis - Voice Assistant"
              tech="React, Node, Speech APIs, Gemini"
              highlights={[
                'Real-time voice recognition & TTS',
                'Integrated LLM responses for dynamic replies',
                'Deployed on Netlify with client-side caching',
              ]}
              link="https://vkjarvis.netlify.app/"
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-14">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-4 grid gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">Full-Stack Developer Intern — Edunet Foundation</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Mar 2025 – Apr 2025 (Remote)</div>
                </div>
                <div className="text-sm text-slate-500">Contributed to backend, deployment pipelines</div>
              </div>

              <ul className="mt-3 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>Enhanced backend APIs and MongoDB operations for VK Store.</li>
                <li>Managed deployment pipelines on Render (backend) and Netlify (frontend).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h4 className="font-semibold">Education</h4>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <div>BVC College of Engineering, Rajahmundry — B.Tech (CSE - AI/ML)</div>
              <div className="text-xs text-slate-500">2022 – 2026 · CGPA: 8.27 / 10</div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h4 className="font-semibold">Achievements & Certs</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>150+ DSA problems solved; 50-Day LeetCode streak</li>
              <li>Certifications: DSA (NPTEL), Full Stack Dev (Edunet), Java (Oracle)</li>
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-14">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <p className="text-sm text-slate-600 dark:text-slate-300">Email: <a href="mailto:allatrivikram@gmail.com" className="underline">allatrivikram@gmail.com</a></p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Phone: <a href="tel:+917396046249" className="underline">+91-7396046249</a></p>

              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/in/trivikramalla/" target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
                <a href="https://github.com/trivikram-coder" target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
                <a href="https://leetcode.com/u/user123554/" target="_blank" rel="noreferrer" className="text-sm underline">LeetCode</a>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h4 className="font-medium">Quick Message</h4>
              <p className="mt-2 text-sm text-slate-500">Looking for internship/full-time roles in backend or full-stack. Open to remote and onsite roles.</p>

              <form className="mt-4 grid gap-2">
                <input placeholder="Your name" className="px-3 py-2 rounded border bg-transparent text-sm" />
                <input placeholder="Your email" className="px-3 py-2 rounded border bg-transparent text-sm" />
                <textarea placeholder="Message" className="px-3 py-2 rounded border bg-transparent text-sm h-24" />
                <button type="button" className="mt-2 inline-block px-4 py-2 rounded bg-indigo-600 text-white text-sm">Send</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 pb-12">© {new Date().getFullYear()} Alla Trivikram — Built with React + Tailwind</footer>
      </main>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-center">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{title}</div>
    </div>
  );
}

function ProjectCard({ title, tech, highlights = [], link = "#" }) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tech}</div>

        <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <a href={link} target="_blank" className="text-sm underline">Live</a>
        <div className="text-xs text-slate-500">Production-ready</div>
      </div>
    </div>
  );
}
export default Portfolio;