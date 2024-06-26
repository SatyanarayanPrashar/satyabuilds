"use client";

import { useMediaQuery } from "usehooks-ts";

export const Workbox_single = ({logoURL, title, dates, role, description} : {logoURL: string, title: string, dates: string, role: string, description: string}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
            <div className="flex gap-3">
                {logoURL ?
                    <img src={logoURL} className="h-[2.7rem] w-[2.7rem] rounded-md bg-white"/>
                    :
                    <div className="h-[2.7rem] w-[2.7rem] rounded-md bg-white flex justify-center items-center"> {title[0]} </div>
                }
                <div className="flex flex-col justify-center text-justify">
                    <p className="font-[600]">{title}</p>
                    <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[0px]"}>
                        <p className="">{role}</p>
                        <p>{dates}</p>
                    </div>
                    <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">{description}</p>
                </div>
            </div>
        </div>
    )
}