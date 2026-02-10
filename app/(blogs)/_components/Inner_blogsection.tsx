import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ChevronRight } from "lucide-react"

// 1. Define the shape of a single blog post
export interface BlogPost {
    title: string;
    desc: string;
    slug: string;
}

// 2. Define the props for the Section component
interface BlogSectionProps {
    title: string;
    icon?: LucideIcon; // Icon is optional
    blogs: BlogPost[];
}

export const BlogSection = ({ title, icon, blogs }: BlogSectionProps) => {
    return (
        <section className="py-12">
            <p className="pb-2 text-sm text-gray-500">Read more</p>
            
            <div className="flex flex-col gap-4">
                {blogs.map((blog, index) => (
                    <BlogRow 
                        key={index}
                        title={blog.title}
                        desc={blog.desc}
                        slug={blog.slug}
                    />
                ))}
            </div>
        </section>
    )
}

const BlogRow = ({ title, desc, slug }: BlogPost) => (
    <Link href={slug}>
        <motion.div 
            whileHover={{ x: 5 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl 
                       border border-zinc-200 dark:border-zinc-800/50 
                       hover:border-zinc-300 dark:hover:border-zinc-700 
                       bg-zinc-50 dark:bg-zinc-900/30 
                       hover:bg-zinc-100 dark:hover:bg-zinc-800/50 
                       transition-all cursor-pointer"
        >
            <div>
                <h3 className="text-zinc-800 dark:text-zinc-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm mt-1">
                    {desc}
                </p>
            </div>
            <ChevronRight className="hidden sm:block text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" size={20} />
        </motion.div>
    </Link>
)