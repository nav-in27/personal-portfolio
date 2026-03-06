"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NexusCardContent } from "./NexusCard";

export default function NexusCardSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="nexus" className="relative py-24 md:py-32 overflow-hidden">
            {/* Section divider */}
            <div className="section-divider mb-24" />

            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(255,90,60,0.03)] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                        <span className="text-gradient">Nexus Card</span>
                    </h2>
                    <p className="text-[#888] mt-4 text-lg font-[family-name:var(--font-inter)] max-w-xl mx-auto">
                        My interactive digital identity card — hover to explore
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <NexusCardContent />
                </motion.div>
            </div>
        </section>
    );
}
