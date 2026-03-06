"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "education", "skills", "projects", "certifications", "contact"];

export default function SectionIndicator() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 300) {
                        setActiveIndex(i);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2.5">
            {sections.map((section, i) => (
                <a key={section} href={`#${section}`} className="group relative flex items-center" aria-label={`Go to ${section}`}>
                    {/* Tooltip */}
                    <span className="absolute right-6 px-3 py-1 rounded-lg bg-[#1a1a1a] border border-[rgba(255,90,60,0.15)] text-xs text-[#aaa] font-[family-name:var(--font-inter)] capitalize opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {section}
                    </span>

                    <div className="relative">
                        {i === activeIndex && (
                            <motion.div
                                layoutId="section-indicator"
                                className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#ff5a3c] shadow-[0_0_10px_rgba(255,90,60,0.5)]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#ff5a3c]" : "bg-[#333] hover:bg-[#555]"}`} />
                    </div>
                </a>
            ))}
        </div>
    );
}
