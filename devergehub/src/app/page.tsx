import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const approachTabs = [
  "Our Approach",
  "Who This Is For",
  "Why Work With Us",
];

const heroNavItems = ["Home", "About", "Service", "Portfolio", "Blog"];

const approachPoints = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, audience, and goals. What do you want your website to achieve? Who are your ideal visitors? This step ensures your website is built with purpose, not guesswork.",
  },
  {
    title: "Design With Intent",
    description:
      "Every page, every section, and every visual element is designed to guide your audience, communicate your value clearly, and encourage action. Design isn't just aesthetic, it's strategic.",
  },
  {
    title: "Build & Optimize",
    description:
      "We develop responsive, fast, and reliable websites that perform across devices. Functionality, speed, and conversion-focused layouts are built in from day one.",
  },
  {
    title: "Launch & Refine",
    description:
      "Once live, we track user behavior, refine the experience, and optimize performance to ensure your website meets its growth goals.",
  },
];

const showcaseCards = [
  {
    title: "Aero Systems",
    type: "Corporate Website",
    accent: "from-sky-100 via-white to-cyan-100",
  },
  {
    title: "Vowen",
    type: "Lifestyle Magazine",
    accent: "from-stone-100 via-rose-50 to-zinc-100",
  },
  {
    title: "TWCG",
    type: "Construction Brand",
    accent: "from-lime-100 via-emerald-50 to-zinc-200",
  },
  {
    title: "Transit Flow",
    type: "Logistics Platform",
    accent: "from-orange-50 via-white to-slate-100",
  },
  {
    title: "Nest Haven",
    type: "Real Estate UI",
    accent: "from-slate-100 via-sky-50 to-amber-50",
  },
  {
    title: "Bodie",
    type: "Luxury Product Page",
    accent: "from-amber-900 via-stone-800 to-zinc-900",
  },
];

const pricingTiers = [
  {
    code: "LP",
    name: "The Launchpad",
    subtitle:
      "For solopreneurs and small businesses ready to show up online professionally.",
    price: "NGN 150,000",
    priceNote: "(One-Time)",
    features: [
      "High-converting landing page",
      "Mobile-first, responsive design",
      "Contact form + WhatsApp integration",
      "Basic on-page SEO setup",
      "Speed-optimized codebase",
      "2 revision rounds included",
      "Delivered in 7-10 business days",
    ],
    bonusTitle: "Bonus Stack",
    bonus: [
      "Free domain and hosting consultation",
      "30-min website strategy session",
      "Basic Google Analytics setup",
    ],
    cta: "Choose Tier 1",
    featured: false,
  },
  {
    code: "GE",
    name: "The Growth Engine",
    subtitle:
      "For growing businesses needing a stronger digital presence across web apps and e-commerce.",
    price: "NGN 500,000",
    priceNote: "(One-Time)",
    features: [
      "Full custom website or web application",
      "E-commerce or payment integration",
      "CMS integration to manage content easily",
      "Advanced SEO and sitemap setup",
      "Admin dashboard for business owners",
      "3 revision rounds included",
      "30-days post-launch support",
    ],
    bonusTitle: "Bonus Stack",
    bonus: [
      "Maintenance checklist",
      "Search Console verification",
      "Launch consultation for your team",
    ],
    cta: "Choose Tier 2",
    featured: true,
  },
  {
    code: "SS",
    name: "The Scale Suite",
    subtitle:
      "For startups and funded teams that need full-stack digital products built to dominate.",
    price: "NGN 2,000,000",
    priceNote: "(Per Project)",
    features: [
      "Custom mobile app plus web platform",
      "Scalable backend architecture and API",
      "Multi-role authentication and dashboards",
      "Third-party integrations",
      "Full UI and UX design with prototype",
      "Unlimited revisions during build",
      "Dedicated project manager",
    ],
    bonusTitle: "Bonus Stack",
    bonus: [
      "App store submission support",
      "Performance monitoring setup",
      "Analytics and search configuration",
    ],
    cta: "Choose Tier 3",
    featured: false,
  },
];

const trustedStats = [
  { value: "50+", label: "Websites built" },
  { value: "100+", label: "Campaign launched" },
  { value: "5+", label: "Years in business" },
  { value: "3+", label: "Awards" },
];

