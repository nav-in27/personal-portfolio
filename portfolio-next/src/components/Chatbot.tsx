"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
}

const qaDatabase = [
    {
        keywords: ["project", "build", "work", "made"],
        answer: "Naveen has built several projects including an AI Resume Analyzer, a Smart Interview System, an ML Model Dashboard, and a Hybrid Timetable Generator. Check out the Projects section above for more details!"
    },
    {
        keywords: ["tech", "skill", "know", "language", "stack"],
        answer: "His stack includes Python, React, Next.js, FastAPI, PostgreSQL, Machine Learning, TensorFlow, XGBoost, and more. You can see the full sliding list in the Skills section."
    },
    {
        keywords: ["contact", "email", "reach", "hire", "message"],
        answer: "You can reach him easily at naveenrenugopal@gmail.com, or through his LinkedIn and GitHub profiles linked in the Contact section."
    },
    {
        keywords: ["about", "who", "naveen", "background"],
        answer: "Naveen R is an AI/ML student passionate about building intelligent systems, automation tools, and scalable software that solves real-world problems."
    },
    {
        keywords: ["ai", "machine learning", "ml"],
        answer: "He specializes in AI/ML! Some of his active developments involve NLP resume parsing, speech-feedback interview systems, and live ML model monitoring."
    },
    {
        keywords: ["resume", "cv", "download"],
        answer: "You can view or download his CV right from the Hero section at the top of the page, or using the buttons in the Contact area."
    }
];

function getBotResponse(input: string): string {
    const normalizedInput = input.toLowerCase();

    for (const qa of qaDatabase) {
        if (qa.keywords.some(kw => normalizedInput.includes(kw))) {
            return qa.answer;
        }
    }

    return "I'm a simple AI assistant! Try asking about Naveen's skills, projects, background, resume, or how to contact him.";
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Hi! I'm Naveen's AI Assistant. How can I help you today?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: inputValue.trim(), sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Simulate thinking delay
        setTimeout(() => {
            const botMsg: Message = { id: (Date.now() + 1).toString(), text: getBotResponse(userMsg.text), sender: "bot" };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e04a2f] text-white shadow-[0_0_20px_rgba(255,90,60,0.4)] flex items-center justify-center z-50 cursor-pointer hidden md:flex hover:shadow-[0_0_30px_rgba(255,90,60,0.6)] transition-shadow"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-[#121212] border border-[rgba(255,90,60,0.2)] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5),auto_auto_30px_rgba(255,90,60,0.15)] flex flex-col z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[rgba(255,90,60,0.1)] to-transparent border-b border-[rgba(255,90,60,0.1)]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#ff5a3c] flex items-center justify-center text-white font-bold text-sm">
                                    AI
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold font-[family-name:var(--font-poppins)] text-sm">Portfolio Assistant</h3>
                                    <p className="text-[#ff5a3c] text-xs font-[family-name:var(--font-inter)] flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a3c] animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-[#888] hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-[rgba(255,90,60,0.2)] scrollbar-track-transparent">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm font-[family-name:var(--font-inter)] leading-relaxed ${msg.sender === "user"
                                                ? "bg-gradient-to-r from-[#ff5a3c] to-[#e04a2f] text-white rounded-tr-sm"
                                                : "bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] text-[#e0e0e0] rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[#0f0f0f]">
                            <form onSubmit={handleSend} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask something about Naveen..."
                                    className="w-full bg-[#1a1a1a] text-sm text-white placeholder-[#666] border border-[rgba(255,255,255,0.08)] rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-[rgba(255,90,60,0.5)] transition-colors font-[family-name:var(--font-inter)]"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#ff5a3c] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                                >
                                    <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
