"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "Aug 2025",
        credentialId: "322009464OCI25GAIOCP",
        skill: "Generative AI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    },
    {
        title: "Data Scientist",
        issuer: "Simplilearn",
        date: "Aug 2025",
        credentialId: "157302868",
        skill: "Data Science & Data Analysis",
        icon: "/certificates/simplilearn.png",
    },
    {
        title: "Prompt Engineering & Programming with OpenAI",
        issuer: "Columbia+",
        date: "Aug 2025",
        credentialId: "157536429",
        skill: "Prompt Engineering",
        icon: "/certificates/columbia.png",
    },
    {
        title: "Machine Learning I",
        issuer: "Columbia+",
        date: "Aug 2025",
        credentialId: "157301515",
        skill: "Machine Learning",
        icon: "/certificates/columbia.png",
    },
    {
        title: "Operating System Fundamentals",
        issuer: "NPTEL",
        date: "",
        credentialId: "",
        skill: "Operating Systems",
        icon: "/certificates/nptel.png",
    },
    {
        title: "Programming Foundations with JavaScript, HTML & CSS",
        issuer: "United Latino Students Association",
        date: "Dec 2024",
        credentialId: "E6YJFS24M47B",
        skill: "Web Development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
];

function CertCard({
    cert,
    index,
}: {
    cert: (typeof certifications)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="group"
        >
            <div className="relative rounded-2xl p-5 bg-[#1a1a1a] border border-[rgba(255,90,60,0.08)] overflow-hidden transition-all duration-500 hover:border-[rgba(255,90,60,0.25)] hover:shadow-[0_0_30px_rgba(255,90,60,0.08)] h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,90,60,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.9)] p-1.5 flex items-center justify-center border border-[rgba(255,90,60,0.1)]">
                        <img src={cert.icon} alt={cert.issuer} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white font-[family-name:var(--font-poppins)] mb-1 leading-tight">
                            {cert.title}
                        </h3>
                        <p className="text-[#ff7a5c] text-xs font-medium font-[family-name:var(--font-inter)]">
                            {cert.issuer}
                        </p>
                        {cert.date && (
                            <p className="text-[#666] text-xs font-[family-name:var(--font-inter)] mt-1">
                                Issued {cert.date}
                            </p>
                        )}
                        <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] text-[#aaa] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] font-[family-name:var(--font-inter)]">
                            {cert.skill}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function CertificationsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="certifications"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Section divider */}
            <div className="section-divider mb-24" />

            {/* Background */}
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,90,60,0.03) 0%, transparent 60%)" }} />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)]">
                        Professional credentials & continuous learning
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, i) => (
                        <CertCard key={cert.title} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
