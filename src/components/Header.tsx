import { Bell, ChevronDown, Heart, Mail, Moon, Search, SunMedium } from 'lucide-react'

type HeaderProps = {
  onToggleTheme: () => void
}

export function Header({ onToggleTheme }: HeaderProps) {
  const tabs = ['Live Match', 'Scorecard', 'Commentary', 'Players', 'My Matches']

  return (
    <header className="sticky top-0 z-11 w-full border-b border-[#e7d7b7] bg-[#fbf5e8]/95 backdrop-blur dark:border-white/10 dark:bg-[#1f2a39]/95">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-5">
        <div className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {tabs.map((tab, index) => (
            <button key={tab} className={index === 0 ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <label className="flex w-full max-w-[320px] items-center gap-2 rounded-full border border-[#d9c7a2] bg-white px-4 py-2 text-sm text-slate-500 dark:border-white/15 dark:bg-[#273447] dark:text-slate-300">
          <input
            type="search"
            placeholder="Search Matches, Players, Stats ..."
            className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-400"
          />
          <Search className="shrink-0" size={16} />
        </label>

        <button
          type="button"
          onClick={onToggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a2] bg-white text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:bg-[#273447] dark:text-slate-100 dark:hover:bg-[#314155]"
          aria-label="Toggle theme"
        >
          <Moon className="block dark:hidden" size={18} />
          <SunMedium className="hidden dark:block" size={18} />
        </button>

        <div className="hidden items-center gap-4 text-slate-500 md:flex dark:text-slate-300">
          <Bell size={18} />
          <Mail size={18} />
          <Heart size={18} />
        </div>

        <button className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/60 dark:hover:bg-white/10">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-slate-800">
            <img src="/icons/user.png" alt="Abhimanyu" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm font-medium">Abhimanyu</span>
          <ChevronDown className="text-slate-500 dark:text-slate-300" size={16} />
        </button>
      </div>
    </header>
  )
}
