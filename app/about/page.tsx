"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];

const TIMELINE = [
    {
        year: "2025",
        title: "IT Specialist · SphereNY",
        desc: "Delivering Level 1 & 2 enterprise IT support and contributing to cybersecurity projects across the organization.",
    },
    {
        year: "2025",
        title: "Co-Founder · Novarra",
        desc: "Co-founded an IT and network solutions company. Built governance documents, brand identity, and client infrastructure from scratch.",
    },
    {
        year: "2024",
        title: "B.S. Computer Science · Adelphi University",
        desc: "Graduated with a specialization in Cybersecurity and Software Engineering. Served as Audio Visual Technician throughout.",
    },
    {
        year: "2024",
        title: "ISC² Member",
        desc: "Joined ISC² and began active participation in CTF competitions and applied cryptography research.",
    },
    {
        year: "2023",
        title: "Adobe Certified Professional",
        desc: "Earned certification in Visual Design Using Photoshop, adding formal design credentials to a technical background.",
    },
];

const SKILLS = [
    { category: "Development", items: ["Next.js", "React", "TypeScript", "Node.js", "Python", "WebGL"] },
    { category: "Security", items: ["ISC² Certified", "CTF Competitions", "Network Security", "Cryptography", "Threat Analysis"] },
    { category: "Infrastructure", items: ["Enterprise IT", "Level 1 & 2 Support", "Network Design", "System Administration"] },
    { category: "Design & Tools", items: ["Tailwind CSS", "Adobe Photoshop", "Figma", "Git", "Linux"] },
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

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    const mouse = useMousePosition();

    return (
        <main
            className="min-h-screen bg-[#0e0e0e] text-[#f0ede6] selection:bg-[#f0ede6] selection:text-[#0e0e0e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Custom cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#f0ede6] pointer-events-none z-[9999] mix-blend-difference"
                animate={{ x: mouse.x - 4, y: mouse.y - 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.1 }}
            />

            {/* ── NAV ── */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex items-center justify-between"
                style={{ background: "rgba(14,14,14,0.85)", backdropFilter: "blur(12px)" }}
            >
                <a href="/" className="text-sm font-semibold tracking-tight text-[#f0ede6]">
                    Gabriel Kaloo
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm tracking-wide transition-colors duration-200"
                                style={{ color: link.href === "/about" ? "#f0ede6" : "rgba(240,237,230,0.4)" }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="/contact"
                    className="hidden md:inline-flex px-5 py-2.5 text-xs font-medium tracking-widest uppercase text-[#f0ede6] border border-[#f0ede6]/20 hover:border-[#f0ede6] hover:bg-[#f0ede6] hover:text-[#0e0e0e] transition-all duration-300"
                >
                    Let's Talk
                </a>

                <button
                    className="md:hidden text-[#f0ede6]/60 hover:text-[#f0ede6]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
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
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="fixed inset-0 z-40 bg-[#0e0e0e] flex flex-col justify-center px-12 gap-8"
                    >
                        {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                               className="text-4xl font-light text-[#f0ede6]/60 hover:text-[#f0ede6] transition-colors"
                            >{link.label}</a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex flex-col justify-end px-8 md:px-12 pb-16 pt-32 border-b border-[#f0ede6]/8">
                <div className="absolute top-24 right-8 md:right-12 text-right hidden md:block">
                    <p className="text-xs text-[#f0ede6]/30 tracking-widest uppercase mb-1">About Me</p>
                    <p className="text-xs text-[#f0ede6]/20 tracking-widest uppercase">Long Island, NY</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-end">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="text-[clamp(3.8rem,10vw,9rem)] font-bold leading-[0.92] tracking-[-0.03em] uppercase mb-8"
                        >
                            The<br />
                            <span className="text-[#f0ede6]/20">Person</span><br />
                            Behind It.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                            className="text-base text-[#f0ede6]/40 max-w-sm leading-relaxed"
                        >
                            IT Specialist, cybersecurity enthusiast, and developer — building things that are both secure and well-crafted.
                        </motion.p>
                    </div>

                    {/* ── PHOTO SLOT ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                    >
                        {/*
              TO ADD YOUR PHOTO:
              1. Drop your image into the /public folder e.g. gabriel.jpg
              2. Replace the div below with:
                 <img src="/gabriel.jpg" alt="Gabriel Kaloo" className="w-full aspect-[3/4] object-cover" />
            */}
                        <div className="w-full aspect-[3/4] flex flex-col items-center justify-center gap-3 border border-[#f0ede6]/10 relative overflow-hidden bg-[#f0ede6]/[0.02]">
                            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#f0ede6]/20" />
                            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#f0ede6]/20" />
                            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#f0ede6]/20" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#f0ede6]/20" />
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-[#f0ede6]/15">
                                <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.2"/>
                                <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            <p className="text-xs tracking-widest uppercase text-[#f0ede6]/20">Your Photo Here</p>
                            <p className="text-xs text-[#f0ede6]/10">Place image in /public folder</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── BIO ── */}
            <section className="px-8 md:px-12 py-24 grid md:grid-cols-[1fr_2fr] gap-16 border-b border-[#f0ede6]/8">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mt-1"
                >
                    Background
                </motion.p>
                <div className="space-y-6">
                    {[
                        "I graduated from Adelphi University with a Bachelor of Science in Computer Science, specializing in Cybersecurity and Software Engineering. Throughout my time there I also worked as an Audio Visual Technician, balancing technical production with my academic workload.",
                        "Today I work as an IT Specialist at SphereNY, delivering Level 1 and Level 2 enterprise support and contributing to cybersecurity initiatives. Alongside that, I co-founded Novarra — an IT and network solutions company — with two equal partners under a chiefs governance structure.",
                        "Outside of work I compete in CTF challenges, study for ISC² certifications, and build side projects that push my understanding of both security and software. I care about making things that are well-built, not just functional.",
                    ].map((para, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                            className="text-base text-[#f0ede6]/50 leading-relaxed"
                        >
                            {para}
                        </motion.p>
                    ))}
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section className="px-8 md:px-12 py-24 border-b border-[#f0ede6]/8">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">Skills & Tools</h2>
                <div className="grid md:grid-cols-2">
                    {SKILLS.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                            className="py-8"
                            style={{
                                borderBottom: i < 2 ? "1px solid rgba(240,237,230,0.08)" : "none",
                                borderRight: i % 2 === 0 ? "1px solid rgba(240,237,230,0.08)" : "none",
                                paddingRight: i % 2 === 0 ? "2rem" : "0",
                                paddingLeft: i % 2 === 1 ? "2rem" : "0",
                            }}
                        >
                            <p className="text-xs tracking-widest uppercase text-[#f0ede6]/25 mb-5">{group.category}</p>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs text-[#f0ede6]/40 border border-[#f0ede6]/10 hover:text-[#f0ede6] hover:border-[#f0ede6]/30 transition-colors duration-200 cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="px-8 md:px-12 py-24 border-b border-[#f0ede6]/8">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">Timeline</h2>
                <div className="space-y-0">
                    {TIMELINE.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                            className="flex flex-col md:flex-row gap-4 md:gap-16 py-8"
                            style={{ borderBottom: i < TIMELINE.length - 1 ? "1px solid rgba(240,237,230,0.08)" : "none" }}
                        >
                            <span className="text-xs font-mono text-[#f0ede6]/20 md:w-10 shrink-0 mt-1">{item.year}</span>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold tracking-tight text-[#f0ede6]/85 mb-2">{item.title}</h3>
                                <p className="text-sm text-[#f0ede6]/35 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-8 md:px-12 py-32 border-b border-[#f0ede6]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/25 mb-4">What's Next</p>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.92]">
                        Let's Work<br />
                        <span className="text-[#f0ede6]/20">Together.</span>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="flex gap-4 flex-wrap"
                >
                    <a href="/projects"
                       className="px-8 py-4 text-sm font-medium tracking-widest uppercase text-[#0e0e0e] bg-[#f0ede6] hover:bg-[#f0ede6]/80 transition-all duration-300"
                    >
                        View Projects
                    </a>
                    <a href="/contact"
                       className="px-8 py-4 text-sm font-medium tracking-widest uppercase text-[#f0ede6] border border-[#f0ede6]/20 hover:border-[#f0ede6] hover:bg-[#f0ede6] hover:text-[#0e0e0e] transition-all duration-300"
                    >
                        Contact Me
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