"use client";


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Code2, } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    const words = ["AI Architectures", "Cognitive Systems", "EdTech Solutions"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-20 pb-16">
            <div className="flex flex-col md:flex-row gap-8 md:items-start">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative shrink-0"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-zinc-700/50 relative z-10">
                        <Image src="/profile.png" alt="Satya" width={160} height={160} className="object-cover" />
                    </div>
                    <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl -z-10 rounded-full" />
                </motion.div>

                <div className="flex-1 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Satya
                        </h1>
                        <div className="h-6 mt-2 overflow-hidden relative">
                            <motion.p
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="text-indigo-400 font-medium absolute top-0"
                            >
                                Building {words[index]}
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-zinc-400 leading-relaxed max-w-2xl"
                    >
                        I engineer systems that live on the internet and occasionally, in the terminal.
                        My work focuses on efficient <strong>RAG pipelines</strong> and <strong>agentic architectures</strong>.
                        I sit at the intersection of <span className="text-zinc-200">Cosmos, Psychology, and Code</span>—exploring how biological patterns can optimize artificial intelligence to help us learn effectively.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <SocialLink href="https://github.com/yourusername" icon={<Code2 size={18} />} label="GitHub" />
                        <SocialLink href="https://x.com/Satya021Don" icon={<Twitter size={18} />} label="Twitter" />
                        <SocialLink href="https://linkedin.com/in/satyanarayan-prashar-57a170229/" icon={<Linkedin size={18} />} label="LinkedIn" />
                        <SocialLink href="mailto:satyanarayan.pr29@gmail.com" icon={<Mail size={18} />} label="Email" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: any, label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors text-sm"
    >
        {icon}
        <span>{label}</span>
    </a>
);