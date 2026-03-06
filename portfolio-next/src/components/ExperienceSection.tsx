"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "K. Ramakrishnan College of Technology",
        role: "Production System Developer",
        duration: "Sep 2024 — Present",
        description:
            "Architected and deployed a production-grade scheduling system currently serving 1000+ students and faculty. Built RESTful API with FastAPI handling 500+ concurrent requests with sub-200ms P95 latency. Designed intelligent teacher substitution module using multi-factor weighted scoring, reducing manual scheduling effort by 85%.",
        tags: ["FastAPI", "React", "PostgreSQL", "Vercel"],
    },
    {
        company: "Independent Research",
        role: "ML Engineer & Data Scientist",
        duration: "2024 — Present",
        description:
            "Trained and evaluated 80+ ML models achieving 97.3% ROC-AUC using AutoGluon AutoML framework. Applied Bayesian inference for healthcare analytics — building interactive dashboards for lung cancer risk analysis. Automated end-to-end ML pipelines with feature engineering and hyperparameter optimization.",
        tags: ["Python", "AutoGluon", "XGBoost", "Bayesian Regression"],
    },
    {
        company: "Open Source",
        role: "Contributor & Builder",
        duration: "2023 — Present",
        description:
            "Contributing to open-source projects on GitHub. Building developer tools, component libraries, and portfolio systems. Active in the ML and web development communities with a focus on production-ready implementations.",
        tags: ["GitHub", "TypeScript", "Node.js", "Open Source"],
    },
];

function TimelineItem({
    experience,
    index,
}: {
    experience: (typeof experiences)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="group relative flex gap-6 md:gap-10"
        >
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
                {/* Dot */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="relative z-10 w-4 h-4 rounded-full bg-[#ff5a3c] shadow-[0_0_15px_rgba(255,90,60,0.4)] flex-shrink-0 mt-1.5"
                >
                    <div className="absolute inset-0 rounded-full bg-[#ff5a3c] animate-ping opacity-20" />
                </motion.div>
                {/* Line */}
                {index < experiences.length - 1 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className="w-[2px] bg-gradient-to-b from-[rgba(255,90,60,0.3)] to-[rgba(255,90,60,0.05)] flex-1"
                    />
                )}
            </div>

            {/* Content card */}
            <div className="flex-1 pb-12">
                <div className="relative rounded-2xl p-6 md:p-8 bg-[#1a1a1a] border border-[rgba(255,90,60,0.1)] transition-all duration-500 hover:border-[rgba(255,90,60,0.25)] hover:shadow-[0_0_40px_rgba(255,90,60,0.08)] overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,90,60,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        {/* Duration badge */}
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#ff7a5c] bg-[rgba(255,90,60,0.1)] border border-[rgba(255,90,60,0.15)] mb-3 font-[family-name:var(--font-inter)]">
                            {experience.duration}
                        </span>

                        {/* Role & Company */}
                        <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)] mb-1">
                            {experience.role}
                        </h3>
                        <p className="text-[#ff5a3c] font-medium font-[family-name:var(--font-inter)] mb-3">
                            {experience.company}
                        </p>

                        {/* Description */}
                        <p className="text-[#888] text-sm leading-relaxed font-[family-name:var(--font-inter)] mb-4">
                            {experience.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {experience.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs text-[#aaa] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] font-[family-name:var(--font-inter)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-[rgba(255,90,60,0.04)] rounded-full blur-xl" />
                </div>
            </div>
        </motion.div>
    );
}

export default function ExperienceSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Section divider */}
            <div className="section-divider mb-24" />

            {/* Background */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(255,90,60,0.02)] rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)]">
                        My professional journey & contributions
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, i) => (
                        <TimelineItem key={i} experience={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
