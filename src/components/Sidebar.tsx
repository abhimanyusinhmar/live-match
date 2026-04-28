import {
  BarChart3,
  CircleDot,
  Dumbbell,
  Goal,
  LayoutGrid,
  Shirt,
  Users,
  Volleyball,
  type LucideIcon,
} from 'lucide-react'

const items: LucideIcon[] = [LayoutGrid, Users, BarChart3, Goal, Shirt, Dumbbell, Volleyball, CircleDot]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-18 flex-col items-center border-r border-[#e7d7b7] bg-[#fbf5e8] py-4">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2be2e] text-white shadow-sm">
        <LayoutGrid size={18} strokeWidth={2.2} />
      </div>

      <nav className="flex flex-1 flex-col items-center gap-3">
        {items.map((Icon, index) => (
          <div key={index} className="relative flex items-center">
            {index === 3 ? <span className="absolute -left-4 h-8 w-1 rounded-r-full bg-rose-500" /> : null}
            <button
              className={
                index === 3
                  ? 'flex h-9 w-9 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm'
                  : 'flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-white'
              }
              aria-label={`sidebar-${index}`}
            >
              <Icon size={18} strokeWidth={2.1} />
            </button>
          </div>
        ))}
      </nav>

      <button className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#f2be2e] text-xl text-white shadow-lg shadow-amber-300/40">
        +
      </button>
    </aside>
  )
}
