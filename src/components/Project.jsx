import Image from 'next/image'
import Link from 'next/link'

export default function Project({ title, subtitle, image, link, comingSoon }) {
  return (
    <Link href={comingSoon ? '/' : link}>
      <div className="project cursor-pointer transition-all hover:scale-[105%]">
        <Image
          src={image}
          className="image mb-2 h-80 rounded-md bg-slate-300 object-cover"
          unoptimized
        />
        <div className="title text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}{' '}
          <span>
            {comingSoon ? (
              <span className="leading-xs ml-2 inline-flex items-center rounded-full bg-orange-200 px-3 py-1 text-xs font-bold uppercase text-orange-700">
                Coming Soon
              </span>
            ) : (
              ''
            )}
          </span>
        </div>
        <div className="subtitle text-xs text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </div>
      </div>
    </Link>
  )
}
