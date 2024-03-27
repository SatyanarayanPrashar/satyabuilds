"use client";

import { Projectbox } from "@/components/projectContainer";
import { Workbox } from "@/components/workbox";
import { useMediaQuery } from "usehooks-ts";

export const Feature = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="text-start w-full px-5">
            <h1 className="mt-[2rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Projects</h1>
            <div className={isMobile? "block gap-x-5" : "flex gap-5" }>
                <Projectbox title={"Edloops"} description={"An innovative EdTech platform for curating learning materials and building courses..."} link={"https://edloops.com/"} />
                <Projectbox title={"WeJournal"} description={"A collaborative journaling platform enabling solo and paired journaling experiences..."} link={"https://wejournal.vercel.app/"} />
            </div>
            <h1 className="mt-[3rem] text-[1.5rem] leading-9 font-bold mb-7">Work</h1>
            <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                <Workbox />
            </div>
        </div>
    )
}