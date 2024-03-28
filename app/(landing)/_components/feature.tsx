"use client";

import { Blogbox } from "@/components/blogBox";
import { Projectbox } from "@/components/projectContainer";
import { Workbox } from "@/components/workbox";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export const Feature = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="text-start w-full px-5 bg-white">
            <h1 className="mt-[2rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Projects</h1>
            <div className={isMobile? "block gap-x-5" : "flex gap-5" }>
                <Projectbox title={"Edloops"} description={"An innovative EdTech platform for curating learning materials and building courses..."} link={"https://edloops.com/"} />
                <Projectbox title={"WeJournal"} description={"A collaborative journaling platform enabling solo and paired journaling experiences..."} link={"https://wejournal.vercel.app/"} />
            </div>
            <h1 className="mt-[3rem] text-[1.5rem] leading-9 font-bold mb-7">Work</h1>
            <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                <Workbox />
            </div>
            <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                <h1 className="mt-[2rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Blogs</h1>
                <Link href={"/blogs/Decision-Making-Framework/"}>
                    <Blogbox title="Decision-Making-Framework" description="Irrespective of the decision, the pace at which it is made can significantly determine the success of that decision. I divide the decisions I have to take into two..." />
                </Link>
                <Link href={"/blogs/Why-I-choose-PM-and-later-moved-out/"}>
                    <Blogbox title="Why-I-choose-PM-and-later-moved-out" description="Why I thought Product Management is a fitting role for me but after 9 months of internship I choose to switch..." />
                </Link>
            </div>
        </div>
    )
}