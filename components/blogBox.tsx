"use client";
import { ArrowRight, Github } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export const Blogbox = ( {title, description } : {title: string, description: string} ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex flex-col w-full" : "flex flex-col w-full"}>
            <div className="text-[18px] font-[600]">{title}</div>
            <div className="text-[18px] mt-[5px] text-[#4D4D4D]">{description}</div>
            <div className="w-full h-[0.1px] bg-[#4D4D4D] mt-[30px]"></div>
        </div>
    )
}