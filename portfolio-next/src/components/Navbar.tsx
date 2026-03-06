"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar({ onNexusClick, onTerminalClick }: { onNexusClick: () => void, onTerminalClick: () => void }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map((item) => item.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-[rgba(255,90,60,0.1)]"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo + Nexus */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="#home"
                            className="relative w-8 h-8 rounded-md overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src="/logo-n.png"
                                alt="NAVEEN"
                                className="object-cover w-full h-full"
                            />
                        </motion.a>

                        {/* Nexus Card Button near name */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onNexusClick}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgba(255,90,60,0.15)] to-[rgba(255,90,60,0.05)] border border-[rgba(255,90,60,0.2)] flex items-center justify-center text-[#ff5a3c] hover:border-[rgba(255,90,60,0.4)] hover:shadow-[0_0_12px_rgba(255,90,60,0.2)] transition-all duration-300"
                            title="Nexus Card"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`relative px-3 py-2 text-sm font-medium font-[family-name:var(--font-inter)] rounded-full transition-all duration-300 ${activeSection === item.href.slice(1)
                                            ? "text-[#ff5a3c]"
                                            : "text-[#888] hover:text-white"
                                            }`}
                                    >
                                        {activeSection === item.href.slice(1) && (
                                            <motion.span
                                                layoutId="navbar-active"
                                                className="absolute inset-0 bg-[rgba(255,90,60,0.1)] rounded-full border border-[rgba(255,90,60,0.2)]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Nexus Icon Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onNexusClick}
                            className="ml-2 w-9 h-9 rounded-xl bg-gradient-to-br from-[rgba(255,90,60,0.15)] to-[rgba(255,90,60,0.05)] border border-[rgba(255,90,60,0.2)] flex items-center justify-center text-[#ff5a3c] hover:border-[rgba(255,90,60,0.4)] hover:shadow-[0_0_15px_rgba(255,90,60,0.2)] transition-all duration-300"
                            title="Nexus Card"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </motion.button>
                        {/* Terminal Icon Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onTerminalClick}
                            className="ml-2 w-9 h-9 rounded-xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                            title="Terminal Mode"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 17h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1z" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block origin-center" />
                        <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block" />
                        <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block origin-center" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <motion.li key={item.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block text-2xl font-semibold font-[family-name:var(--font-poppins)] py-3 border-b border-[rgba(255,90,60,0.1)] transition-colors ${activeSection === item.href.slice(1) ? "text-[#ff5a3c]" : "text-[#888] hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                            {/* Nexus in mobile menu */}
                            <motion.li initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.1 }}>
                                <button
                                    onClick={() => { setMobileOpen(false); onNexusClick(); }}
                                    className="block text-2xl font-semibold font-[family-name:var(--font-poppins)] py-3 border-b border-[rgba(255,90,60,0.1)] text-[#ff5a3c] hover:text-white transition-colors w-full text-left"
                                >
                                    Nexus Card ✦
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
