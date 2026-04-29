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
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#e7c76f] bg-[#f8c82d] px-4 py-4 text-sm shadow-sm">
      <TeamMark label={home} src={homeIcon} />
      <span className="min-w-0 flex-1 truncate font-medium text-[#5a4300]">{home}</span>
      <span className="text-slate-900">vs</span>
      <TeamMark label={away} src={awayIcon} accent />
      <span className="min-w-0 flex-1 truncate font-medium text-[#5a4300]">{away}</span>
      <span>o {time}</span>
      <span>o {place}</span>
      <span className="text-lg text-red-600">{live ? 'x' : 'o'}</span>
      <button className="text-sm font-medium text-slate-800">View Details -&gt;</button>
    </div>
  )
}

function TeamMark({ label, src, accent = false }: { label: string; src?: string; accent?: boolean }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border bg-white text-[10px] font-bold ${
        accent ? 'border-amber-300 text-amber-600' : 'border-slate-200 text-sky-600'
      }`}
      title={label}
      aria-label={label}
    >
      {src ? <img src={src} alt="" className="h-full w-full object-contain p-0.5" /> : label.slice(0, 2).toUpperCase()}
    </div>
  )
}
