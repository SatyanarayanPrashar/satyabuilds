"use client";

import { useMediaQuery } from "usehooks-ts";

export const Workbox = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="space-y-3">
            <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
                <div className="flex gap-3">
                    <div className="h-[2.7rem] min-w-[2.7rem] rounded-md bg-white flex justify-center items-center"> M </div>
                    <div className="flex flex-col justify-center text-justify">
                        <p className="font-[600]">Monter</p>
                        <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[0px]"}>
                            <p className="">Frontend & UI/UX Developer Intern</p>
                            <p>May 2024 - July 2024 </p>
                        </div>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Built the client facing website using NextJS, enabling investors and companies to share a common platform to
                        expand there portfolio and connection respectively</p>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Optimised the cross-browser compatibility to support screens of all sizes, and integrated APIs with the frontend</p>
                        {/* <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Improved landing page loading time by 40% using Lazy Loading by Dynamic imports</p> */}
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Conducted comprehensive user and competitor analysis to develop seamless UX, and created UI wireframes in
                        Figma utilizing frames and auto-layouts</p>
                    </div>
                </div>
            </div>
            <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
                <div className="flex gap-3">
                    <img src="https://www.treeved.com/footerLogo.png" className="h-[2.7rem] w-[2.7rem] rounded-md bg-white"/>
                    <div className="flex flex-col justify-center text-justify">
                        <p className="font-[600]">TreeVed</p>
                        <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[0px]"}>
                            <p className="">Product Management Intern</p>
                            <p>Jan 23-Nov 23 </p>
                        </div>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Managed a team of size of 9, to build website, enabling people to discover, share and store valuable links,
                        streamlining their internet browsing experience</p>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Led the development team working with NextJS, Django, AWS, and Flutter</p>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Prepared strategy, and road-map for the product based on market research, resources available and vision &
                        mission of the company</p>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Documented and streamlined decision-making process, keeping user and other stakeholders at the forefront,
                        ensuring alignment and transparency throughout the project lifecycle.</p>
                        <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[20px]"}>
                            <p>Flutter Developer</p>
                            <p>Oct 22-Dec 22 </p>
                        </div>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">Worked on core product to ship new features and improve existing one. Consistently debugged and fixed the existing code base...</p>
                    </div>
                </div>
            </div>
            <div className={isMobile ? "flex w-full bg-slate-100 border-[#dddddd] rounded-lg flex-col justify-end p-4 my-[18px] hover:bg-slate-200" : "flex gap-y-3 w-full bg-slate-100 border-[#dddddd] border-[1px] rounded-lg flex-col justify-end py-7 px-[18px] hover:bg-slate-200"}>
                <div className="flex gap-3">
                    <div className="h-[2.7rem] min-w-[2.7rem] rounded-md bg-white flex justify-center items-center"> F </div>
                    <div className="flex flex-col justify-center text-justify">
                        <p className="font-[600]">Fise Technologies</p>
                        <div className={isMobile ? "flex flex-col text-[#4D4D4D] font-[500] mt-[20px]" :"flex justify-between text-[#4D4D4D] font-[500] mt-[0px]"}>
                            <p className="">Flutter Developer Intern</p>
                            <p>July 2022 - Oct 2022 </p>
                        </div>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Developed a cross platform application using Flutter Frame Work, enabling retail investors to invest in equity
                        and commodities like digital gold while saving in day to day life</p>
                        <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">• Improved loading time by 50% by caching images on client devices, supported debugging and testing through
                        out the development process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}