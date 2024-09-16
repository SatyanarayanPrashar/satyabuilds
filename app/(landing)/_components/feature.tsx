"use client";

import { Blogbox } from "@/components/blogBox";
import { Projectbox } from "@/components/projectContainer";
import { Workbox } from "@/components/workbox";
import { Workbox_single } from "@/components/workbox_single";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

export const Feature = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [activeStack, setactiveStack] = useState('NextJS') 

    return (
        <div className="text-start w-full px-5 bg-white">
            <motion.div
            initial={{ opacity: 0, paddingTop: "20px" }}
            whileInView={{ opacity: 1, paddingTop: "0px" }}
            transition={{ ease: "linear", duration: 0.3 }}
            viewport={{ margin: "-100px" }}
            >
                <>
                    <h1 className="mt-[0.5rem] text-[1.5rem] leading-9 font-bold mb-7">Featured Projects</h1>
                    {/* <div className="flex gap-3 mb-3">
                        <div
                            role="button"
                            onClick={() => setactiveStack('NextJS')}
                            className={`items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100 ${activeStack === 'NextJS' ? 'bg-slate-100' : ''}`}
                        > NextJS
                        </div>
                        <div
                            role="button"
                            onClick={() => setactiveStack('Django')}
                            className={`items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100 ${activeStack === 'Django' ? 'bg-slate-100' : ''}`}
                        > Django
                        </div>
                        <div
                            role="button"
                            onClick={() => setactiveStack('Flutter')}
                            className={`items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100 ${activeStack === 'Flutter' ? 'bg-slate-100' : ''}`}
                        > Flutter
                        </div>
                    </div> */}
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
                    {/* <div className={ activeStack == 'NextJS' ? isMobile? "block gap-x-5" : "flex gap-5" : "hidden"}> */}
                    {/* </div>
                    <div className={ activeStack == 'Django' ? isMobile? "block gap-x-5" : "flex gap-5" : "hidden"}>
                        <Projectbox title={"Edloops BE"} description={"An innovative EdTech platform for curating learning materials and building courses, built with Django Rest FrameWork and deployed AWS EC2 Instance..."} link={"https://github.com/SatyanarayanPrashar/bucket"} />
                    </div>
                    <div className={ activeStack == 'Flutter' ? isMobile? "block gap-x-5" : "flex gap-5" : "hidden"}>
                        <Projectbox title={"Get It"} description={"An App for college students whose institute is located at outskirts of cities where services like Zepto, Danzo etc doesn't operate..."} link={"https://github.com/SatyanarayanPrashar/project-Get-it"} />
                        <Projectbox title={"Social Media App"} description={"A simple social media application built with Flutter, and Firebase..."} link={"https://github.com/SatyanarayanPrashar/Social_Media-app"} />
                    </div> */}
                </>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, paddingTop: "20px" }}
            whileInView={{ opacity: 1, paddingTop: "0px" }}
            transition={{ ease: "linear", duration: 0.3 }}
            viewport={{ margin: "-100px" }}
            >
                <>
                    <h1 className="mt-[3rem] text-[1.5rem] leading-9 font-bold mb-7">Work</h1>
                    <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                        <Workbox />
                    </div>
                </>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, paddingTop: "20px" }}
            whileInView={{ opacity: 1, paddingTop: "0px" }}
            transition={{ ease: "linear", duration: 0.2 }}
            viewport={{ margin: "-100px" }}
            >
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
            </motion.div>

        </div>
    )
}