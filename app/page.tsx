"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const PROJECTS = [
  {
    index: "01",
    title: "Novarra",
    category: "Co-Founder · IT & Network Solutions",
    year: "2025",
    desc: "Built an IT and network solutions company from scratch — governance documents, brand identity, legal foundations, and client infrastructure.",
  },
  {
    index: "02",
    title: "Portfolio Site",
    category: "WebGL · Next.js · Design",
    year: "2024",
    desc: "Personal portfolio featuring raw WebGL shaders with a Canvas 2D particle fallback and a dark, technically sophisticated aesthetic.",
  },
  {
    index: "03",
    title: "ApplicationTracker",
    category: "Full Stack · React · Node.js",
    year: "2024",
    desc: "Full-stack job application tracker with a browser extension, Linear-integrated sprint reports, and a clean dashboard UI.",
  },
  {
    index: "04",
    title: "CTF & Security Research",
    category: "Cybersecurity · ISC²",
    year: "2024",
    desc: "Ongoing capture-the-flag competitions and applied cryptography research as an active ISC² member.",
  },
];

const SERVICES = [
  { title: "IT Support", desc: "Level 1 & 2 enterprise support, troubleshooting, and infrastructure management." },
  { title: "Cybersecurity", desc: "Security audits, CTF competition, ISC² certified practices, and threat analysis." },
  { title: "Web Development", desc: "Full-stack apps with Next.js, React, WebGL, and modern Tailwind-based UI." },
  { title: "Network Solutions", desc: "Network design and solutions through Novarra — built for small to mid-size businesses." },
];

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const mouse = useMousePosition();
  const { scrollYProgress } = useScroll();
  const marqX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
      <main className="min-h-screen bg-[#0e0e0e] text-[#f0ede6] selection:bg-[#f0ede6] selection:text-[#0e0e0e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
      >

        {/* Custom cursor dot */}
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#f0ede6] pointer-events-none z-[9999] mix-blend-difference"
            animate={{ x: mouse.x - 4, y: mouse.y - 4 }}
            transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.1 }}
        />

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex items-center justify-between"
             style={{ background: "rgba(14,14,14,0.85)", backdropFilter: "blur(12px)" }}
        >
          <a href="/" className="text-sm font-semibold tracking-tight text-[#f0ede6]">
            Gabriel Kaloo
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                     className="text-sm text-[#f0ede6]/40 hover:text-[#f0ede6] transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
            ))}
          </ul>

          <a href="/contact"
             className="hidden md:inline-flex px-5 py-2.5 text-xs font-medium tracking-widest uppercase text-[#f0ede6] border border-[#f0ede6]/20 hover:border-[#f0ede6] hover:bg-[#f0ede6] hover:text-[#0e0e0e] transition-all duration-300"
          >
            Let's Talk
          </a>

          <button className="md:hidden text-[#f0ede6]/60 hover:text-[#f0ede6]"
                  onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen
                  ? <><line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.2"/><line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.2"/></>
                  : <><line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1.2"/><line x1="5" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.2"/></>
              }
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                          className="fixed inset-0 z-40 bg-[#0e0e0e] flex flex-col justify-center px-12 gap-8"
              >
                {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                       className="text-4xl font-light text-[#f0ede6]/60 hover:text-[#f0ede6] transition-colors"
                    >{link.label}</a>
                ))}
                <a href="/contact" className="text-4xl font-light text-[#f0ede6]/60 hover:text-[#f0ede6] transition-colors"
                   onClick={() => setMenuOpen(false)}
                >Contact</a>
              </motion.div>
          )}
        </AnimatePresence>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-12 pb-16 pt-32">
          {/* Top-right label */}
          <div className="absolute top-24 right-8 md:right-12 text-right hidden md:block">
            <p className="text-xs text-[#f0ede6]/30 tracking-widest uppercase mb-1">IT Specialist · Developer</p>
            <p className="text-xs text-[#f0ede6]/20 tracking-widest uppercase">Long Island, NY</p>
          </div>

          {/* Big heading */}
          <div className="mb-10">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.8rem,11vw,10rem)] font-bold leading-[0.92] tracking-[-0.03em] uppercase"
            >
              <br />
              <span className="text-[#f0ede6]/20">Gabriel</span><br />
              Kaloo.
            </motion.h1>
          </div>

          {/* Bottom row */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <p className="text-base text-[#f0ede6]/40 max-w-sm leading-relaxed">
              CS graduate from Adelphi University. IT Specialist at SphereNY.
              Co-founder of{" "}
              <a href="https://novarratech.com" target="_blank" rel="noopener noreferrer"
                 className="text-[#f0ede6]/70 hover:text-[#f0ede6] underline underline-offset-4 transition-colors"
              >Novarra</a>.
              ISC² member.
            </p>

            <div className="flex items-center gap-6">
              <a href="/projects"
                 className="text-sm font-medium text-[#f0ede6] border-b border-[#f0ede6]/30 hover:border-[#f0ede6] pb-0.5 transition-all duration-200 tracking-wide"
              >
                View Work →
              </a>
              <span className="text-[#f0ede6]/15 text-xs">↓ Scroll</span>
            </div>
          </motion.div>

          {/* Bottom border line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0ede6]/8" />
        </section>

        {/* ── MARQUEE ── */}
        <div className="overflow-hidden py-6 border-b border-[#f0ede6]/8">
          <motion.div style={{ x: marqX }} className="flex gap-16 whitespace-nowrap w-[200%]">
            {[
              "Next.js", "TypeScript", "Cybersecurity", "WebGL", "React",
              "Node.js", "ISC²", "Python", "Tailwind CSS", "Network Security",
              "Next.js", "TypeScript", "Cybersecurity", "WebGL", "React",
              "Node.js", "ISC²", "Python", "Tailwind CSS", "Network Security",
            ].map((s, i) => (
                <span key={i} className="text-sm font-light text-[#f0ede6]/20 tracking-widest uppercase shrink-0">
              {s}
            </span>
            ))}
          </motion.div>
        </div>

        {/* ── PROJECTS ── */}
        <section className="px-8 md:px-12 py-24">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30">Selected Work</h2>
            <a href="/projects" className="text-xs text-[#f0ede6]/30 hover:text-[#f0ede6] transition-colors tracking-widest uppercase">
              All Projects →
            </a>
          </div>

          <div className="divide-y divide-[#f0ede6]/8">
            {PROJECTS.map((p, i) => (
                <motion.a
                    key={i}
                    href="/projects"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 cursor-pointer block"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="text-xs text-[#f0ede6]/20 font-mono mt-1 md:mt-0 shrink-0">{p.index}</span>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-200 ${hoveredProject === i ? "text-[#f0ede6]" : "text-[#f0ede6]/80"}`}>
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#f0ede6]/30 mt-1 md:hidden">{p.category}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-12 text-right shrink-0">
                    <span className="text-sm text-[#f0ede6]/25 max-w-xs text-left leading-relaxed">{p.desc}</span>
                    <div>
                      <p className="text-xs text-[#f0ede6]/25 tracking-wider mb-1">{p.category}</p>
                      <p className="text-xs text-[#f0ede6]/15 font-mono">{p.year}</p>
                    </div>
                    <span className={`text-xl transition-all duration-300 ${hoveredProject === i ? "translate-x-1 text-[#f0ede6]" : "text-[#f0ede6]/20"}`}>→</span>
                  </div>
                </motion.a>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="px-8 md:px-12 py-24 border-t border-[#f0ede6]/8">
          <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 divide-y divide-[#f0ede6]/8 md:divide-y-0">
            {SERVICES.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="py-8 md:py-10 border-b border-[#f0ede6]/8"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-xs text-[#f0ede6]/20 font-mono mt-1">0{i + 1}</span>
                    <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#f0ede6]/35 leading-relaxed pl-8">{s.desc}</p>
                </motion.div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="px-8 md:px-12 py-24 border-t border-[#f0ede6]/8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-8">About</p>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#f0ede6]/70 mb-8">
              I'm a Cybersecurity-focused developer and IT professional based on Long Island, NY — currently at SphereNY and co-founding Novarra.
            </p>
            <a href="/about"
               className="inline-flex text-sm text-[#f0ede6]/50 border-b border-[#f0ede6]/20 hover:text-[#f0ede6] hover:border-[#f0ede6] pb-0.5 transition-all tracking-wide"
            >
              Read More →
            </a>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
          >
            {[
              { label: "Education", value: "B.S. Computer Science, Adelphi University" },
              { label: "Specialization", value: "Cybersecurity & Software Engineering" },
              { label: "Current Role", value: "IT Specialist @ SphereNY" },
              { label: "Venture", value: "Co-Founder @ Novarra" },
              { label: "Certification", value: "ISC² Member · CTF Competitor" },
            ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 py-4 border-b border-[#f0ede6]/8">
                  <span className="text-xs text-[#f0ede6]/25 tracking-wider uppercase w-28 shrink-0 mt-0.5">{item.label}</span>
                  <span className="text-sm text-[#f0ede6]/60">{item.value}</span>
                </div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="px-8 md:px-12 py-32 border-t border-[#f0ede6]/8 text-center">
          <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/25 mb-8">Get In Touch</p>
            <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.03em] uppercase mb-12">
              Let's Work<br />
              <span className="text-[#f0ede6]/20">Together.</span>
            </h2>
            <a href="/contact"
               className="inline-flex px-10 py-5 text-sm font-medium tracking-widest uppercase text-[#0e0e0e] bg-[#f0ede6] hover:bg-[#f0ede6]/80 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-[#f0ede6]/8 px-8 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-xs text-[#f0ede6]/20 tracking-widest uppercase">© 2025 Gabriel Kaloo</span>
          <div className="flex gap-8">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/gabrielkaloo" },
              { label: "GitHub", href: "https://github.com/gkaloo17591" },
              { label: "Novarra", href: "https://novarratech.com" },
            ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                   className="text-xs text-[#f0ede6]/20 hover:text-[#f0ede6]/60 transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </a>
            ))}
          </div>
        </footer>

      </main>
  );
}