"use client";

import { Blogbox } from "@/components/blogBox";
import { Projectbox } from "@/components/projectContainer";
import { Workbox } from "@/components/workbox";
import { Workbox_single } from "@/components/workbox_single";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { DisplayBox } from "@/components/displayBox";
import { WorkCards } from "@/components/listCards";

export const Feature = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [activeStack, setactiveStack] = useState('NextJS') 

    return (
        <div className="text-start w-full px-5 bg-white">
            <DisplayBox>
                <>
                    <h1 className="mt-[3rem] text-[1.5rem] leading-9 font-bold mb-2">Work</h1>
                    <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                        {/* <Workbox /> */}
                        <WorkCards />
                    </div>
                </>
            </DisplayBox>
            <DisplayBox>
                <>
                    <h1 className="mt-[0.5rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Projects</h1>
                    <Projectbox
                        title="Recruto"
                        p1="• Used Selenium to scrape data from other recruitment platform and automated it with Celery"
                        p2="• Cached the API response using a Redis database, which reduces the second call response time by 92.5%"
                        p3="• Techstack consisted of TypeScript, Next JS, Django Rest Framework, Redis and Docker"
                        link="https://github.com/SatyanarayanPrashar/recuto_be"
                    />
                    <Projectbox
                        title={"Edloops"}
                        p1="• Created an innovative edTech platform for curating learning materials and building courses"
                        p2="• Used NextJS for Frontend and implemented Redux for state management"
                        p3="• Built RESTful APIs with Django Rest Framework and deployed the application on EC2, AWS"
                        link={"https://edloops.com/"}
                    />
                    <Projectbox
                        title={"WeJournal"}
                        p1="• A collaborative journaling platform enabling solo and paired journaling experiences"
                        p2="• NextJS, Zustad, Firebase "
                        p3=""
                        link={"https://wejournal.vercel.app/"}
                    />
                </>
            </DisplayBox>
            <DisplayBox>
                <>
                    <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                        <h1 className="mt-[2rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Blogs</h1>
                        <Link href={"/blogs/Decision-Making-Framework/"}>
                            <Blogbox title="Decision-Making-Framework" description="Irrespective of the decision, the pace at which it is made can significantly determine the success of that decision. I divide the decisions I have to take into two..." />
                        </Link>
                        <Link href={"/blogs/Why-I-choose-PM-and-later-moved-out/"}>
                            <Blogbox title="Why-I-choose-PM-and-later-moved-out" description="Why I thought Product Management is a fitting role for me but after 9 months of internship I choose to switch..." />
                        </Link>
                    </div>
                </>
            </DisplayBox>
        </div>
    )
}