export const SectionHeading = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-zinc-800/50 rounded-lg text-indigo-400 ring-1 ring-zinc-700/50">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">{title}</h2>
  </div>
);