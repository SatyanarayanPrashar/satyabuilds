"use client";

import { useScrollThumb } from "@/hooks/useScrollThumb";
import { BookText, Home, User, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { AudioPlayer } from "./music";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export const CustomScrollbar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  useScrollThumb(thumbRef);

  const { scrollYProgress } = useScroll();
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (isMobile) {
    return <MobileNav path={path} />;
  }

  return (
    <div className="fixed top-24 right-0 z-50 flex items-start w-24 pointer-events-none h-[55vh]">
        
        {/* The Track (Optional visual line) */}
        <div className="absolute right-8 h-full w-[1px] bg-zinc-800/0 rounded-full" />

        {/* The Pod (Thumb) */}
        <div className="relative w-full h-full">
            <motion.div
                ref={thumbRef}
                className="absolute right-4 w-12 py-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-2xl shadow-black/50 pointer-events-auto flex flex-col items-center gap-3 overflow-hidden"
                style={{ top: "0%" }}
            >
                {/* Progress Fill Background */}
                <motion.div 
                    style={{ height: fillHeight }}
                    className="absolute bottom-0 left-0 w-full bg-indigo-500/10 -z-10"
                />

                <NavIcon href="/" icon={Home} isActive={path === "/"} label="Home" />
                <NavIcon href="/blogs" icon={BookText} isActive={path.includes("/blogs")} label="Logs" />
                
                {/* Divider */}
                <div className="w-6 h-[1px] bg-zinc-800/50 my-1" />
                
                <div className="scale-75 origin-center hover:scale-100 transition-transform">
                     <AudioPlayer />
                </div>
            </motion.div>
        </div>
    </div>
  );
};

// --- Sub-components (No changes needed here) ---

const NavIcon = ({ href, icon: Icon, isActive, label }: { href: string, icon: any, isActive: boolean, label: string }) => (
    <Link href={href} className="relative group">
        <div className={cn(
            "p-2 rounded-full transition-all duration-300", 
            isActive 
                ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                : "text-zinc-500 hover:text-indigo-400 hover:bg-zinc-800"
        )}>
            <Icon size={18} />
        </div>
        
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
            {label}
        </span>
    </Link>
);

const MobileNav = ({ path }: { path: string }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="mb-4 p-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl flex flex-col gap-2 pointer-events-auto origin-bottom-right"
                    >
                        <MobileLink href="/" icon={Home} isActive={path === "/"} onClick={() => setExpanded(false)} label="Home" />
                        <MobileLink href="/about" icon={User} isActive={path === "/about"} onClick={() => setExpanded(false)} label="Profile" />
                        <MobileLink href="/blogs" icon={BookText} isActive={path.includes("/blogs")} onClick={() => setExpanded(false)} label="Logs" />
                        
                        <div className="h-[1px] w-full bg-zinc-800 my-1" />
                        <div className="p-2 flex justify-center">
                            <AudioPlayer />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setExpanded(!expanded)}
                whileTap={{ scale: 0.9 }}
                className={cn(
                    "pointer-events-auto h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-colors border border-zinc-700/50",
                    expanded ? "bg-zinc-800 text-white" : "bg-zinc-900 text-indigo-400 border-indigo-500/30"
                )}
            >
                <motion.div
                    animate={{ rotate: expanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {expanded ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
            </motion.button>
        </div>
    );
};

const MobileLink = ({ href, icon: Icon, isActive, onClick, label }: any) => (
    <Link 
        href={href} 
        onClick={onClick}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors min-w-[140px]",
            isActive ? "bg-indigo-500/20 text-indigo-300" : "hover:bg-zinc-800/50 text-zinc-400"
        )}
    >
        <Icon size={18} />
        <span className="font-medium text-sm">{label}</span>
    </Link>
);