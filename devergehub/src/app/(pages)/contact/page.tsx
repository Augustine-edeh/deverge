"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiteNavbar } from "@/components/site-navbar";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const contactCards = [
  {
    title: "Phone number",
    value: "+2347059607302",
    icon: <PhoneIcon />,
  },
  {
    title: "Email Address",
    value: "devergehub01@gmail.com",
    icon: <MailIcon />,
  },
  {
    title: "Quick Contact",
    value: "+2347059607302",
    icon: <ChatIcon />,
  },
  {
    title: "Location",
    value: "RV51, Behind Valid Crown School, Bwari Abuja Nigeria.",
    icon: <LocationIcon />,
  },
];

const faqItems = [
  "What services does De-Verge Hub offer?",
  "Can De-Verge Hub help improve my website's search engine ranking?",
  "How long does it take to complete a website development project?",
  "How does De-Verge Hub ensure the success of a project?",
  "Does De-Verge Hub provide ongoing support/maintenance after project completion?",
];

const companyLinks = ["About Us", "Service", "Blog", "Career", "CRS"];
const supportLinks = ["Contact", "FAQs"];
const footerLinkMap: Record<string, string> = {
  "About Us": "/about",
  Service: "/service",
  Blog: "/blog",
  Contact: "/contact",
};

function BrandMark() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/brandmark.png"
        alt="De-Verge Hub Logo"
        width={140}
        height={40}
       
        className="object-contain h-auto w-auto" 
        priority // Good practice for logos in the header (LCP)
      />
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-emerald-400">
      <span className="h-px w-14 bg-emerald-500/70" />
      <span>{children}</span>
    </div>
  );
}

function PrimaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-emerald-500/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500/10"
    >
      {children}
    </a>
  );
}

