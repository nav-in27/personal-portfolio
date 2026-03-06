"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const config = {
    profile: {
        name: "NAVEEN R",
        tagline: "AI/ML Student & System Builder",
        location: "India",
    },
    skills: ["AI/ML Student", "System Designer"],
    socialLinks: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/naveen-r-19a160326" },
        { platform: "GitHub", url: "https://github.com/nav-in27" },
        { platform: "Instagram", url: "https://www.instagram.com/nav.3n_?igsh=eGt2ZWJqdzFmenA1" },
        { platform: "Email", url: "mailto:naveenrenugopal@gmail.com" },
    ],
};

const socialIcons: Record<string, React.ReactNode> = {
    LinkedIn: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    GitHub: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    Instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    ),
    Email: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    ),
};

function NexusCardContent() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    function handleMouseMove(e: React.MouseEvent) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <div className="flex justify-center items-center" style={{ perspective: "1000px" }}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX: isHovering ? rotateX : 0, rotateY: isHovering ? rotateY : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[430px] rounded-3xl bg-[#0a0a0a] border border-[rgba(255,90,60,0.2)] overflow-hidden text-center"
                whileHover={{ boxShadow: "0 0 30px 10px rgba(255, 90, 60, 0.15)" }}
            >
                {/* Banner */}
                <div className="relative h-[150px] overflow-hidden border-b border-[rgba(255,90,60,0.2)]">
                    <div className="w-full h-full bg-gradient-to-br from-[rgba(255,90,60,0.15)] via-[rgba(255,90,60,0.05)] to-[#0a0a0a]" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,90,60,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,60,0.15) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
                    <motion.span animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 right-6 text-[#ff5a3c] text-sm font-mono opacity-40">{'</>'}</motion.span>
                    <motion.span animate={{ y: [5, -5, 5], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-8 left-6 text-[#ff7a5c] text-sm font-mono opacity-30">{'{ }'}</motion.span>
                </div>

                {/* Profile — N Logo Image as Avatar */}
                <div className="flex flex-col items-center -mt-12 relative z-10">
                    <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#ff5a3c] to-[#e04a2f] p-[3px] shadow-[0_0_25px_rgba(255,90,60,0.3)]">
                        <div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden">
                            <Image
                                src="/logo-n.png"
                                alt="NAVEEN R"
                                width={100}
                                height={100}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mt-3 mb-4 font-[family-name:var(--font-poppins)]">{config.profile.name}</h2>
                </div>

                {/* Skills */}
                <div className="mb-5 flex justify-center gap-2 flex-wrap px-4">
                    {config.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full text-xs border border-[rgba(255,90,60,0.3)] text-[#ff5a3c] font-[family-name:var(--font-inter)] hover:bg-[rgba(255,90,60,0.1)] transition-all duration-300 cursor-default">{skill}</span>
                    ))}
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1.5 mb-5 text-xs text-[#888]">
                    <svg className="w-4 h-4 text-[#ff5a3c]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                    <span className="font-[family-name:var(--font-inter)]">{config.profile.location}</span>
                </div>

                {/* Social */}
                <div className="flex justify-center gap-4 mb-6 flex-wrap px-4">
                    {config.socialLinks.map((link) => (
                        <a key={link.platform} href={link.url} target={link.platform !== "Email" ? "_blank" : undefined} rel={link.platform !== "Email" ? "noopener noreferrer" : undefined} className="group/social relative text-[#ff5a3c] hover:scale-110 hover:rotate-[5deg] transition-all duration-300" title={link.platform}>
                            <div className="drop-shadow-[0_0_3px_rgba(255,90,60,0.4)] group-hover/social:drop-shadow-[0_0_8px_rgba(255,90,60,0.6)] transition-all duration-300">{socialIcons[link.platform]}</div>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="py-3 border-t border-[rgba(255,90,60,0.1)] text-xs text-[#666] font-[family-name:var(--font-inter)]">
                    Made with <span className="text-[#ff5a3c]">♥</span> by NAVEEN R
                </div>
            </motion.div>
        </div>
    );
}

export default function NexusCardModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0, y: 40 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative z-10 w-full max-w-[460px] px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute -top-3 -right-1 md:right-1 z-20 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[rgba(255,90,60,0.2)] flex items-center justify-center text-[#888] hover:text-[#ff5a3c] hover:border-[rgba(255,90,60,0.4)] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                        <NexusCardContent />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
