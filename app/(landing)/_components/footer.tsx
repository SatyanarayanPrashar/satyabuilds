"use client";

import { Sparkles } from "lucide-react";

export const Footer = () => (
    <footer className="py-10 border-t border-zinc-900 mt-10 flex justify-between items-center text-zinc-600 text-sm">
        <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-indigo-500" />
            <span>Crafted by Satya</span>
        </div>
        <div className="flex gap-4">
            <p>Bangalore, IN</p>
        </div>
    </footer>
)