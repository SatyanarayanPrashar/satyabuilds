import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeading } from "./SectionHeading"
import { Brain, ChevronRight } from "lucide-react"

export const BlogSection = () => {
    return (
        <section className="py-12">
            <SectionHeading icon={Brain} title="Thought Patterns" />
            <div className="flex flex-col gap-4">
                <BlogRow 
                    title="Building reliable multi-agent AI systems"
                    desc="Architecting reliability into non-deterministic systems."
                    slug="/blogs/technical/Building-reliable-multi-agent-AI-systems"
                />
                <BlogRow 
                    title="Context window to full extent"
                    desc="Techniques for compaction and structured notes to maintain coherence."
                    slug="/blogs/technical/Context-window-to-full-extent"
                />
            </div>
        </section>
    )
}

const BlogRow = ({ title, desc, slug }: { title: string, desc: string, slug: string }) => (
    <Link href={slug}>
        <motion.div 
            whileHover={{ x: 5 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-zinc-800/50 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all cursor-pointer"
        >
            <div>
                <h3 className="text-zinc-200 font-medium group-hover:text-indigo-400 transition-colors">{title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{desc}</p>
            </div>
            <ChevronRight className="hidden sm:block text-zinc-600 group-hover:text-zinc-300 transition-colors" size={20} />
        </motion.div>
    </Link>
)