const testimonials = [
  {
    name: "Engr. Aboje Franci",
    location: "Lagos, Nigeria",
    quote:
      "De-Verge Hub brought our vision to life with a stunning website that exceeded our expectations.",
    date: "30 October 2023",
  },
  {
    name: "Fred Gerard",
    location: "Abuja, Nigeria",
    quote:
      "De-Verge Hub's data analysis insights have been instrumental in informing our business decisions and driving growth.",
    date: "14 January 2024",
  },
  {
    name: "Victor",
    location: "Lagos, Nigeria",
    quote:
      "De-Verge Hub's web services have been instrumental in helping us achieve our business recommendations.",
    date: "3 March 2025",
  },
];

const offerItems = [
  "Full Performance & SEO Infrastructure Audit",
  "Custom UX Strategy & Conversion Roadmap",
  "60-Minute Architecture Sync with Lead Engineer",
];

const consultationFields = [
  { label: "Full Name", placeholder: "Full Name", type: "text" },
  { label: "Phone Number", placeholder: "+234...", type: "tel" },
  { label: "Email Address", placeholder: "Email Address", type: "email" },
  { label: "Company", placeholder: "Enterprise Inc.", type: "text" },
];

const faqItems = [
  {
    question: "How long does it take to launch a website?",
    answer:
      "Every project is unique, but most websites are live within 4-8 weeks. We prioritize speed without compromising strategy, design, or performance.",
  },
  {
    question: "Will my website generate leads?",
    answer:
      "That is the goal. We design pages around clear offers, stronger messaging, and conversion paths that help the right visitors take action.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve the structure, visual system, and performance of an existing site while preserving what still serves the brand well.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support, optimization guidance, and maintenance options depending on the project scope.",
  },
  {
    question: "Is my website mobile-friendly?",
    answer:
      "Absolutely. Every page is built responsively so it feels fast, clear, and polished across phones, tablets, and desktop screens.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. We handle the technical side and can also connect a CMS or admin flow so your team can manage content without writing code.",
  },
  {
    question: "What if I need e-commerce or custom features?",
    answer:
      "We can scope payment flows, dashboards, booking systems, integrations, and other custom features as part of the build.",
  },
  {
    question: "Do I need a big budget?",
    answer:
      "Not necessarily. We offer different investment tiers so businesses can start with the right level of infrastructure and grow over time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <section className="mx-auto w-full max-w-[1440px] bg-[#F2F2F2]">
        <div className="overflow-hidden bg-[#F2F2F2]">
          <section className="bg-[#4b4b4b] px-5 py-8 sm:px-8 lg:px-12 lg:py-9">
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
                    <div>
                      <p className="text-[14px] font-bold tracking-[0.04em] text-[#18c26f]">
                        DE-VERGE
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
                    <nav className="flex flex-wrap items-center gap-5 text-[13px] text-white/80">
                      {heroNavItems.map((item, index) => (
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
                    <span className="text-[#1ed17d]">Elevate</span> Your
                    Business
                  </h1>

                  <p className="mt-5 max-w-[710px] text-[18px] leading-[1.5] text-white/88 sm:text-[20px]">
                    We design, build, and scale custom software solutions for
                    startups, enterprises, and growing businesses.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <button className="inline-flex h-14 items-center justify-center rounded-full bg-[#1daa62] px-8 text-[18px] font-medium text-white transition hover:bg-[#179553]">
                      Schedule A Meeting
                      <span className="ml-3 text-[22px]">→</span>
                    </button>
                    <button className="inline-flex h-14 items-center justify-center rounded-full border border-[#1e9b5c] bg-black/20 px-8 text-[18px] font-medium text-white transition hover:bg-black/35">
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
                      
          <div className="space-y-0 bg-[#F2F2F2]">
            <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[76px]">
              <div className="mx-auto max-w-[900px] text-center">
                <p
                  className={`${montserrat.className} text-[20px] font-semibold leading-none tracking-[0] text-[#1A9E5C] lg:text-[22px]`}
                >
                  What We Do
                </p>
                <h2
                  className={`${montserrat.className} mx-auto mt-3 max-w-[760px] text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#202225] sm:text-[3rem] lg:text-[3.25rem]`}
                >
                  We Understand The Problem
                </h2>
                <div className="mx-auto mt-3 h-[3px] w-[482px] max-w-full bg-[#18A85F]" />
              </div>

              <div className="mx-auto mt-10 grid max-w-[920px] items-start gap-6 lg:grid-cols-[154px_1fr]">
                <div className="space-y-2 pt-1">
                  {approachTabs.map((tab, index) => (
                    <button
                      key={tab}
                      className={`w-full rounded-[8px] px-4 py-[10px] text-center text-[13px] font-medium transition ${
                        index === 0
                          ? "bg-[#1FA15F] text-white shadow-sm"
                          : "bg-[#d7d9ff] text-slate-800 hover:bg-[#cfd2ff]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div>
                  <p className="max-w-[640px] text-[15px] leading-[1.45] text-slate-800">
                    We don&apos;t just &ldquo;build websites.&rdquo; We create
                    digital platforms designed to drive growth, attract the
                    right audience, and convert visitors into loyal customers.
                  </p>

                  <div className="mt-5 space-y-5">
                    {approachPoints.map((point) => (
                      <article key={point.title} className="flex gap-3.5">
                        <div className="mt-[3px] text-[22px] font-bold leading-none text-[#1FA15F]">
                          »
                        </div>
                        <div>
                          <h3 className="text-[14px] font-semibold text-slate-900">
                            {point.title}
                          </h3>
                          <p className="mt-1 max-w-[650px] text-[14px] leading-[1.35] text-slate-800">
                            {point.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-[78px]">
              <div className="mx-auto max-w-[920px]">
                <div className="max-w-[820px]">
                  <p className="text-[18px] font-medium text-[#18A85F]">
                    Websites That Work As A Growth Engine
                  </p>
                  <div className="mt-3 grid gap-6 text-[12px] leading-[1.45] text-slate-700 md:grid-cols-2">
                    <p>
                      You didn&apos;t build a business just to have something
                      online. You built it to grow your business, connect with
                      the right audience, and turn interest into revenue.
                    </p>
                    <p>
                      We know the frustration of investing time and money into a
                      site that looks good but does not convert. This is about
                      building a website that works strategically for your
                      business.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="rounded-[6px] bg-[#18A85F] px-6 py-2.5 text-[11px] font-medium text-white transition hover:bg-[#149953]">
                    Build My Growth Website
                  </button>
                </div>

                <div className="mx-auto mt-8 grid max-w-[760px] gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
                  {showcaseCards.map((card, index) => (
                    <article
                      key={card.title}
                      className={`group overflow-hidden rounded-[8px] border border-slate-200 bg-gradient-to-br ${card.accent} p-[6px] shadow-[0_8px_20px_rgba(12,22,18,0.08)]`}
                    >
                      <div className="flex aspect-[0.78] flex-col overflow-hidden rounded-[6px] border border-white/70 bg-white/85 p-[10px]">
                        <div className="flex items-center justify-between">
                          <div className="h-2 w-14 rounded-full bg-slate-200" />
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-slate-300" />
                            <span className="h-2 w-2 rounded-full bg-slate-300" />
                            <span className="h-2 w-2 rounded-full bg-slate-300" />
                          </div>
                        </div>
                        <div
                          className={`mt-3 flex-1 rounded-[6px] ${
                            index === 2
                              ? "bg-[linear-gradient(160deg,_#0d1511,_#5ba54a_45%,_#f0f68f)]"
                              : index === 5
                                ? "bg-[linear-gradient(160deg,_#2b1c18,_#5b382c_45%,_#e7b878)]"
                                : "bg-[linear-gradient(180deg,_rgba(241,245,249,0.95),_rgba(255,255,255,0.8))]"
                          } p-3`}
                        >
                          <div className="flex h-full flex-col justify-between">
                            <div>
                              <div className="h-2.5 w-16 rounded-full bg-white/80" />
                              <div className="mt-2.5 h-16 rounded-[8px] bg-white/70 shadow-sm" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 w-4/5 rounded-full bg-white/80" />
                              <div className="h-2 w-3/5 rounded-full bg-white/60" />
                              <div className="grid grid-cols-3 gap-2 pt-1">
                                <div className="h-12 rounded-[8px] bg-white/70" />
                                <div className="h-12 rounded-[8px] bg-white/60" />
                                <div className="h-12 rounded-[8px] bg-white/50" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-[11px] font-semibold text-slate-900">
                            {card.title}
                          </p>
                          <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                            {card.type}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-[82px]">
              <div className="mx-auto max-w-[1060px] text-center">
                <p className="text-[18px] font-medium text-[#18A85F]">
                  Deployment Options
                </p>
                <h2 className="mt-1 text-[34px] font-semibold leading-tight text-slate-900 sm:text-[42px]">
                  Investment Tiers.
                </h2>
                <div className="mx-auto mt-2 h-[2px] w-[250px] bg-[#18A85F]" />
                <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-[1.4] text-slate-700">
                  Transparent pricing for technical excellence. Select the node
                  that fits your current growth trajectory.
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-[940px] gap-4 lg:grid-cols-[1fr_1.08fr_1fr]">
                {pricingTiers.map((tier) => (
                  <article
                    key={tier.name}
                    className={`flex h-full flex-col rounded-[12px] border p-4 text-left shadow-[0_12px_30px_rgba(12,22,18,0.08)] lg:min-h-[405px] ${
                      tier.featured
                        ? "border-slate-900 bg-[#131c1f] text-white"
                        : "border-slate-200 bg-white text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-[8px] text-sm font-semibold ${
                          tier.featured
                            ? "bg-white/8 text-emerald-300"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {tier.code}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold">{tier.name}</h3>
                        <p
                          className={`mt-1 text-[10px] leading-[1.45] ${
                            tier.featured ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {tier.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p
                        className={`text-[11px] ${
                          tier.featured ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Starting From
                      </p>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-[32px] font-semibold leading-none text-[#1773C8]">
                          {tier.price}
                        </span>
                        <span
                          className={`pb-1 text-[10px] ${
                            tier.featured ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          {tier.priceNote}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-[11px] font-semibold">What You Get</p>
                      <ul className="mt-3 space-y-2.5">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className={`flex gap-2 text-[10px] leading-[1.45] ${
                              tier.featured ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            <span className="mt-[4px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#18A85F]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`mt-6 rounded-[10px] p-3 ${
                        tier.featured
                          ? "bg-white/8"
                          : tier.name === "The Scale Suite"
                            ? "bg-sky-50"
                            : "bg-emerald-50"
                      }`}
                    >
                      <p className="text-[11px] font-semibold text-[#18A85F]">
                        {tier.bonusTitle}
                      </p>
                      <ul
                        className={`mt-2 space-y-1.5 text-[10px] leading-[1.45] ${
                          tier.featured ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {tier.bonus.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-4 text-[9px] leading-[1.35] text-rose-400">
                      Note: Domain and hosting prices are not included.
                    </p>

                    <button
                      className={`mt-auto rounded-[8px] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] transition ${
                        tier.featured
                          ? "bg-[#18A85F] text-white hover:bg-[#149953]"
                          : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[#0d1621] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-[84px]">
              <div className="mx-auto max-w-[920px]">
                <div>
                  <p className="text-[11px] text-[#1ed17d]">Growth-engineered</p>
                  <h2 className="mt-1 text-[34px] font-medium leading-tight sm:text-[42px]">
                    Your Trusted Digital Partner
                  </h2>
                  <div className="mt-2 h-[2px] w-[244px] bg-[#1ed17d]" />
                  <p className="mt-3 max-w-[680px] text-[12px] leading-[1.45] text-slate-300">
                    We design, market, and optimize digital experiences that
                    help professional service and brands attract customers,
                    convert leads, and scale sustainably.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 border-y border-white/12 py-5 sm:grid-cols-2 lg:grid-cols-4">
                  {trustedStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-white/12 pr-4 lg:border-r last:lg:border-r-0"
                    >
                      <p className="text-[42px] font-semibold leading-none text-[#1ed17d]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[12px] text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-[11px] text-[#1ed17d]">Testimonials</p>
                  <h3 className="mt-1 text-[28px] font-medium sm:text-[38px]">
                    What Our Clients Say
                  </h3>
                  <div className="mt-2 h-[2px] w-[172px] bg-[#1ed17d]" />

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                      <article
                        key={testimonial.name}
                        className="flex min-h-[178px] flex-col rounded-[10px] border border-white/8 bg-[#121f31] p-5 shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
                      >
                        <div>
                          <h4 className="text-[15px] font-medium text-white">
                            {testimonial.name}
                          </h4>
                          <p className="mt-1 text-[10px] text-slate-400">
                            {testimonial.location}
                          </p>
                        </div>
                        <p className="mt-5 flex-1 text-[11px] leading-[1.5] text-slate-300">
                          {testimonial.quote}
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span className="text-[9px] text-slate-500">
                            {testimonial.date}
                          </span>
                          <span className="text-[12px] tracking-[0.2em] text-[#f2c34f]">
                            ★★★★★
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-[32px] font-medium sm:text-[44px]">Our Offer</h3>
                  <div className="mt-2 h-[2px] w-[244px] bg-[#1ed17d]" />
                  <p className="mt-3 max-w-[720px] text-[11px] leading-[1.55] text-slate-300">
                    We don&apos;t just &quot;make websites.&quot; We engineer
                    high-yield digital assets. This offer is a specialized
                    entry-point for brands ready to scale their technical
                    infrastructure.
                  </p>

                  <div className="mt-5 space-y-3">
                    {offerItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-[#67d9a5]/30 bg-[#173246] text-[12px] text-[#9feec5]">
                          ✦
                        </div>
                        <p className="text-[15px] text-slate-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
                  <article className="order-2 rounded-[10px] bg-white p-6 text-center text-slate-900 shadow-[0_24px_45px_rgba(0,0,0,0.2)] lg:order-1 lg:mt-[200px]">
                    <div className="mx-auto grid h-10 w-10 place-items-center rounded-[6px] bg-[#acd8af] text-[18px] text-[#1f7c43]">
                      ✓
                    </div>
                    <h3 className="mt-5 text-[20px] font-semibold text-[#2f8d43]">
                      Request Received!
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.55] text-slate-700">
                      Excellent choice. Our strategy team is reviewing your
                      profile for <span className="font-semibold text-[#2f8d43]">growth</span>{" "}
                      plan.
                    </p>
                    <p className="mt-2 text-[13px] text-slate-800">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </article>

                  <article className="order-1 rounded-[12px] bg-white p-7 text-slate-900 shadow-[0_28px_50px_rgba(0,0,0,0.25)] lg:order-2 lg:mx-auto lg:w-[332px]">
                    <div className="text-center">
                      <h3 className="text-[20px] font-semibold text-[#2f8d43]">
                        Book Your Consultation
                      </h3>
                      <p className="mt-1 text-[13px] font-medium text-slate-700">
                        Let&apos;s Get Your Details
                      </p>
                    </div>

                    <form className="mt-7 space-y-4">
                      {consultationFields.map((field) => (
                        <label key={field.label} className="block">
                          <span className="text-[13px] font-medium text-slate-800">
                            {field.label}
                          </span>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="mt-2 h-[44px] w-full rounded-[12px] border border-slate-300 px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2f8d43] focus:ring-2 focus:ring-[#2f8d43]/15"
                          />
                        </label>
                      ))}

                      <label className="block">
                        <span className="text-[13px] font-medium text-slate-800">
                          Select Tier
                        </span>
                        <select className="mt-2 h-[44px] w-full rounded-[12px] border border-slate-300 bg-white px-4 text-[14px] text-slate-500 outline-none transition focus:border-[#2f8d43] focus:ring-2 focus:ring-[#2f8d43]/15">
                          <option>Select Tier</option>
                          <option>The Launchpad</option>
                          <option>The Growth Engine</option>
                          <option>The Scale Suite</option>
                        </select>
                      </label>

                      <button className="mt-2 h-[44px] w-full rounded-[8px] bg-[#2f8d43] text-[14px] font-semibold text-white transition hover:bg-[#27763a]">
                        Submit
                      </button>
                    </form>
                  </article>
                </div>

                <div className="mx-auto mt-14 max-w-[520px]">
                  <p className="text-[11px] text-[#1ed17d]">
                    Frequently Asked Questions
                  </p>
                  <h3 className="mt-1 text-[30px] font-medium sm:text-[40px]">
                    Answers to Your Questions
                  </h3>
                  <div className="mt-2 h-[2px] w-[250px] bg-[#1ed17d]" />

                  <div className="mt-6 divide-y divide-white/20 border-t border-white/20">
                    {faqItems.map((item, index) => (
                      <details
                        key={item.question}
                        className="group py-3"
                        open={index === 0}
                      >
                        <summary className="flex list-none items-center justify-between gap-4 text-[13px] text-slate-100 marker:content-none">
                          <span>{item.question}</span>
                          <span className="text-[18px] text-slate-400 transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="pr-8 pt-3 text-[11px] leading-[1.45] text-slate-300">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
