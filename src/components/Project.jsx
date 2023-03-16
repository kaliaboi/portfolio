export default function Project({ title, subtitle, image }) {
  return (
    <div className="project cursor-pointer transition-all hover:scale-[101%]">
      <div className="image mb-2 h-80 rounded-md bg-slate-300"></div>
      <div className="title text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {title}
      </div>
      <div className="subtitle text-xs text-zinc-500 dark:text-zinc-400">
        {subtitle}
      </div>
    </div>
  )
}
