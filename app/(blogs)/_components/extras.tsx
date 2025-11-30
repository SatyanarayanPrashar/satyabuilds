export const QuoteBox = ({ children, author }: { children: React.ReactNode, author?: string }) => (
    <div className="my-8 relative overflow-hidden rounded-r-xl border-l-4 border-indigo-500 bg-zinc-900/50 p-6 shadow-sm">
        <div className="relative z-10 text-lg italic text-zinc-300 font-medium leading-relaxed">
            "{children}"
        </div>
        {author && <div className="mt-3 text-sm font-bold text-indigo-400">- {author}</div>}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent pointer-events-none" />
    </div>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold text-zinc-100 mt-12 mb-4 tracking-tight">
        {children}
    </h2>
);

export const ExternalLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-indigo-400 hover:text-indigo-300 hover:underline underline-offset-4 decoration-indigo-500/30 transition-colors"
    >
        {children}
    </a>
);