"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

// Developer illustration SVG
function DeveloperIllustration() {
    return (
        <svg viewBox="0 0 500 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="340" width="340" height="12" rx="6" fill="#2a2a2a" />
            <rect x="100" y="352" width="8" height="80" rx="4" fill="#222" />
            <rect x="392" y="352" width="8" height="80" rx="4" fill="#222" />
            <rect x="140" y="180" width="220" height="150" rx="10" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
            <rect x="150" y="190" width="200" height="130" rx="4" fill="#0f0f0f" />
            <rect x="165" y="205" width="60" height="4" rx="2" fill="#ff5a3c" opacity="0.8" />
            <rect x="235" y="205" width="40" height="4" rx="2" fill="#666" />
            <rect x="175" y="218" width="80" height="4" rx="2" fill="#888" />
            <rect x="265" y="218" width="30" height="4" rx="2" fill="#ff7a5c" opacity="0.6" />
            <rect x="175" y="231" width="50" height="4" rx="2" fill="#555" />
            <rect x="235" y="231" width="60" height="4" rx="2" fill="#ff5a3c" opacity="0.4" />
            <rect x="165" y="244" width="70" height="4" rx="2" fill="#666" />
            <rect x="175" y="257" width="90" height="4" rx="2" fill="#ff7a5c" opacity="0.5" />
            <rect x="275" y="257" width="20" height="4" rx="2" fill="#888" />
            <rect x="165" y="270" width="45" height="4" rx="2" fill="#ff5a3c" opacity="0.7" />
            <rect x="220" y="270" width="55" height="4" rx="2" fill="#555" />
            <rect x="175" y="283" width="65" height="4" rx="2" fill="#666" />
            <rect x="165" y="296" width="30" height="4" rx="2" fill="#ff5a3c" opacity="0.6" />
            <rect x="230" y="330" width="40" height="12" rx="2" fill="#2a2a2a" />
            <rect x="220" y="336" width="60" height="6" rx="3" fill="#333" />
            <rect x="180" y="350" width="140" height="25" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <rect key={`k1-${i}`} x={190 + i * 15} y={355} width="10" height="6" rx="1" fill="#2a2a2a" />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <rect key={`k2-${i}`} x={190 + i * 15} y={364} width="10" height="6" rx="1" fill="#2a2a2a" />
            ))}
            <rect x="370" y="315" width="22" height="28" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
            <path d="M392 325 Q402 325 402 335 Q402 340 392 340" fill="none" stroke="#444" strokeWidth="1.5" />
            <motion.path d="M377 310 Q380 300 383 310" fill="none" stroke="rgba(255,90,60,0.3)" strokeWidth="1.5" initial={{ opacity: 0, y: 0 }} animate={{ opacity: [0, 0.6, 0], y: -10 }} transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} />
            <rect x="90" y="310" width="18" height="30" rx="3" fill="#2a2a2a" />
            <circle cx="99" cy="305" r="10" fill="#1a3a1a" />
            <circle cx="92" cy="300" r="7" fill="#1a4a1a" />
            <circle cx="106" cy="298" r="8" fill="#1a3a1a" />
            <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <circle cx="420" cy="200" r="15" fill="rgba(255,90,60,0.1)" stroke="rgba(255,90,60,0.3)" strokeWidth="1" />
                <text x="420" y="205" textAnchor="middle" fill="#ff5a3c" fontSize="11" fontFamily="monospace">AI</text>
            </motion.g>
            <motion.g animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <circle cx="70" cy="230" r="12" fill="rgba(255,90,60,0.08)" stroke="rgba(255,90,60,0.2)" strokeWidth="1" />
                <text x="70" y="234" textAnchor="middle" fill="#ff7a5c" fontSize="9" fontFamily="monospace">ML</text>
            </motion.g>
            <motion.g animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <circle cx="60" cy="170" r="4" fill="#ff5a3c" opacity="0.4" />
                <circle cx="60" cy="190" r="4" fill="#ff5a3c" opacity="0.3" />
                <circle cx="60" cy="210" r="4" fill="#ff5a3c" opacity="0.5" />
                <circle cx="85" cy="180" r="4" fill="#ff7a5c" opacity="0.4" />
                <circle cx="85" cy="200" r="4" fill="#ff7a5c" opacity="0.3" />
                <line x1="60" y1="170" x2="85" y2="180" stroke="#ff5a3c" strokeWidth="0.5" opacity="0.3" />
                <line x1="60" y1="190" x2="85" y2="180" stroke="#ff5a3c" strokeWidth="0.5" opacity="0.3" />
                <line x1="60" y1="190" x2="85" y2="200" stroke="#ff5a3c" strokeWidth="0.5" opacity="0.3" />
                <line x1="60" y1="210" x2="85" y2="200" stroke="#ff5a3c" strokeWidth="0.5" opacity="0.3" />
            </motion.g>
            <ellipse cx="250" cy="260" rx="130" ry="80" fill="rgba(255,90,60,0.03)" />
        </svg>
    );
}

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.06) 0%, transparent 70%)" }} />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.04) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,90,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,60,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
                {/* Left content */}
                <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-poppins)] mb-6 leading-tight">
                            I&apos;m{" "}
                            <span className="text-gradient">NAVEEN</span>
                        </h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <p className="text-lg md:text-xl text-[#ccc] font-[family-name:var(--font-inter)] mb-3 leading-relaxed">
                            AI/ML student building intelligent systems for real-world academic use.
                        </p>
                        <p className="text-[#888] font-[family-name:var(--font-inter)] leading-relaxed mb-8">
                            I enjoy solving optimization-heavy problems and turning complex constraints into working software.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
                        <Magnetic>
                            <a href="#contact" className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e04a2f] text-white font-semibold font-[family-name:var(--font-inter)] text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,90,60,0.4)] block">
                                <span className="relative z-10">Get in Touch</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#e04a2f] to-[#ff5a3c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#projects" className="px-8 py-3.5 rounded-full border border-[rgba(255,90,60,0.3)] text-[#ff5a3c] font-semibold font-[family-name:var(--font-inter)] text-sm hover:bg-[rgba(255,90,60,0.08)] transition-all duration-300 block">
                                View Projects
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="/Naveen_R_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#ccc] font-semibold font-[family-name:var(--font-inter)] text-sm hover:text-white hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View CV
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="/Naveen_R_Resume.pdf" download="Naveen_R_Resume.pdf" className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#ccc] font-semibold font-[family-name:var(--font-inter)] text-sm hover:text-white hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download CV
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                {/* Right illustration */}
                <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
                    <div className="animate-float"><DeveloperIllustration /></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-10" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.08) 0%, transparent 60%)" }} />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs text-[#666] font-[family-name:var(--font-inter)]">Scroll Down</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full border-2 border-[rgba(255,90,60,0.3)] flex justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-[#ff5a3c]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
