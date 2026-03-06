"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
    {
        year: "2024 — 2028",
        degree: "B.Tech in AI & Machine Learning",
        institution: "K. Ramakrishnan College of Technology",
        detail: "CGPA: 8.3/10",
        icon: "🎓",
    },
    {
        year: "2022 — 2024",
        degree: "Higher Secondary (XII)",
        institution: "Dheeran Chinnamalai International Residential School",
        detail: "",
        icon: "📚",
    },
];

function EducationCard({
    data,
    index,
}: {
    data: (typeof educationData)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="group relative"
        >
            <div className="relative rounded-2xl p-6 bg-gradient-to-br from-[rgba(255,90,60,0.12)] to-[rgba(255,90,60,0.03)] border border-[rgba(255,90,60,0.15)] overflow-hidden transition-all duration-500 hover:border-[rgba(255,90,60,0.3)] hover:shadow-[0_0_40px_rgba(255,90,60,0.1)]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,90,60,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(255,90,60,0.2)] to-[rgba(255,90,60,0.05)] flex items-center justify-center text-2xl border border-[rgba(255,90,60,0.1)]">
                        {data.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#ff7a5c] bg-[rgba(255,90,60,0.1)] border border-[rgba(255,90,60,0.15)] mb-2 font-[family-name:var(--font-inter)]">
                            {data.year}
                        </span>
                        <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-poppins)] mb-1">
                            {data.degree}
                        </h3>
                        <p className="text-[#888] text-sm font-[family-name:var(--font-inter)]">
                            {data.institution}
                        </p>
                        {data.detail && (
                            <p className="text-[#ff7a5c] text-xs font-medium font-[family-name:var(--font-inter)] mt-1">
                                {data.detail}
                            </p>
                        )}
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[rgba(255,90,60,0.05)] rounded-full blur-xl" />
            </div>
        </motion.div>
    );
}

// Desk illustration for the right side
function DeskIllustration() {
    return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Desk */}
            <rect x="40" y="280" width="320" height="10" rx="5" fill="#2a2a2a" />
            <rect x="60" y="290" width="6" height="70" rx="3" fill="#222" />
            <rect x="334" y="290" width="6" height="70" rx="3" fill="#222" />

            {/* Laptop */}
            <rect x="100" y="210" width="180" height="68" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
            <rect x="108" y="218" width="164" height="52" rx="2" fill="#0f0f0f" />
            {/* Code on screen */}
            <rect x="116" y="226" width="50" height="3" rx="1.5" fill="#ff5a3c" opacity="0.7" />
            <rect x="172" y="226" width="30" height="3" rx="1.5" fill="#555" />
            <rect x="124" y="234" width="70" height="3" rx="1.5" fill="#666" />
            <rect x="124" y="242" width="40" height="3" rx="1.5" fill="#ff7a5c" opacity="0.5" />
            <rect x="170" y="242" width="50" height="3" rx="1.5" fill="#444" />
            <rect x="116" y="250" width="60" height="3" rx="1.5" fill="#555" />
            <rect x="124" y="258" width="45" height="3" rx="1.5" fill="#ff5a3c" opacity="0.4" />
            {/* Laptop base */}
            <path d="M80 278 L100 278 L100 280 Q190 290 280 280 L280 278 L300 278 L300 280 Q190 295 80 280 Z" fill="#1e1e1e" stroke="#333" strokeWidth="1" />

            {/* Book stack */}
            <rect x="310" y="256" width="40" height="8" rx="2" fill="#2a1515" />
            <rect x="308" y="248" width="44" height="8" rx="2" fill="#1a2a1a" />
            <rect x="312" y="240" width="38" height="8" rx="2" fill="#1a1a2a" />

            {/* Pen holder */}
            <rect x="52" y="252" width="20" height="28" rx="3" fill="#222" stroke="#333" strokeWidth="1" />
            <line x1="58" y1="252" x2="56" y2="235" stroke="#ff5a3c" strokeWidth="2" opacity="0.6" />
            <line x1="62" y1="252" x2="62" y2="232" stroke="#666" strokeWidth="2" />
            <line x1="66" y1="252" x2="68" y2="237" stroke="#ff7a5c" strokeWidth="2" opacity="0.4" />

            {/* Floating graduation cap */}
            <motion.g
                animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <polygon points="200,120 170,140 200,150 230,140" fill="#ff5a3c" opacity="0.8" />
                <polygon points="200,150 170,140 170,155 200,165 230,155 230,140" fill="#e04a2f" opacity="0.6" />
                <line x1="230" y1="140" x2="235" y2="165" stroke="#ff7a5c" strokeWidth="1.5" />
                <circle cx="235" cy="168" r="3" fill="#ff7a5c" />
            </motion.g>

            {/* Floating atom/react icon */}
            <motion.g
                animate={{ y: [3, -6, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <ellipse cx="340" cy="180" rx="20" ry="8" fill="none" stroke="rgba(255,90,60,0.2)" strokeWidth="1" />
                <ellipse cx="340" cy="180" rx="20" ry="8" fill="none" stroke="rgba(255,90,60,0.2)" strokeWidth="1" transform="rotate(60 340 180)" />
                <ellipse cx="340" cy="180" rx="20" ry="8" fill="none" stroke="rgba(255,90,60,0.2)" strokeWidth="1" transform="rotate(-60 340 180)" />
                <circle cx="340" cy="180" r="3" fill="#ff5a3c" opacity="0.5" />
            </motion.g>

            {/* Ambient glow */}
            <ellipse cx="190" cy="250" rx="100" ry="30" fill="rgba(255,90,60,0.03)" />
        </svg>
    );
}

export default function EducationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="relative py-24 md:py-32 overflow-hidden">
            {/* Section divider */}
            <div className="section-divider mb-24" />

            {/* Background */}
            <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.03) 0%, transparent 60%)" }} />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Education</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)]">
                        My academic journey & qualifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Education Cards */}
                    <div className="flex flex-col gap-6">
                        {educationData.map((item, i) => (
                            <EducationCard key={i} data={item} index={i} />
                        ))}
                    </div>

                    {/* Desk Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block"
                    >
                        <div className="animate-float-slow">
                            <DeskIllustration />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
