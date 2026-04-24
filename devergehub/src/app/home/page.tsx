import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navItems = ["Home", "About", "Service", "Portfolio", "Blog"];

const capabilityCards = [
  {
    title: "Product Design",
    text: "Clear interfaces, usable systems, and brand-aligned digital experiences.",
  },
  {
    title: "Web Engineering",
    text: "Fast marketing sites, dashboards, and scalable web platforms for growth.",
  },
  {
    title: "Launch Support",
    text: "Strategy, optimization, and delivery support so your team ships with confidence.",
  },
];

const stats = [
  { value: "25+", label: "Digital products shipped" },
  { value: "12+", label: "Teams supported" },
  { value: "99%", label: "Client satisfaction" },
];

export default function HomeLandingPage() {
  return (
    <main className="min-h-screen bg-[#4b4b4b] text-white">
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-[1060px]">
          <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-white/55">
            Home
          </p>

          <div className="relative overflow-hidden bg-[#09110d] px-6 py-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:px-8 sm:py-8 lg:min-h-[544px] lg:px-11 lg:py-7">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,10,0.92),rgba(6,17,12,0.72)_55%,rgba(14,76,49,0.45))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_52%,rgba(31,161,95,0.16),transparent_28%),radial-gradient(circle_at_22%_78%,rgba(255,255,255,0.09),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_26%,rgba(0,0,0,0.18)_100%)]" />

            <div className="absolute inset-0 opacity-45">
              <div className="absolute inset-y-0 left-[15%] w-px bg-white/10" />
              <div className="absolute inset-y-0 left-[32%] w-px bg-white/10" />
              <div className="absolute inset-y-0 left-[49%] w-px bg-white/10" />
              <div className="absolute inset-y-0 left-[66%] w-px bg-white/10" />
              <div className="absolute inset-y-0 left-[83%] w-px bg-white/10" />
              <div className="absolute left-0 right-0 top-[18%] h-px bg-white/10" />
              <div className="absolute left-0 right-0 top-[46%] h-px bg-white/10" />
              <div className="absolute left-0 right-0 top-[74%] h-px bg-white/10" />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(8,12,10,0),rgba(8,12,10,0.7)_38%,rgba(8,12,10,0.96))]" />

            <div className="absolute bottom-[10%] left-[6%] h-16 w-24 rounded-[10px] border border-white/8 bg-black/25 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] blur-[0.2px]" />
            <div className="absolute bottom-[11%] left-[25%] h-20 w-28 rounded-[12px] border border-white/8 bg-black/25 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]" />
            <div className="absolute bottom-[12%] left-[48%] h-16 w-24 rounded-[10px] border border-white/8 bg-black/20" />
            <div className="absolute bottom-[14%] right-[17%] h-20 w-32 rounded-[12px] border border-white/8 bg-black/30" />
            <div className="absolute bottom-[16%] right-[5%] h-14 w-16 rounded-[10px] bg-white/8" />

            <div className="absolute bottom-[13%] left-[18%] h-28 w-14 rounded-t-[28px] bg-black/25 blur-[1px]" />
            <div className="absolute bottom-[13%] left-[41%] h-24 w-12 rounded-t-[24px] bg-black/25 blur-[1px]" />
            <div className="absolute bottom-[14%] right-[24%] h-28 w-14 rounded-t-[28px] bg-black/30 blur-[1px]" />
            <div className="absolute bottom-[14%] right-[10%] h-24 w-12 rounded-t-[24px] bg-black/30 blur-[1px]" />

            <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-[10px] border border-[#27c978]/30 bg-[#0a2117]/80 shadow-[0_0_18px_rgba(31,161,95,0.12)]">
                  <div className="grid grid-cols-3 gap-[2px]">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-[5px] w-[5px] rounded-full ${
                          index % 2 === 0 ? "bg-[#1ed17d]" : "bg-[#147b4a]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[14px] font-bold tracking-[0.04em] text-[#18c26f]">
                  DE-VERGE
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
                <nav className="flex flex-wrap items-center gap-5 text-[13px] text-white/80">
                  {navItems.map((item, index) => (
                    <a
                      key={item}
                      href="#"
                      className={`transition hover:text-white ${
                        index === 0 ? "text-[#18c26f]" : ""
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <button className="h-11 rounded-full bg-[#1daa62] px-7 text-[15px] font-medium text-white transition hover:bg-[#179553]">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative z-10 mt-12 max-w-[760px] lg:mt-14 lg:pl-[34px]">
              <h1
                className={`${montserrat.className} max-w-[11ch] text-[3rem] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[4.6rem]`}
              >
                Cutting-Edge Digital Solutions to{" "}
                <span className="text-[#1ed17d]">Elevate</span> Your Business
              </h1>

              <p className="mt-5 max-w-[710px] text-[18px] leading-[1.5] text-white/88 sm:text-[20px]">
                We design, build, and scale custom software solutions for
                startups, enterprises, and growing businesses.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex h-14 items-center justify-center rounded-full bg-[#1daa62] px-8 text-[18px] font-medium text-white transition hover:bg-[#179553]">
                  Schedule A Meeting
                  <span className="ml-3 text-[22px]">-&gt;</span>
                </button>
                <button className="inline-flex h-14 items-center justify-center rounded-full border border-[#1e9b5c] bg-black/20 px-8 text-[18px] font-medium text-white transition hover:bg-black/35">
                  View Our Work
                </button>
              </div>
            </div>
          </div>

          <section className="grid gap-6 bg-[#0d1511] px-6 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#1ed17d]">
                Why De-Verge
              </p>
              <h2 className={`${montserrat.className} mt-3 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]`}>
                A modern digital partner for ambitious teams.
              </h2>
              <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-white/72">
                We help brands move from scattered ideas to polished products,
                clearer positioning, and launch-ready digital systems that can
                support real business growth.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {capabilityCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[18px] border border-white/8 bg-white/4 p-5"
                  >
                    <h3 className="text-[18px] font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-white/68">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[18px] border border-[#1ed17d]/20 bg-[linear-gradient(180deg,rgba(30,209,125,0.08),rgba(255,255,255,0.02))] p-6"
                >
                  <p className="text-[2.4rem] font-bold leading-none text-[#1ed17d]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[14px] text-white/72">{stat.label}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
