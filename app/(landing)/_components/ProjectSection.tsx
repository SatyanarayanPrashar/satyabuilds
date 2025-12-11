import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Cpu } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
    return (
        <section className="py-12">
            <SectionHeading icon={Cpu} title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard
                    title="Customer Support Agent"
                    desc="A multi-agent system using LangGraph, employing a Supervisor-Worker pattern for Customer Support."
                    tags={["LangGraph", "RAG", "MongoDB", "FastAPI"]}
                    link="https://github.com/SatyanarayanPrashar/customer-support-agent/"
                />
                <ProjectCard
                    title="Docarite"
                    desc="AI-powered GitHub PR reviewer using LangGraph. Automates code review to catch critical bugs early."
                    tags={["LangGraph", "Django", "AWS", "Next.js"]}
                    link="https://docarite.com/"
                />
                <ProjectCard
                    title="Edloops"
                    desc="Agentic learning platform. Researchs, structures, and curates personalized learning paths based on psychometrics."
                    tags={["Next.js", "LangChain", "Redux", "PostgreSQL"]}
                    link="https://edloops.com/"
                />
            </div>
        </section>
    );
};

const ProjectCard = ({ title, desc, tags, link }: { title: string, desc: string, tags: string[], link: string }) => (
    <Link href={link} target="_blank">
        <SpotlightCard className="h-full p-6 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
                <ExternalLink size={16} className="text-zinc-500" />
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map(tag => <TechBadge key={tag}>{tag}</TechBadge>)}
            </div>
        </SpotlightCard>
    </Link>
);

const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
      {children}
    </span>
);

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-zinc-800 bg-zinc-900/50 overflow-hidden rounded-xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(120, 119, 198, 0.15),
                transparent 80%
              )
            `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};