import { useState } from 'react'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { MatchRow } from './components/MatchRow'
import { Sidebar } from './components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const latestMatches = [
  {
    home: 'Barcelona',
    away: 'Real Madrid',
    homeIcon: '/icons/barcelona.png',
    awayIcon: '/icons/Group 3078.png',
    time: '5:00 PM',
    place: 'Spain',
    live: true,
  },
  { home: 'NY Yorks', away: 'NY Yorks', time: '5:00 PM', place: 'London', live: false },
  { home: 'NY Yorks', away: 'NY Yorks', time: '5:00 PM', place: 'London', live: false },
  { home: 'NY Yorks', away: 'NY Yorks', time: '5:00 PM', place: 'London', live: false },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white text-slate-900 dark:bg-[#0f1723] dark:text-slate-100`}>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex w-full flex-col items-center justify-center pl-8">
          <Header onToggleTheme={() => setDarkMode((value) => !value)} />

          <div className="mx-auto w-[90%] py-4">
            <div className="grid gap-4 lg:grid-cols-[360px_1fr] w-full">
              <aside className="space-y-4">
                <section className="rounded-2xl bg-white/90 p-4 text-slate-900 dark:bg-[#273447] dark:text-slate-100">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">Live Matches</p>
                      <p className="text-xs text-slate-500 dark:text-slate-300">Premier League</p>
                    </div>
                    <div className="flex gap-1 text-slate-400 dark:text-slate-300">
                      <ChevronLeft size={18} />
                      <ChevronRight size={18} className="text-rose-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#ecd9ae] bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#334155]">
                    <div className="flex items-center justify-between">
                      <TeamBadge label="Barcelona" src="/icons/barcelona.png" />
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-300">Premier League</p>
                        <p className="mt-1 text-3xl font-bold">
                          1 : <span className="text-[#f1b500]">2</span>
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-300">40:30</p>
                      </div>
                      <TeamBadge label="Real Madrid" src="/icons/Group 3078.png" accent />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      {['1.8', '2.1', '1.3'].map((odd) => (
                        <div key={odd} className="rounded-xl border border-[#e6d4a6] bg-white py-2 font-medium dark:border-white/10 dark:bg-[#1e293b] dark:text-slate-100">
                          {odd}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <LeagueSection
                      title="La Liga"
                      country="Spain"
                      flag="/icons/flag.png"
                      teams={[
                        { name: 'Liverpool', icon: '/icons/club/liverpool.png' },
                        { name: 'Man United', icon: '/icons/club/manchester.png' },
                        { name: 'Leicester City', icon: '/icons/club/leicester.png' },
                        { name: 'Villareal', icon: '/icons/club/Villareal.png' },
                        { name: 'Villareal', icon: '/icons/club/Villareal.png' },
                      ]}
                    />
                    <LeagueSection
                      title="Premier League"
                      country="England"
                      flag="/icons/flag.png"
                      teams={[
                        { name: 'Liverpool', icon: '/icons/club/liverpool.png' },
                        { name: 'Man United', icon: '/icons/club/manchester.png' },
                        { name: 'Leicester City', icon: '/icons/club/leicester.png' },
                        { name: 'Villareal', icon: '/icons/club/Villareal.png' },
                        { name: 'Villareal', icon: '/icons/club/Villareal.png' },
                      ]}
                    />
                  </div>
                </section>

                <section className="rounded-2xl border border-[#e8d8b4] bg-white/90 p-4 shadow-[0_8px_30px_rgba(146,113,32,0.08)] dark:border-white/10 dark:bg-[#273447] dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-lg font-semibold">Trending Now</p>
                    <div className="flex gap-1 text-slate-400 dark:text-slate-300">
                      <ChevronLeft size={18} />
                      <ChevronRight size={18} />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#ecd9ae] bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#334155]">
                    <div className="flex items-center justify-between">
                      <TeamBadge label="Barcelona" src="/icons/barcelona.png" />
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-300">Premier League</p>
                        <p className="mt-1 text-3xl font-bold">
                          1 : <span className="text-[#f1b500]">2</span>
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-300">40:30</p>
                      </div>
                      <TeamBadge label="Real Madrid" src="/icons/Group 3078.png" accent />
                    </div>
                  </div>
                </section>
              </aside>

              <section className="space-y-4">
                <HeroBanner />

                <div className="rounded-2xl border border-[#e6d39d] bg-white/85 p-4 shadow-[0_8px_30px_rgba(146,113,32,0.08)] dark:border-white/10 dark:bg-[#273447] dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">Latest Matches</h2>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-500 dark:text-slate-300">Filter :</span>
                      <span className="rounded-full border border-[#e6d39d] px-3 py-1 text-xs dark:border-white/15 dark:text-slate-100">Football</span>
                      <span className="rounded-full border border-[#e6d39d] px-3 py-1 text-xs dark:border-white/15 dark:text-slate-100">Anywhere</span>
                      <button className="text-xs font-medium text-slate-500 dark:text-slate-300">View All</button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {latestMatches.map((match) => (
                      <MatchRow key={`${match.home}-${match.away}-${match.time}`} {...match} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function TeamBadge({ label, src, accent = false }: { label: string; src?: string; accent?: boolean }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border bg-white text-xs font-bold ${
        accent ? 'border-amber-400' : 'border-sky-200'
      }`}
      title={label}
      aria-label={label}
    >
      {src ? <img src={src} alt="" className="h-full w-full object-contain p-1" /> : label}
    </div>
  )
}

function LeagueSection({
  title,
  country,
  flag,
  teams,
}: {
  title: string
  country: string
  flag: string
  teams: Array<{ name: string; icon: string }>
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-sm">
          <img src={flag} alt="" className="h-4 w-4 object-contain" />
          <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
          <span className="text-xs text-slate-500 dark:text-slate-300">{country}</span>
        </div>
        <ChevronRight className="text-slate-400 dark:text-slate-300" size={18} />
      </div>

      <div className="rounded-2xl border border-[#ecd9ae] bg-[#fffdf7] p-3 dark:border-white/10 dark:bg-[#334155]">
        <div className="space-y-1 text-xs">
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto_auto] gap-2 rounded-lg bg-white px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-[#1e293b] dark:text-slate-300">
            <span>Team</span>
            <span>D</span>
            <span>L</span>
            <span>Ga</span>
            <span>Gd</span>
            <span>Pts</span>
          </div>
          {teams.map((team, index) => (
            <div
              key={`${team.name}-${index}`}
              className={`grid grid-cols-[1fr_auto_auto_auto_auto_auto] items-center gap-2 rounded-lg px-2 py-1 ${
                index % 2 === 0 ? 'bg-white dark:bg-[#334155]' : 'bg-amber-50/70 dark:bg-[#29384c]'
              }`}
            >
              <span className="flex min-w-0 items-center gap-2 truncate text-slate-800 dark:text-slate-100">
                <img src={team.icon} alt="" className="h-4 w-4 shrink-0 object-contain" />
                <span className="truncate">{team.name}</span>
              </span>
              <span className="text-slate-700 dark:text-slate-200">{6 - index}</span>
              <span className="text-slate-700 dark:text-slate-200">{2 + index}</span>
              <span className="text-slate-700 dark:text-slate-200">{21 - index}</span>
              <span className="text-slate-700 dark:text-slate-200">{16 - index}</span>
              <span className="text-slate-700 dark:text-slate-200">{33 - index * 2}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
