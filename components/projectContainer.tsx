"use client";
import { ArrowRight, Github } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export const Projectbox = ( {title, p1, p2, p3, link } : {title: string, p1: string | null, p2: string | null, p3: string | null, link: string} ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col p-4 my-[18px] hover:bg-slate-200" : "mb-4 flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col py-7 px-[18px] hover:bg-slate-200"}>
            <a href={link} target="_blank">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <p className="font-[600]">{title}</p>
                        <ArrowRight />
                    </div>
                </div>
                <div>
                    <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">{p1}</p>
                    <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">{p2}</p>
                    {p3 && (<p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">{p3}</p>)}
                </div>
                {/* <div className="flex justify-center rounded-md border-[#dddddd] border-[1px] px-3 py-1 bg-white max-w-[120px]">
                    <p>Know more</p>
                </div> */}
            </a>
        </div>
    )
}