"use client";

import { useMediaQuery } from "usehooks-ts";

export const Workbox = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
            <div className="flex gap-3">
                <img src="https://www.treeved.com/footerLogo.png" className="h-[2.7rem] w-[2.7rem] rounded-md bg-white"/>
                <div className="flex flex-col justify-center text-justify">
                    <p className="font-[600]">TreeVed</p>
                    <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[20px]"}>
                        <p className="">Product Management Intern</p>
                        <p>Jan 23-Nov 23 </p>
                    </div>
                    <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">Worked as Product Manager Intern, to build and ship the product. Managed the Frontend, Backend, and Design Team. Worked on Product Roadmap and took crucial descisions on what features to be shipped...</p>
                    <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[20px]"}>
                        <p>Flutter Developer</p>
                        <p>Oct 22-Dec 22 </p>
                    </div>
                    <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">Worked on core product to ship new features and improve existing one. Consistently debugged and fixed the existing code base...</p>
                </div>
            </div>
        </div>
    )
}