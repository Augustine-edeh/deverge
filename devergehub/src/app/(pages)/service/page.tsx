"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serviceCards = [
  {
    title: "Software development",
    color: "bg-emerald-500",
    icon: <CodeIcon />,
    items: [
      "Custom application development",
      "Mobile app development (iOS/Android)",
      "Web application development",
      "API integration and development",
    ],
  },
  {
    title: "Data Analysis",
    color: "bg-rose-600",
    icon: <ChartIcon />,
    items: [
      "Data analysis and reporting",
      "Data visualization",
      "Data management",
      "Business intelligence (BI) solutions",
    ],
  },
  {
    title: "UI/UX Design",
    color: "bg-amber-700",
    icon: <HeadsetIcon />,
    items: [
      "Prototyping and wireframing",
      "User experience (UX) optimization",
      "Design System",
      "User interface (UI) design",
    ],
  },
  {
    title: "Digital Marketing",
    color: "bg-violet-600",
    icon: <ChatIcon />,
    items: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Content and Email Marketing",
    ],
  },
  {
    title: "Brand Identity",
    color: "bg-blue-600",
    icon: <BadgeIcon />,
    items: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Brand Positioning",
    ],
  },
  {
    title: "Conversion UI",
    color: "bg-yellow-700",
    icon: <LayoutIcon />,
    items: [
      "Predictive Pathfinding",
      "Visual Hierarchy Audit",
      "Zero-Friction Forms",
      "Micro-Interaction Loops",
    ],
  },
];

const pricingTiers = [
  {
    title: "The Launchpad",
    price: "₦150,000",
    suffix: "(One-Time)",
    theme:
      "border-transparent bg-[#f8f8f6] text-[#111827] shadow-[0_24px_60px_rgba(0,0,0,0.14)]",
    accent: "text-emerald-600",
    iconBox: "bg-emerald-100 text-emerald-600",
    button: "bg-emerald-600 text-white hover:bg-emerald-500",
    bonus: "bg-emerald-50 text-emerald-800",
    features: [
      "High-converting landing page",
      "Mobile-first, responsive design",
      "Contact form + WhatsApp integration",
      "Basic on-page SEO setup",
      "Speed-optimised codebase",
      "2 revision rounds included",
      "Delivered in __ business days",
    ],
    bonusItems: [
      "Free Domain/Hosting consultation for best practices",
      "30-min Website Strategy Session",
      "Basic Google Analytics setup",
    ],
    note: "Note: Domain and Hosting prices are not included",
  },
  {
    title: "The Growth Engine",
    price: "₦500,000",
    suffix: "(One-Time)",
    theme:
      "border-white/20 bg-[#0b1318] text-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]",
    accent: "text-white",
    iconBox: "bg-white/10 text-white",
    button: "border border-emerald-500/60 bg-transparent text-emerald-300 hover:bg-emerald-500/10",
    bonus: "bg-white/5 text-white/80",
    features: [
      "Full custom website or web application",
      "E-commerce store with payment integration (Paystack/Flutterwave)",
      "CMS integration to manage your content easily",
      "Advanced SEO + sitemap setup",
      "Admin dashboard for business owners",
      "3 revision rounds included",
      "30-days post-launch support",
    ],
    bonusItems: [
      "Lightweight analytics dashboard",
      "Conversion-focused content structure",
      "Launch checklist and QA review",
    ],
    note: "Optional monthly care plans available after launch",
  },
  {
    title: "The Scale Suite",
    price: "₦2,000,000",
    suffix: "(Per Project)",
    theme:
      "border-transparent bg-[#fbfbfb] text-[#111827] shadow-[0_24px_60px_rgba(0,0,0,0.14)]",
    accent: "text-sky-700",
    iconBox: "bg-sky-100 text-sky-700",
    button: "bg-sky-100 text-sky-700 hover:bg-sky-200",
    bonus: "bg-sky-50 text-sky-800",
    features: [
      "Custom mobile app (iOS & Android) + web platform",
      "Scalable backend architecture & API",
      "Multi-role user authentication & dashboards",
      "Third-party API & system integrations",
      "Full UI/UX design with prototype",
      "Unlimited revisions during building",
      "90-days post-launch support & maintenance",
    ],
    bonusItems: [
      "Discovery workshop with roadmap",
      "Dedicated project coordination",
      "Performance tuning and handoff docs",
    ],
    note: "Built for serious product teams and funded growth stages",
  },
];

