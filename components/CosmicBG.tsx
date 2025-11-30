"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CosmicBackground = ({ nebulous = true }: { nebulous?: boolean }) => {
    // Only render particles on client to avoid hydration mismatch with random values
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-zinc-950 overflow-hidden">
            
            {/* 1. The Nebulous Blobs (Atmosphere) */}
            {nebulous && (
                <div className="w-1/2">
                    <div className="absolute top-0 -left-4 lg:left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
                    <div className="absolute top-0 -right-4 lg:right-[20%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 lg:left-[35%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
                </div>
            )}

            {/* 2. The Floating Particles (Matter) */}
            {mounted && <FloatingParticles count={25} />}

            {/* 3. The Noise Overlay (Texture) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        </div>
    )
}

const FloatingParticles = ({ count = 25 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    initial={{
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -100], // Float up
                        opacity: [0, Math.random() * 0.4 + 0.1, 0], // Twinkle/Fade in-out (Max opacity 0.5)
                    }}
                    transition={{
                        duration: Math.random() * 15 + 15, // Slow drift (15-30s)
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                    style={{
                        width: Math.random() * 2 + 0.5 + "px", // Random size 0.5px to 2.5px
                        height: Math.random() * 2 + 0.5 + "px",
                    }}
                />
            ))}
        </div>
    );
};