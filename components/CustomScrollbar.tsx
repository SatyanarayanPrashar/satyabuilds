"use client";

import { useScrollThumb } from "@/hooks/useScrollThumb";
import { BookText, Home, PersonStanding} from "lucide-react";
import { useRef } from "react";
import { AudioPlayer } from "./music";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const CustomScrollbar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  useScrollThumb(thumbRef);
  const path = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={cn("fixed h-full flex items-center z-50 pointer-events-none", !isMobile ? "right-6 top-0" : "")}>
      <div className="relative h-[70vh] w-12 bg-transparent rounded-full mx-auto">
        <div
          ref={thumbRef}
          className="absolute left-[20px] w-full h-[12rem] bg-gray-400 rounded-full pointer-events-auto"
          style={{ transform: "translateY(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <Link href={"/"} className={cn("p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition", path == "/" && "bg-gray-400")}>
              <Home size={16}/>
            </Link>
            <Link href={"/about"} className={cn("p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition", path == "/about" && "bg-gray-400")}>
              <PersonStanding size={16}/>
            </Link>
            <Link href={"/blogs"} className={cn("p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition", path == "/blogs" && "bg-gray-400")}>
              <BookText size={16}/>
            </Link>

            <AudioPlayer />
            {/* <button
              onClick={scrollToTop}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <ArrowUp size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
