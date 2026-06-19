"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];

const EXPERIENCE = [
    {
        company: "SphereNY",
        role: "Information Technology Specialist",
        type: "Full-Time",
        period: "2025 — Present",
        location: "Long Island, NY",
        desc: "Delivering Level 1 and Level 2 corporate IT support across the organization. Contributing to enterprise-level cybersecurity projects and infrastructure initiatives.",
        bullets: [
            "Level 1 & 2 helpdesk and on-site support",
            "Enterprise cybersecurity project contributions",
            "Hardware, software, and network troubleshooting",
            "User account management and access control",
        ],
    },
    {
        company: "Novarra",
        role: "Co-Founder & Chief",
        type: "Venture",
        period: "2025 — Present",
        location: "Long Island, NY",
        desc: "Co-founded an IT and network solutions company with two equal partners under a chiefs governance structure. Responsible for legal foundations, brand identity, and client service delivery.",
        bullets: [
            "Co-Ownership & Chiefs Governance Agreement",
            "LLC Operating Agreement and legal structure",
            "Client Service Agreement and onboarding workflow",
            "Brand identity, website, and LinkedIn presence",
        ],
    },
    {
        company: "Adelphi University",
        role: "Audio Visual Technician",
        type: "Part-Time",
        period: "2021 — 2024",
        location: "Garden City, NY",
        desc: "Supported university events, lectures, and productions as an AV Technician throughout my undergraduate studies. Managed live sound, projection, and streaming setups.",
        bullets: [
            "Live event audio and visual production",
            "Projection and streaming system management",
            "Equipment setup, operation, and maintenance",
            "Collaborated with faculty and event coordinators",
        ],
    },
];

const EDUCATION = [
    {
        institution: "Adelphi University",
        degree: "B.S. Computer Science",
        focus: "Cybersecurity & Software Engineering",
        period: "2021 — 2024",
        location: "Garden City, NY",
    },
];