const faqs = [
  {
    question: "How long does it take to launch a website?",
    answer:
      "Every project is unique, but most websites are live within 4-8 weeks. We prioritize speed without compromising strategy, design, or performance.",
  },
  { question: "Will my website generate leads?" },
  { question: "Can you redesign an existing website?" },
  { question: "Do you provide ongoing support after launch?" },
  { question: "Is my website mobile-friendly?" },
  { question: "Do I need to know how to code?" },
  { question: "What if I need e-commerce or custom features?" },
  { question: "Do I need a big budget?" },
];

function SectionTitle({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-14 bg-emerald-500/70" />
      <span>{children}</span>
      <span className="h-px w-14 bg-emerald-500/70" />
    </div>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="#pricing"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#pricing"
      className={`inline-flex items-center justify-center rounded-full border border-emerald-500/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500/10 ${className}`}
    >
      {children}
    </a>
  );
}

export default function ServicePage() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-[#071115] text-white`}>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,#0b1718_0%,#071115_100%)]">
        <div className="relative mx-auto max-w-7xl px-6 pt-2 md:px-10 lg:px-12">
          <SiteNavbar />

          <div className="grid items-center sm:items-start gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-lg leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
                Our Service
              </h1>

              <p className="mt-6 max-w- 2xl text-sm leading-8 text-white/78 md:text-[1.9rem] md:leading-[1.22]">
                From concept to launch, we&apos;re dedicated to turning your vision into
                a digital reality. Discover our core services and how we ensure the
                success of every project
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton>
                  Schedule A Meeting
                  <ArrowIcon />
                </PrimaryButton>
<SecondaryButton className="bg-[linear-gradient(122.98deg,rgba(1,8,5,0.8)_35.64%,rgba(30,98,64,0.8)_129.95%)] text-white">
                  See Pricing
                </SecondaryButton>{" "}              </div>
            </div>

            <div className="mx-auto grid w-full max-w-[22rem] gap-6 sm:max-w-[26rem] sm:grid-cols-2">
              <div className="rounded-[1.55rem] border border-cyan-500/60 bg-[#0d1820] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:translate-y-8">
                <p className="text-[0.62rem] uppercase tracking-[0.38em] text-cyan-300">
                  Delivery Model
                </p>
                <h3 className="mt-2 text-[2rem] font-medium leading-none text-white">
                  End-to-End
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  From prototype to scaling,
                  <br />
                  every layer is designed for startups, SaaS and digital ventures.
                </p>
              </div>

              <div className="rounded-[1.55rem] border border-fuchsia-500/60 bg-[#16101e] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:translate-y-24">
  
  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-fuchsia-300">
    Growth Layer
  </p>

  <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight text-white">
    Data + Brand
  </h3>

  <p className="mt-3 text-sm leading-6 text-white/70">
    Insight-driven decisions, memorable identity systems
    and campaigns built to convert.
  </p>

</div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="bg-[#071115] px-6 py-10 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1346px]">
          <SectionTitle centered>What We Offer</SectionTitle>
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight text-white md:text-[3rem]">
            Services engineered for modern
            <br className="hidden md:block" /> digital ventures
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.65rem] border border-white/30 bg-[#091317] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
              >
                <div className={`inline-flex rounded-xl p-3 text-white ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="mt-5 text-[1.7rem] font-semibold text-white">
                  {service.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#071115] px-6 py-14 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1346px]">
          <div className="text-center">
            <p className="text-xl font-semibold text-emerald-400">Deployment Options</p>
            <h2 className="mt-2 text-4xl font-extrabold text-white md:text-[3rem]">
              Investment Tiers.
            </h2>
            <div className="mx-auto mt-3 h-px w-72 bg-emerald-500/70" />
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/76">
              Transparent pricing for technical excellence. Select the node that
              fits your current growth trajectory.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
            {pricingTiers.map((tier, index) => (
              <article
                key={tier.title}
                className={`rounded-[1.2rem] border p-5 ${tier.theme} ${
                  index === 1 ? "lg:translate-y-5" : ""
                }`}
              >
                <div className={`inline-flex rounded-lg p-3 ${tier.iconBox}`}>
                  {index === 0 ? <RocketIcon /> : index === 1 ? <DocumentChartIcon /> : <ScaleIcon />}
                </div>

                <h3 className="mt-4 text-[1.9rem] font-semibold">{tier.title}</h3>
                <p className="mt-2 text-sm leading-6 opacity-80">
                  {index === 0 &&
                    "For solopreneurs & small businesses ready to show up online professionally."}
                  {index === 1 &&
                    "For growing businesses needing a powerful digital presence - web apps, e-commerce & full websites."}
                  {index === 2 &&
                    "For enterprises & funded startups that need full-stack digital products built to dominate."}
                </p>

                <div className="mt-5">
                  <p className="text-[2rem] font-extrabold leading-none">
                    <span className={tier.accent}>{tier.price}</span>{" "}
                    <span className="text-sm font-medium opacity-60">{tier.suffix}</span>
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-80">
                    What They Get
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-1 text-emerald-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-5 rounded-2xl p-4 text-sm leading-6 ${tier.bonus}`}>
                  <p className="font-semibold uppercase tracking-[0.14em]">Bonus Stack</p>
                  <ul className="mt-2 space-y-1.5">
                    {tier.bonusItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-xs opacity-65">{tier.note}</p>

                <button
                  type="button"
                  className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${tier.button}`}
                >
                  {index === 0 ? "Choose Tier 1" : index === 1 ? "Choose Tier 2" : "Choose Tier 3"}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#091216] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-emerald-400">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-4xl font-medium text-white md:text-[3rem]">
            Answers to Your Questions
          </h2>
          <div className="mt-3 h-px w-80 bg-emerald-500/70" />

          <div className="mt-6">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-white/30">
                <div
                  className={`flex items-center justify-between gap-4 px-4 py-4 ${
                    index === 0 ? "bg-white/10" : ""
                  }`}
                >
                  <h3 className="text-base font-medium text-white">{faq.question}</h3>
                  <span className="text-2xl text-white/70">{index === 0 ? "−" : "+"}</span>
                </div>
                {faq.answer ? (
                  <div className="px-4 pb-5 text-sm leading-7 text-white/72">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

            <SiteFooter />
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 9h6" />
      <path d="M9 13h4" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17V9" />
      <path d="M12 17V5" />
      <path d="M17 17v-4" />
      <path d="M4 19h16" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 13a8 8 0 1 1 16 0" />
      <rect x="4" y="12" width="4" height="6" rx="2" />
      <rect x="16" y="12" width="4" height="6" rx="2" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 7h12a2 2 0 0 1 2 2v7l-4-2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <path d="M8 11h6" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
      <path d="m9.5 12 1.5 1.5 3.5-3.5" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="8" height="6" rx="2" />
      <rect x="13" y="14" width="8" height="6" rx="2" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 19c2-5 6-9 11-11 1.5 3.5.5 8.5-3 12-3 .5-6 0-8-1Z" />
      <path d="m9 15-4 4" />
      <path d="M14 10h.01" />
    </svg>
  );
}

function DocumentChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3h8l3 3v15H5V3h3Z" />
      <path d="M8 13h2" />
      <path d="M8 17h8" />
      <path d="m11 12 2 2 3-4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v16" />
      <path d="M7 7h10" />
      <path d="m7 7-3 5h6l-3-5Z" />
      <path d="m17 7-3 5h6l-3-5Z" />
      <path d="M8 20h8" />
    </svg>
  );
}


