"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const projects = [
  {
    title: "Branding identity for GoogleBranding",
    category: "Branding",
    tags: ["Adobe Creative Suite", "Figma", "Photoshop"],
    image: "/images/portfolio-img1.png",
  },
  {
    title: "Custom CRM Development",
    category: "Web Development",
    tags: ["My SQL", "Laravel", "Node.Js"],
    image: "/images/portfolio-img2.png",
  },
  {
    title: "Mobile App for FitTrack",
    category: "Mobile Development",
    tags: ["React Native", "Fire Base", "Redux"],
    image: "/images/portfolio-img3.png",
  },
  {
    title: "SEO Optimization for Soel",
    category: "Digital Marketing",
    tags: ["SEM rush", "Ahrefs", "Google Analytic"],
    image: "/images/portfolio-img4.png",
  },
  {
    title: "Marketing Campaign for ABC",
    category: "Digital Marketing",
    tags: ["Google Analytic", "Facebook Aids", "MailChimp"],
    image: "/images/portfolio-img5.png",
  },
  {
    title: "E-commerce Website for Corp",
    category: "Web Development",
    tags: ["React", "Mongo DB", "Node.Js"],
    image: "/images/portfolio-img6.png",
  },
];

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="#projects"
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
      href="#projects"
      className={`inline-flex items-center justify-center rounded-full border border-emerald-500/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500/10 ${className}`}
    >
      {children}
    </a>
  );
}

export default function PortfolioPage() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-[#071115] text-white`}>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),linear-gradient(180deg,#0b1718_0%,#071115_100%)]">
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
         <SiteNavbar />
          <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-18">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-medium leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
                Our Work Speaks
                <br />
                for Itself
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-[1.8rem] md:leading-[1.22]">
                Our Work Speaks for Itself Explore the digital products and
                platforms we&apos;ve built, designed to solve real problems and drive
                impact across industries.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton>
                  Schedule A Meeting
                  <ArrowIcon />
                </PrimaryButton>
                <SecondaryButton>View Our Work</SecondaryButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[21rem] rounded-[1.8rem] border border-cyan-500/25 bg-white/5 p-4 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-sm sm:max-w-[22rem]">
              <div className="absolute -left-3 top-4 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl" />
              <div className="absolute -bottom-2 right-0 h-20 w-20 rounded-full bg-fuchsia-500/25 blur-2xl" />

              <div className="rounded-[1.25rem] border border-white/10 bg-[#14203a] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.35em] text-white/55">
                  Stack
                </p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-[1.85rem] font-medium text-white">
                    Design &amp; Development
                  </h3>
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                    <CubeIcon />
                  </div>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.15rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.32em] text-white/70">
                    Specialty
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Developing innovative software products, dashboards, and
                    high-performance digital platforms.
                  </p>
                </div>

                <div className="rounded-[1.15rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.32em] text-white/70">
                    Visual Signal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Sleek dark interfaces, structured layouts, and a design
                    language built on clarity and trust.
                  </p>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-[1.2rem] border border-white/10">
                <div className="relative h-[8.7rem] w-full">
                  <Image
                    src="/images/portfolio-hero.png"
                    alt="Portfolio showcase visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(7,17,21,0.18))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[linear-gradient(90deg,#103942_0%,#071317_32%,#081317_68%,#2a2448_100%)] px-6 py-16 md:px-10 lg:px-12 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1346px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.2rem] bg-white text-[#111827] shadow-[0_24px_50px_rgba(0,0,0,0.16)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 pb-6 pt-5 text-center">
                  <h3 className="text-[1.75rem] font-extrabold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-[1.6rem] font-semibold text-emerald-500">
                    {project.category}
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#ece8e8] px-3 py-2 text-xs font-medium text-[#222]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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

function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
      <path d="M12 7v14" />
      <path d="m5 7 7 4 7-4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4 8 8 8 8-8" />
    </svg>
  );
}


