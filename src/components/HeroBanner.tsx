import { Clock3, MapPin } from 'lucide-react'

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#F3B91A] text-white shadow-[0_8px_30px_rgba(146,113,32,0.14)] dark:bg-[#25384d]">
      <img
        src="/images/shape.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[46%] object-cover opacity-95 lg:block dark:opacity-75"
      />

      <div className="relative">
        <img
          src="/images/man.png"
          alt="Football player"
          className="pointer-events-none absolute -bottom-5 left-0 z-10 hidden h-61.25 w-auto object-contain drop-shadow-[0_16px_25px_rgba(0,0,0,0.22)] lg:block"
        />

        <div className="relative grid min-h-62 lg:grid-cols-[1fr_300px]">
          <div className="flex items-center px-6 py-7 pl-24 lg:px-8 lg:pl-41.25">
            <div className="w-full space-y-4">
              <div className="space-y-1">
                <p className="text-xl font-bold leading-none tracking-tight lg:text-3xl">BARCELONA</p>
                <div className="relative ml-9 h-6 w-16 lg:ml-24 mt-3">
                  <span className="absolute left-0 top-2 h-px w-7 rotate-[-30deg] bg-black/70 dark:bg-white/70" />
                  <span className="absolute left-5 top-2 h-px w-7 rotate-[-30deg] bg-black/70 dark:bg-white/70" />
                </div>
                <p className="text-end text-xl font-bold leading-none tracking-tight lg:text-3xl">REAL MARDID</p>
              </div>

              <div className="flex items-center justify-center gap-5 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <TeamMark label="B" />
                  <span>vs</span>
                  <TeamMark label="R" accent />
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 text-sm">
                <span className="flex items-center gap-2">
                  <Clock3 size={14} className="shrink-0" />
                  5:00 PM
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" />
                  Spain
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center px-6 py-8 text-center">
            <div className="relative z-10">
              <p className="text-2xl font-semibold leading-tight">Up To $50</p>
              <p className="text-2xl font-semibold leading-tight">Free Matched</p>
              <button className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#e0a700]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamMark({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold ${
        accent ? 'border-white/40 bg-white/95 text-[#e0a700]' : 'border-white/40 bg-white/10 text-white'
      }`}
    >
      {label}
    </span>
  )
}
