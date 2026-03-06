"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalModeProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CommandOutput {
    type: "input" | "output";
    text: string | React.ReactNode;
}

export default function TerminalMode({ isOpen, onClose }: TerminalModeProps) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandOutput[]>([
        { type: "output", text: "Welcome to Naveen's Interactive Terminal." },
        { type: "output", text: 'Type "help" to see available commands.' }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    const processCommand = (cmd: string) => {
        const normalizedCmd = cmd.trim().toLowerCase();
        let outputText: string | React.ReactNode = "";

        switch (normalizedCmd) {
            case "help":
                outputText = (
                    <div>
                        Available commands:<br />
                        <span className="text-[#ff5a3c]">about</span> - Learn about Naveen<br />
                        <span className="text-[#ff5a3c]">skills</span> - View tech stack<br />
                        <span className="text-[#ff5a3c]">projects</span> - List of deployed projects<br />
                        <span className="text-[#ff5a3c]">contact</span> - Get contact info<br />
                        <span className="text-[#ff5a3c]">clear</span> - Clear terminal
                    </div>
                );
                break;
            case "about":
                outputText = "I am an AI/ML developer passionate about building intelligent systems, automation tools, and scalable applications.";
                break;
            case "skills":
                outputText = "Tech Stack: Python, JavaScript, React, Next.js, FastAPI, Machine Learning, TensorFlow, PostgreSQL.";
                break;
            case "projects":
                outputText = (
                    <div>
                        - <a href="#projects" onClick={onClose} className="text-[#ff5a3c] hover:underline cursor-pointer">AI Resume Analyzer</a><br />
                        - <a href="#projects" onClick={onClose} className="text-[#ff5a3c] hover:underline cursor-pointer">Smart Interview System</a><br />
                        - <a href="#projects" onClick={onClose} className="text-[#ff5a3c] hover:underline cursor-pointer">ML Model Dashboard</a>
                    </div>
                );
                break;
            case "contact":
                outputText = "Email: naveenrenugopal@gmail.com | GitHub: nav-in27 | LinkedIn: naveen-r-19a160326";
                break;
            case "clear":
                setHistory([]);
                return;
            case "":
                return;
            default:
                outputText = `Command not found: ${cmd}. Type "help" for a list of commands.`;
        }

        setHistory(prev => [
            ...prev,
            { type: "input", text: `root@naveen-portfolio:~$ ${cmd}` },
            { type: "output", text: outputText }
        ]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        processCommand(input);
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="w-full max-w-3xl h-[60vh] bg-[#0a0a0a] border border-[#ff5a3c]/30 rounded-lg shadow-[0_0_50px_rgba(255,90,60,0.15)] flex flex-col overflow-hidden font-mono"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 bg-[#111] border-b border-[#333]">
                            <div className="flex gap-2">
                                <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto text-[#888] text-xs select-none">naveen@portfolio ~ terminal</div>
                        </div>

                        {/* Terminal Content */}
                        <div className="flex-1 p-4 overflow-y-auto text-sm md:text-base text-[#e0e0e0]">
                            {history.map((cmd, i) => (
                                <div key={i} className={`mb-2 ${cmd.type === "input" ? "text-white" : "text-[#aaa]"}`}>
                                    {cmd.text}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Terminal Input */}
                        <div className="p-4 bg-[#050505] flex items-center text-sm md:text-base border-t border-[#222]">
                            <span className="text-[#ff5a3c] mr-2 whitespace-nowrap">root@naveen-portfolio:~$</span>
                            <form onSubmit={handleSubmit} className="flex-1">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="w-full bg-transparent text-white outline-none"
                                    autoFocus
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
