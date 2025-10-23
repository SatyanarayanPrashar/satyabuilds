"use client";

import { Projectbox } from "@/components/projectContainer";
import { useMediaQuery } from "usehooks-ts";
import { DisplayBox } from "@/components/displayBox";
import { WorkCards } from "@/components/listCards";
import Link from "next/link";

export const Feature = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="text-start w-full px-5 bg-white">
            <DisplayBox>
                <>
                    <h1 className="mt-[3rem] text-[1.5rem] leading-9 font-semibold mb-2 text-[#141413]">Work</h1>
                    <div className={isMobile? "block gap-x-5" : "flex flex-col gap-5" }>
                        <WorkCards />
                    </div>
                </>
            </DisplayBox>
            <DisplayBox>
                <>
                    <h1 className="mt-[0.5rem] text-[1.5rem] leading-9 font-semibold mb-2 text-[#141413]">Blogs</h1>
                    {/* <Link href={"/blogs/technical/Transformers-Explained"} className="hover:bg-gray-200 mt-10 p-2 rounded-xl">
                        <p className="text-xl font-medium">Transformers Explained</p>
                        <p className="text-md text-gray-500">Understanding what are transformers, why we needed them, and how do they do what they do..</p>
                        </Link> */}
                    <Link
                        href={"/blogs/technical/Building-reliable-multi-agent-AI-systems"}
                        className="p-1 sm:p-4 flex flex-col hover:bg-slate-100 hover:border-[#dddddd] rounded-lg cursor-pointer"
                    >
                        <p className="text-xl font-medium">Building reliable multi-agent AI systems</p>
                        <p className="text-md text-gray-500">In this blog I have covered what it takes to build a reliable multi-agent systems...</p>
                    </Link>
                    <Link
                        href={"/blogs/technical/Context-window-to-full-extent"}
                        className="p-1 sm:p-4 flex flex-col hover:bg-slate-100 hover:border-[#dddddd] rounded-lg cursor-pointer"
                    >
                        <p className="text-xl font-medium">Context window to full extent</p>
                        <p className="text-md text-gray-500">This blog covers techniques for building efficient agentic AI—RAG, compaction, structured notes, and sub-agents to manage context, reduce overload, and maintain long-term coherence.</p>
                    </Link>
                </>
            </DisplayBox>
            <DisplayBox>
                <>
                    <h1 className="mt-[0.5rem] text-[1.5rem] leading-9 font-semibold mb-7 text-[#141413]">Featured Projects</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <Projectbox
                            title={"Docarite"}
                            description="An AI-powered GitHub PR reviewer that automates code review, reducing review time and catching critical bugs earlier in the development cycle."
                            link={"https://docarite.com/"}
                            techStack={["LLM", "Langgraph", "Langfuse", "Python", "TypeScript", "Django", "Next JS", "PostgreSQL", "Docker", "AWS", "Tailwind"]}
                        />
                        <Projectbox
                            title={"Edloops"}
                            description="A platform to build personalised courses based on your needs. The Agentic system researches, structures, curates content and build quizzes into a comprehensive learning path and adapts to your progress."
                            link={"https://edloops.com/"}
                            techStack={["TypeScript", "Next.js", "Langchain", "LLM", "PostgreSQL", "Tailwind", "Redux", "Prisma"]}
                        />
                        {/* <Projectbox
                            title={"Recruto"}
                            description="• Used Selenium to scrape data from other recruitment platform and automated it with Celery"
                            link={""}
                            techStack={[]}
                        />
                        <Projectbox
                            title={"WeJournal"}
                            description="• A collaborative journaling platform enabling solo and paired journaling experiences"
                            link={"https://wejournal.vercel.app/"}
                            techStack={[]}
                        /> */}
                    </div>
                </>
            </DisplayBox>
        </div>
    )
}