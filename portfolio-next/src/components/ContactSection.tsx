"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

const contactLinks = [
    {
        label: "Email",
        value: "naveenrenugopal@gmail.com",
        href: "mailto:naveenrenugopal@gmail.com",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        value: "naveen-r-19a160326",
        href: "https://linkedin.com/in/naveen-r-19a160326",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        value: "nav-in27",
        href: "https://github.com/nav-in27",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        value: "@nav.3n_",
        href: "https://www.instagram.com/nav.3n_?igsh=eGt2ZWJqdzFmenA1",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
];

// Only show main 3 as large cards, rest as icons
const mainContacts = contactLinks.slice(0, 3);
const socialOnlyLinks = contactLinks.slice(3);

export default function ContactSection({ onNexusClick }: { onNexusClick: () => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-divider mb-24" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.04) 0%, transparent 60%)" }} />

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Contact Me</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)] max-w-xl mx-auto">
                        Interested in collaborating on AI/ML projects? Let&apos;s connect!
                    </p>
                </motion.div>

                {/* Main Contact Cards (Email, LinkedIn, GitHub) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {mainContacts.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.label !== "Email" ? "_blank" : undefined}
                            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative rounded-2xl p-6 bg-[#1a1a1a] border border-[rgba(255,90,60,0.1)] text-center transition-all duration-500 hover:border-[rgba(255,90,60,0.3)] hover:shadow-[0_0_40px_rgba(255,90,60,0.1)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[rgba(255,90,60,0.08)] flex items-center justify-center mx-auto mb-4 text-[#ff5a3c] transition-all duration-300 group-hover:bg-[rgba(255,90,60,0.15)] group-hover:shadow-[0_0_20px_rgba(255,90,60,0.15)]">
                                {link.icon}
                            </div>
                            <h3 className="text-white font-semibold font-[family-name:var(--font-poppins)] mb-1">{link.label}</h3>
                            <p className="text-[#888] text-sm font-[family-name:var(--font-inter)] group-hover:text-[#aaa] transition-colors break-all">{link.value}</p>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a3c] to-transparent transition-all duration-500" />
                        </motion.a>
                    ))}
                </div>

                {/* Social icons row (Instagram) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center justify-center gap-4 mb-10"
                >
                    {socialOnlyLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.1 }}
                            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[rgba(255,90,60,0.1)] text-[#888] hover:text-[#ff5a3c] hover:border-[rgba(255,90,60,0.3)] transition-all duration-300"
                            title={link.label}
                        >
                            {link.icon}
                            <span className="text-sm font-[family-name:var(--font-inter)]">{link.value}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Magnetic>
                        <a
                            href="mailto:naveenrenugopal@gmail.com"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e04a2f] text-white font-semibold font-[family-name:var(--font-inter)] text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,60,0.4)] block"
                        >
                            <span className="relative z-10">Let&apos;s Work Together</span>
                            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e04a2f] to-[#ff5a3c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onNexusClick}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(255,90,60,0.3)] text-[#ff5a3c] font-semibold font-[family-name:var(--font-inter)] text-base hover:bg-[rgba(255,90,60,0.08)] transition-all duration-300 block"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            Nexus Card
                        </motion.button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-24 pt-8 border-t border-[rgba(255,90,60,0.08)]"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#666] text-sm font-[family-name:var(--font-inter)]">
                        © 2026 NAVEEN R. Built with Next.js & Framer Motion.
                    </p>
                    <div className="flex items-center gap-5">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                className="text-[#666] hover:text-[#ff5a3c] transition-colors duration-300"
                            >
                                <div className="w-5 h-5">{link.icon}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.footer>
        </section>
    );
}