function ContactPage() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-[#071115] text-white`}>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(255,255,255,0.08),transparent_12%),linear-gradient(180deg,#0a1718_0%,#071115_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,21,0.1)_0%,rgba(7,17,21,0.04)_35%,rgba(7,17,21,0.14)_100%)] opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 lg:px-12">
           <SiteNavbar />

          <div className="grid items-center gap-14 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.65rem]">
                Get in Touch
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-[1.65rem] md:leading-[1.35]">
                We&apos;re here to support your web development, digital marketing,
                and business growth. Reach out today to begin the conversation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton href="#contact-form">
                  Schedule A Meeting
                  <ArrowIcon />
                </PrimaryButton>
                <SecondaryButton href="/portfolio">View Our Work</SecondaryButton>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[26rem]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                <div className="relative h-[25rem] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/contact-image.png"
                    alt="De-Verge Hub contact representative"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 416px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,21,0.02)_0%,rgba(7,17,21,0.12)_100%)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="flex items-center gap-4 rounded-[1rem] border border-white/10 bg-white px-5 py-4 text-[#111827] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#121827]">{card.title}</p>
                  <p className="text-sm text-[#6b7280]">{card.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-[#071115] px-6 py-10 md:px-10 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl rounded-[1.65rem] border border-white/55 px-5 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:px-12 md:py-10">
          <form className="space-y-6">
            <Field label="Name *">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <UserIcon />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 w-full rounded-[0.35rem] border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
                />
              </div>
            </Field>

            <Field label="Email *">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  className="h-12 w-full rounded-[0.35rem] border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
                />
              </div>
            </Field>

            <Field label="Phone Number (optional)">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <PhoneIcon />
                </span>
                <input
                  type="tel"
                  placeholder="+2347059607302"
                  className="h-12 w-full rounded-[0.35rem] border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
                />
              </div>
            </Field>

            <Field label="Company Name (ex. Google)">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <BuildingIcon />
                </span>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="h-12 w-full rounded-[0.35rem] border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
                />
              </div>
            </Field>

            <Field label="Interested Service">
              <select className="h-12 w-full rounded-[0.35rem] border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition focus:border-emerald-500">
                <option>Select interested services</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>Brand Identity</option>
                <option>Business Strategy</option>
              </select>
            </Field>

            <Field label="Project Brief / Message">
              <textarea
                rows={5}
                placeholder="message"
                className="w-full rounded-[0.35rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
              />
            </Field>

            <div>
              <label className="mb-2 block text-sm text-white/84">Upload file</label>
              <input
                type="file"
                className="block w-full rounded-[0.35rem] border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 file:mr-4 file:rounded-[0.25rem] file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:text-slate-700 hover:file:bg-slate-200"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border border-white/30 accent-emerald-500"
              />
              <span>
                I agree with the <a href="#" className="text-emerald-400">privacy policy</a>
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex min-w-40 items-center justify-center rounded-[0.9rem] bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#071115] px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-medium leading-tight text-white md:text-[3rem]">
            Here are answers to common questions asked by our clients.
          </h2>

          <div className="mt-10 space-y-5">
            {faqItems.map((question) => (
              <article
                key={question}
                className="flex items-center justify-between gap-5 bg-white px-5 py-5 text-[#111827] shadow-[0_10px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-slate-700">
                    <ChevronDownIcon />
                  </span>
                  <p className="text-sm font-medium leading-6">{question}</p>
                </div>
                <span className="shrink-0 text-xl font-medium text-slate-900">&gt;</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0f18] px-6 pb-8 pt-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.7fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-sm text-lg leading-8 text-white/72">
              Empowering your digital transformation with top freelance talent
              worldwide on our secure, cost-effective platform.
            </p>

            <div className="mt-6 flex gap-4">
  <a href="#" className="grid h-12 w-12 place-items-center transition hover:opacity-80">
    <FaFacebook size={26} className="text-white" />
  </a>

  <a href="#" className="grid h-12 w-12 place-items-center transition hover:opacity-80">
    <FaInstagram size={26} className="text-white" />
  </a>

  <a href="#" className="grid h-12 w-12 place-items-center transition hover:opacity-80">
    <FaTwitter size={26} className="text-white" />
  </a>

  <a href="#" className="grid h-12 w-12 place-items-center transition hover:opacity-80">
    <FaLinkedinIn size={26} className="text-white" />
  </a>
</div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-xl text-white/85">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href={footerLinkMap[link] ?? "#"} className="transition hover:text-emerald-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">Support</h3>
            <ul className="mt-5 space-y-3 text-xl text-white/85">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link href={footerLinkMap[link] ?? "#"} className="transition hover:text-emerald-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">Newsletter</h3>
            <p className="mt-5 text-lg leading-7 text-white/72">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="mt-5 space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-md border border-white/25 bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-600 px-4 py-3 text-left text-base font-semibold text-white transition hover:bg-emerald-500"
              >
                Subscribed
              </button>
            </form>
          </div>
        </div>

       <div className="mx-auto mt-10 flex max-w-6xl flex-col-reverse gap-4 border-t border-white/20 pt-5 text-xl text-white/82 md:flex-row md:items-center md:justify-between">
  <p className="text-center md:text-left">
    &copy; 2023 De-Verge Hub. All rights reserved.
  </p>

  <div className="flex justify-center gap-8 md:justify-end">
    <a href="#" className="transition hover:text-emerald-400">
      Privacy Policy
    </a>
    <a href="#" className="transition hover:text-emerald-400">
      Terms of Service
    </a>
  </div>
</div>
      </footer>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[1.1rem] font-medium text-white md:text-[1.05rem]">
        {label}
      </label>
      {children}
    </div>
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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h4l2 5-2.5 1.5a16 16 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21a8.5 8.5 0 0 0 7.35-4.2A8.5 8.5 0 1 0 4.57 8.9 8.4 8.4 0 0 0 6 17l-1 4 4.05-1.1A8.4 8.4 0 0 0 12 21Z" />
      <path d="M9 12h6" />
      <path d="M9.5 9.5h5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V5h10v15" />
      <path d="M14 20V9h6v11" />
      <path d="M8 9h2" />
      <path d="M8 13h2" />
      <path d="M8 17h2" />
      <path d="M17 13h1" />
      <path d="M17 17h1" />
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


export default ContactPage;
