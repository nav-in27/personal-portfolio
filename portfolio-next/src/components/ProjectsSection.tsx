"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "College Timetable Generator",
        description:
            "A constraint-based scheduling system used by department heads for academic planning, handling subject, faculty, room, and time-slot conflicts. Engineered two-phase optimization algorithm (Greedy + Genetic Algorithm) generating conflict-free timetables while optimizing 15+ soft constraints.",
        technologies: ["FastAPI", "React (Vite)", "PostgreSQL", "Render", "Vercel"],
        category: "Web Dev",
        highlights: ["85% reduced manual effort", "15+ soft constraints optimized"],
        githubUrl: "https://github.com/nav-in27",
        image: "/projects/timetable.png",
        color: "#ff5a3c",
    },
    {
        title: "Customer Churn Prediction",
        description:
            "Trained and evaluated 80+ ML models (XGBoost, CatBoost, LightGBM, Neural Networks, Random Forest) using AutoGluon AutoML, achieving 97.3% ROC-AUC in under 8 minutes on CPU. Automated end-to-end ML pipeline with feature engineering and hyperparameter optimization.",
        technologies: ["Python", "AutoGluon", "Pandas", "Scikit-learn", "Jupyter"],
        category: "AI/ML",
        highlights: ["97.3% ROC-AUC", "80+ models trained"],
        githubUrl: "https://github.com/nav-in27",
        image: "/projects/churn.png",
        color: "#ff7a5c",
    },
    {
        title: "Lung Cancer Risk Analysis",
        description:
            "Applied Bayesian logistic regression to medical datasets, quantifying prediction uncertainty through credible intervals for clinical decision support. Developed interactive Shiny dashboard for visualizing risk factors and probability outcomes.",
        technologies: ["R", "Shiny", "Plumber API", "Bayesian Regression"],
        category: "AI/ML",
        highlights: ["Bayesian inference", "Interactive dashboard"],
        githubUrl: "https://github.com/nav-in27",
        image: "/projects/cancer.png",
        color: "#e04a2f",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

    function handleMouseMove(e: React.MouseEvent) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ perspective: "1000px" }}
            className="group"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl bg-[#1a1a1a] border border-[rgba(255,90,60,0.1)] overflow-hidden h-full flex flex-col cursor-pointer hover:border-[rgba(255,90,60,0.25)] hover:shadow-[0_0_40px_rgba(255,90,60,0.08)]"
            >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                    {/* Category badge on image */}
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-[#ff7a5c] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm border border-[rgba(255,90,60,0.2)] font-[family-name:var(--font-inter)]"
                    >
                        {project.category}
                    </motion.span>

                    {/* GitHub on image */}
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-[rgba(0,0,0,0.7)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#888] hover:text-[#ff5a3c] hover:border-[rgba(255,90,60,0.3)] transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </motion.a>

                    {/* Click hint */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] text-[#666] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm font-[family-name:var(--font-inter)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to {isExpanded ? "collapse" : "view details"}
                    </div>
                </div>

                {/* Content below image */}
                <div className="relative z-10 p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-poppins)] mb-2 group-hover:text-gradient transition-all duration-500">
                        {project.title}
                    </h3>

                    {/* Highlights (always visible) */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.highlights.map((highlight, hi) => (
                            <motion.span
                                key={highlight}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + hi * 0.1 + 0.5 }}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs text-[#ff7a5c] bg-[rgba(255,90,60,0.06)] font-[family-name:var(--font-inter)]"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: hi * 0.5 }}
                                    className="w-1 h-1 rounded-full bg-[#ff5a3c]"
                                />
                                {highlight}
                            </motion.span>
                        ))}
                    </div>

                    {/* Description — only visible when expanded */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-[#888] text-sm leading-relaxed font-[family-name:var(--font-inter)] mb-4">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Technologies (always visible) */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-[rgba(255,255,255,0.04)]">
                        {project.technologies.map((tech, ti) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + ti * 0.08 + 0.3 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 rounded-full text-xs text-[#aaa] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] font-[family-name:var(--font-inter)] hover:border-[rgba(255,90,60,0.2)] hover:text-white transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Animated corner glow */}
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,90,60,0.1) 0%, transparent 60%)" }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-divider mb-24" />

            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-32 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,90,60,0.03) 0%, transparent 60%)" }}
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,90,60,0.03) 0%, transparent 60%)" }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)]">
                        Click a project to view details
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
