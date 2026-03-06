"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const activeProjects = [
    {
        title: "AI Resume Analyzer",
        description: "An intelligent system that analyzes constraints, extracts skills using NLP, and parses candidate suitability for engineering roles in real-time.",
        tags: ["Python", "FastAPI", "NLP", "React"],
    },
    {
        title: "Smart Interview System",
        description: "An automated AI interviewer leveraging language models to conduct technical screenings and provide speech feedback to candidates.",
        tags: ["OpenAI", "WebRTC", "Next.js", "PostgreSQL"],
    },
    {
        title: "ML Model Dashboard",
        description: "A comprehensive visualization suite to monitor model health, track data drift, and evaluate live ML endpoints serving high traffic.",
        tags: ["TypeScript", "Three.js", "Scikit", "Tailwind"],
    },
];

function ActiveProjectCard({ project, index }: { project: typeof activeProjects[0], index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group relative"
        >
            <div className="relative rounded-2xl p-6 md:p-8 bg-[#1a1a1a] border border-[rgba(255,90,60,0.08)] overflow-hidden transition-all duration-500 hover:border-[rgba(255,90,60,0.3)] hover:shadow-[0_0_40px_rgba(255,90,60,0.1)] h-full">
                {/* Glowing subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,90,60,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a3c] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff5a3c]"></span>
                    </span>
                    <span className="text-[#ff5a3c] text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)]">In Development</span>
                </div>

                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-poppins)] mb-3 group-hover:text-gradient transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-[#888] text-sm md:text-base font-[family-name:var(--font-inter)] leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium text-[#ccc] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-full font-[family-name:var(--font-inter)]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function CurrentlyBuildingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="currently-building" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
            <div className="section-divider mb-24" />

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.03) 0%, transparent 60%)" }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Currently Building</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
                        A sneak peek at the intelligent systems and tools I&apos;m actively developing right now.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {activeProjects.map((project, i) => (
                        <ActiveProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
