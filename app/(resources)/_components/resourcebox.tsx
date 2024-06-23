"use client";

import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const Resourcebox = ( {imgUrl, url, title, description } : {imgUrl: string ,url: string, title: string, description: string} ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={cn("flex w-full max-h-[7rem] hover:bg-slate-100 border-[#dddddd] border-[1px] rounded-lg mt-[25px]", isMobile && "flex-col max-h-full")}>
                <img src={imgUrl} alt="" className={cn("w-[20%] rounded-tl-lg rounded-bl-lg object-cover", isMobile && "w-full max-h-[7rem] rounded-tr-lg rounded-bl-[0px]")}/>
                <div className="px-2 py-2 flex flex-col justify-beteen">
                    <p className="font-medium text-[18px] text-gray-700"> {title} </p>
                    <p className="text-[15px] text-gray-400"> {description} </p>
                </div>
            </div>
        </a>
    )
}