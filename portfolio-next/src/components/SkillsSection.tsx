"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "XGBoost", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "AutoGluon", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Neural Networks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Oracle Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
];

const doubledSkills = [...skills, ...skills, ...skills];

function SkillPill({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex-shrink-0 flex items-center gap-5 px-8 py-4 md:px-12 md:py-5 rounded-full bg-[#1a1a1a] border border-[rgba(255,90,60,0.15)] text-[#e0e0e0] font-[family-name:var(--font-inter)] font-bold text-xl md:text-3xl whitespace-nowrap hover:border-[rgba(255,90,60,0.5)] hover:text-white hover:bg-[rgba(255,90,60,0.08)] hover:shadow-[0_0_30px_rgba(255,90,60,0.2)] transition-all duration-300 cursor-default select-none">
            <img src={icon} alt={name} className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg" />
            {name}
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-divider mb-24" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg md:text-xl font-[family-name:var(--font-inter)]">
                        Technologies & tools I work with
                    </p>
                </motion.div>
            </div>

            {/* Marquee - Single Row */}
            <div className="relative w-full overflow-hidden">
                {/* Gradients for fading edges */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

                <motion.div
                    className="flex gap-6 md:gap-10"
                    animate={{ x: ["0%", "-33.333333%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                >
                    {doubledSkills.map((skill, i) => (
                        <SkillPill key={`skill-${i}`} name={skill.name} icon={skill.icon} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
