"use client";

import { useScrollThumb } from "@/hooks/useScrollThumb";
import { BookText, Home, PersonStanding, Menu } from "lucide-react";
import { useRef, useState } from "react";
import { AudioPlayer } from "./music";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const CustomScrollbar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  useScrollThumb(thumbRef);
  const path = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expanded, setExpanded] = useState(false);

  if (!isMobile) {
    return (
      <div className="fixed h-full flex items-center z-50 pointer-events-none right-0 top-0">
        <div className="relative h-[70vh] w-12 bg-transparent rounded-full mx-auto">
          <div
            ref={thumbRef}
            className="absolute left-[-1px] w-full h-[12rem] bg-gray-400 rounded-full pointer-events-auto"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <Link
                href={"/"}
                className={cn(
                  "p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition",
                  path == "/" && "bg-gray-400"
                )}
              >
                <Home size={16} />
              </Link>
              <Link
                href={"/about"}
                className={cn(
                  "p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition",
                  path == "/about" && "bg-gray-400"
                )}
              >
                <PersonStanding size={16} />
              </Link>
              <Link
                href={"/blogs"}
                className={cn(
                  "p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition",
                  path == "/blogs" && "bg-gray-400"
                )}
              >
                <BookText size={16} />
              </Link>

              <AudioPlayer />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-center gap-3 mb-2 py-2 px-1 bg-gray-400 rounded-full"
          >
            <Link
              href={"/"}
              className={cn(
                "p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition ",
                path == "/" && "bg-gray-400"
              )}
              onClick={() => setExpanded(false)}
            >
              <Home size={18} />
            </Link>
            <Link
              href={"/about"}
              className={cn(
                "p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition",
                path == "/about" && "bg-gray-400"
              )}
              onClick={() => setExpanded(false)}
            >
              <PersonStanding size={18} />
            </Link>
            <Link
              href={"/blogs"}
              className={cn(
                "p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition",
                path == "/blogs" && "bg-gray-400"
              )}
              onClick={() => setExpanded(false)}
            >
              <BookText size={18} />
            </Link>

            <AudioPlayer />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition pointer-events-auto"
      >
        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Menu size={20} />
        </motion.div>
      </button>
    </div>
  );
};
