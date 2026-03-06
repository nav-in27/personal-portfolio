"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("text"), 800);
        const t2 = setTimeout(() => setPhase("exit"), 2800);
        const t3 = setTimeout(() => onComplete(), 3400);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== "exit" ? (
                <motion.div
                    key="splash"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
                >
                    {/* Glow orb */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute w-[300px] h-[300px] bg-[rgba(255,90,60,0.06)] rounded-full blur-[80px]"
                    />

                    {/* N Logo Image */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                        className="relative z-10 w-28 h-28 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,90,60,0.3)]"
                    >
                        <Image
                            src="/logo-n.png"
                            alt="NAVEEN R Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Name & tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={phase === "text" ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 mt-8 text-center"
                    >
                        <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-poppins)] mb-2">
                            NAVEEN R
                        </h1>
                        <p className="text-[#ff7a5c] text-sm font-[family-name:var(--font-inter)] tracking-wider uppercase">
                            AI / ML Student & System Builder
                        </p>
                    </motion.div>

                    {/* Loading bar */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
                        className="relative z-10 h-[2px] bg-gradient-to-r from-[#ff5a3c] to-[#e04a2f] rounded-full mt-8"
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
