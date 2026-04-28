import { Bell, ChevronDown, Heart, Mail, Search } from 'lucide-react'

export function Header() {
  const tabs = ['Live Match', 'Scorecard', 'Commentary', 'Players', 'My Matches']

  return (
    <header className="sticky top-0 z-10 border-b border-[#e7d7b7] bg-[#fbf5e8]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-5">
        <div className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {tabs.map((tab, index) => (
            <button key={tab} className={index === 0 ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <label className="flex w-full max-w-[320px] items-center gap-2 rounded-full border border-[#d9c7a2] bg-white px-4 py-2 text-sm text-slate-500">
          <input
            type="search"
            placeholder="Search Matches, Players, Stats ..."
            className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
          />
          <Search className="shrink-0" size={16} />
        </label>

        <div className="hidden items-center gap-4 text-slate-500 md:flex">
          <Bell size={18} />
          <Mail size={18} />
          <Heart size={18} />
        </div>

        <button className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/60">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-800 text-xs font-semibold text-white">
            JD
          </div>
          <span className="text-sm font-medium">Jane Doe</span>
          <ChevronDown className="text-slate-500" size={16} />
        </button>
      </div>
    </header>
  )
}
