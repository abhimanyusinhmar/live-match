import { ChevronRight, Clock3, Heart, MapPin } from 'lucide-react'

type MatchRowProps = {
  home: string
  away: string
  homeIcon?: string
  awayIcon?: string
  time: string
  place: string
  live: boolean
}

export function MatchRow({ home, away, homeIcon, awayIcon, time, place, live }: MatchRowProps) {
  const activeRow = home === 'Barcelona' && away === 'Real Madrid'

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border px-4 py-3 text-sm shadow-sm ${
        activeRow
          ? 'border-[#e0a700] bg-[#f6bf28] dark:border-[#c89200] dark:bg-[#d9a91c]'
          : 'border-[#eadcb4] bg-white dark:border-white/10 dark:bg-[#334155]'
      }`}
    >
      <div className="flex min-w-0 flex-[1_1_0%] items-center gap-3">
        <TeamMark label={home} src={homeIcon} />
        <span className="truncate font-medium text-slate-800 dark:text-slate-100">{home}</span>
      </div>

      <div className="flex w-10 shrink-0 justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f1f1f] text-[10px] font-bold text-white">
          vs
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_0%] items-center gap-3">
        <TeamMark label={away} src={awayIcon} accent />
        <span className="truncate font-medium text-slate-800 dark:text-slate-100">{away}</span>
      </div>

      <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-slate-700 dark:text-slate-300">
        <Clock3 size={14} className="shrink-0" />
        {time}
      </span>
      <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-slate-700 dark:text-slate-300">
        <MapPin size={14} className="shrink-0" />
        {place}
      </span>
      <span className="flex shrink-0 justify-center">
        <Heart size={18} className={live ? 'fill-red-500 stroke-red-500' : 'stroke-red-500'} />
      </span>
      <button className="ml-auto flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-800 dark:text-slate-100">
        View Details
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

function TeamMark({ label, src, accent = false }: { label: string; src?: string; accent?: boolean }) {
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white text-[10px] font-bold ${
        accent ? 'border-amber-300 text-amber-600' : 'border-slate-200 text-sky-600'
      }`}
      title={label}
      aria-label={label}
    >
      {src ? <img src={src} alt="" className="h-full w-full object-contain p-0.5" /> : label.slice(0, 2).toUpperCase()}
    </div>
  )
}