const CERTS = [
    { name: "ISC² Member", issuer: "ISC²", year: "2024" },
    { name: "Adobe Certified Professional", issuer: "Adobe", year: "2023", detail: "Visual Design Using Photoshop" },
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

export default function Experience() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expanded, setExpanded] = useState<number | null>(0);
    const mouse = useMousePosition();

    return (
        <main
            className="min-h-screen bg-[#0e0e0e] text-[#f0ede6] selection:bg-[#f0ede6] selection:text-[#0e0e0e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Cursor */}
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
                <a href="/" className="text-sm font-semibold tracking-tight text-[#f0ede6]">Gabriel Kaloo</a>
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm tracking-wide transition-colors duration-200"
                                style={{ color: link.href === "/experience" ? "#f0ede6" : "rgba(240,237,230,0.4)" }}
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
                        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
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
            <section className="relative min-h-[60vh] flex flex-col justify-end px-8 md:px-12 pb-16 pt-32 border-b border-[#f0ede6]/8">
                <div className="absolute top-24 right-8 md:right-12 text-right hidden md:block">
                    <p className="text-xs text-[#f0ede6]/30 tracking-widest uppercase mb-1">Work History</p>
                    <p className="text-xs text-[#f0ede6]/20 tracking-widest uppercase">Long Island, NY</p>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.8rem,10vw,9rem)] font-bold leading-[0.92] tracking-[-0.03em] uppercase mb-8"
                >
                    Work<br />
                    <span className="text-[#f0ede6]/20">History.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-base text-[#f0ede6]/40 max-w-md leading-relaxed"
                >
                    A track record of building, supporting, and securing — from enterprise IT to co-founding a company from scratch.
                </motion.p>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0ede6]/8" />
            </section>

            {/* ── WORK EXPERIENCE ── */}
            <section className="px-8 md:px-12 py-24 border-b border-[#f0ede6]/8">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">Work Experience</h2>
                <div className="space-y-0">
                    {EXPERIENCE.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                            style={{ borderBottom: "1px solid rgba(240,237,230,0.08)" }}
                        >
                            <button
                                onClick={() => setExpanded(expanded === i ? null : i)}
                                className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 text-left group"
                            >
                                <div className="flex items-start md:items-center gap-6 md:gap-10">
                                    <span className="text-xs font-mono text-[#f0ede6]/20 mt-1 md:mt-0 shrink-0">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f0ede6]/80 group-hover:text-[#f0ede6] transition-colors duration-200">
                                            {job.company}
                                        </h3>
                                        <p className="text-sm text-[#f0ede6]/35 mt-1">{job.role}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-10 shrink-0">
                                    <div className="text-right">
                                        <p className="text-xs text-[#f0ede6]/25 tracking-wider mb-1">{job.period}</p>
                                        <p className="text-xs text-[#f0ede6]/15 font-mono">{job.type}</p>
                                    </div>
                                    <span
                                        className="text-[#f0ede6]/20 group-hover:text-[#f0ede6]/60 text-lg"
                                        style={{
                                            display: "inline-block",
                                            transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease, color 0.2s",
                                        }}
                                    >
                    +
                  </span>
                                </div>
                            </button>

                            <AnimatePresence>
                                {expanded === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 pl-10 md:pl-16 pr-4 grid md:grid-cols-[2fr_1fr] gap-10">
                                            <div>
                                                <p className="text-sm text-[#f0ede6]/45 leading-relaxed mb-6">{job.desc}</p>
                                                <ul className="space-y-2">
                                                    {job.bullets.map((b, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-sm text-[#f0ede6]/35">
                                                            <span className="text-[#f0ede6]/20 mt-0.5 shrink-0">—</span>
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-col gap-4 text-xs">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[#f0ede6]/20 tracking-widest uppercase">Location</span>
                                                    <span className="text-[#f0ede6]/45">{job.location}</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[#f0ede6]/20 tracking-widest uppercase">Period</span>
                                                    <span className="text-[#f0ede6]/45">{job.period}</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[#f0ede6]/20 tracking-widest uppercase">Type</span>
                                                    <span className="text-[#f0ede6]/45">{job.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="px-8 md:px-12 py-24 border-b border-[#f0ede6]/8">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">Education</h2>
                {EDUCATION.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8"
                        style={{ borderBottom: "1px solid rgba(240,237,230,0.08)" }}
                    >
                        <div className="flex items-start gap-10">
                            <span className="text-xs font-mono text-[#f0ede6]/20 mt-1 shrink-0">01</span>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f0ede6]/80 mb-1">{edu.institution}</h3>
                                <p className="text-sm text-[#f0ede6]/35">{edu.degree}</p>
                                <p className="text-xs text-[#f0ede6]/25 mt-1 tracking-wide">{edu.focus}</p>
                            </div>
                        </div>
                        <div className="hidden md:block text-right shrink-0">
                            <p className="text-xs text-[#f0ede6]/25 tracking-wider mb-1">{edu.period}</p>
                            <p className="text-xs text-[#f0ede6]/15 font-mono">{edu.location}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* ── CERTIFICATIONS ── */}
            <section className="px-8 md:px-12 py-24 border-b border-[#f0ede6]/8">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#f0ede6]/30 mb-16">Certifications</h2>
                <div className="space-y-0">
                    {CERTS.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8"
                            style={{ borderBottom: "1px solid rgba(240,237,230,0.08)" }}
                        >
                            <div className="flex items-start md:items-center gap-10">
                                <span className="text-xs font-mono text-[#f0ede6]/20 mt-1 md:mt-0 shrink-0">0{i + 1}</span>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight text-[#f0ede6]/80">{cert.name}</h3>
                                    {cert.detail && <p className="text-sm text-[#f0ede6]/30 mt-1">{cert.detail}</p>}
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-8 shrink-0">
                                <span className="text-xs text-[#f0ede6]/25 tracking-wider">{cert.issuer}</span>
                                <span className="text-xs font-mono text-[#f0ede6]/15">{cert.year}</span>
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