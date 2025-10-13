"use client";

import { useScrollThumb } from "@/hooks/useScrollThumb";
import { ArrowUp, ArrowDown, Music, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AudioPlayer } from "./music";

export const CustomScrollbar = () => {
  const thumbTop = useScrollThumb();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed right-6 top-0 h-full flex items-center z-50">
      <div className="relative h-[70vh] w-12 bg-transparent rounded-full mx-auto">
        {/* Scrollbar Thumb */}
        <div
          className="absolute left-[20px] w-full h-40 bg-stone-900 rounded-full transition-all duration-200"
          style={{ top: `${thumbTop}%`, transform: "translateY(-50%)" }}
        >

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <ArrowUp size={16} />
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            )}
            <AudioPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};
