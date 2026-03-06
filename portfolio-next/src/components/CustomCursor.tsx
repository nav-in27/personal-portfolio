"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [hidden, setHidden] = useState(true);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        // Only run on desktop
        if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            setHidden(false);

            const moveCursor = (e: MouseEvent) => {
                cursorX.set(e.clientX - 16);
                cursorY.set(e.clientY - 16);
            };

            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                // Expanded glow state for any clickables
                if (
                    target.tagName.toLowerCase() === "a" ||
                    target.tagName.toLowerCase() === "button" ||
                    target.closest("a") ||
                    target.closest("button") ||
                    target.classList.contains("clickable")
                ) {
                    setIsHovered(true);
                } else {
                    setIsHovered(false);
                }
            };

            const handleMouseOut = () => {
                setHidden(false);
            };

            const handleMouseLeave = () => {
                setHidden(true);
            };
            const handleMouseEnter = () => {
                setHidden(false);
            };

            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mouseover", handleMouseOver);
            document.body.addEventListener("mouseleave", handleMouseLeave);
            document.body.addEventListener("mouseenter", handleMouseEnter);

            return () => {
                window.removeEventListener("mousemove", moveCursor);
                window.removeEventListener("mouseover", handleMouseOver);
                document.body.removeEventListener("mouseleave", handleMouseLeave);
                document.body.removeEventListener("mouseenter", handleMouseEnter);
            };
        }
    }, [cursorX, cursorY]);

    if (hidden) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovered ? 2 : 1,
                opacity: isHovered ? 0.5 : 0.8,
            }}
            transition={{ duration: 0.15 }}
        >
            <div className="absolute inset-0 rounded-full bg-[#ff5a3c] blur-[4px] opacity-70" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ff5a3c]" />
        </motion.div>
    );
}
