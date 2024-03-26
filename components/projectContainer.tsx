"use client";
import { ArrowRight, Github } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export const Projectbox = ( {title, description } : {title: string, description: string} ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <p className="font-[600]">{title}</p>
                    <ArrowRight />
                </div>
                <Github/>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className="flex justify-center rounded-md border-[#dddddd] border-[1px] px-3 py-1 bg-white max-w-[120px]">
                <p>Know more</p>
            </div>
        </div>
    )
}