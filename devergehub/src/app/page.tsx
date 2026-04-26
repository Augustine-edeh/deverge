"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiteNavbar } from "@/components/site-navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const stats = [
  { value: "40+", label: "Projects Done" },
  { value: "35+", label: "Happy Client" },
  { value: "95%", label: "Client Satisfaction" },
];

const services = [
  {
    title: "Business Strategy",
    description:
      "At De-Verge we deliver actionable strategy that capitalizes on opportunity and navigate challenge for business growth.",
    icon: <StrategyIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
    icon: <MarketingIcon />,
  },
  {
    title: "Brand Identity",
    description:
      "Our services goes beyond logo and color scheme, we breathe life into your brand story.",
    icon: <BrandIcon />,
  },
  {
    title: "Cross-Platform",
    description:
      "Our designs are built to thrive and adapt across multiple devices providing optimized accessibility and reach.",
    icon: <PlatformIcon />,
  },
  {
    title: "Web Development",
    description:
      "At De-Verge Hub we deliver actionable strategy that capitalize on opportunity and negative challenges for business growth.",
    icon: <CodeIcon />,
  },
  {
    title: "Local Marketing",
    description:
      "We harness the power of local marketing building deep connection with targeted audience.",
    icon: <SliderIcon />,
  },
];

const projects = [
  {
    title: "Custom CRM Development",
    category: "Web Development",
    tags: ["MySQL", "Laravel", "Node.js"],
    image: "/images/Home-img 1.png",
  },
  {
    title: "Mobile App for FitTrack",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/images/Home-img 2.png",
  },
  {
    title: "Brand Identity for Google",
    category: "Branding",
    tags: ["Adobe Creative Suite", "Figma", "Photoshop"],
    image: "/images/Home-img 3.png",
  },
];

const testimonials = [
  {
    name: "Adaeje Francis",
    location: "Abuja, Nigeria",
    quote:
      "De-Verge Hub brought our vision to life with a strategy-first process that exceeded our expectations.",
    date: "30 October 2026",
    image: "/images/marketplace-testimonial 1.jpg",
  },
  {
    name: "Fred Gerard",
    location: "Abuja, Nigeria",
    quote:
      "De-Verge Hub's data analytics insights have been instrumental in informing our business decisions and driving growth.",
    date: "30 October 2026",
    image: "/images/marketplace-testimonial 2.jpg",
  },
  {
    name: "Fred Gerard",
    location: "Abuja, Nigeria",
    quote:
      "De-Verge Hub's data analytics insights have been instrumental in informing our business decisions and driving growth.",
    date: "30 October 2026",
    image: "/images/marketplace-testimonial 2.jpg",
  },
  {
    name: "Vadtrans",
    location: "Abuja, Nigeria",
    quote:
      "De Verge Hub's web application played a key role in helping Vadtrans achieve its goals, delivering smart and efficient solutions.",
    date: "12 September 2023",
    image: "/images/marketplace-testimonial 3.jpg",
  },
];

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "#" },
    { label: "CRS", href: "#" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "#" },
  ],
};

const footerLinkMap: Record<string, string> = {
  "About Us": "/about",
  Service: "/service",
  Blog: "/blog",
  Contact: "/contact",
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function SectionEyebrow({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-sm font-semibold tracking-wide text-emerald-500 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-12 bg-emerald-500/70" />
      <span>{children}</span>
      {align === "center" ? (
        <span className="h-px w-12 bg-emerald-500/70" />
      ) : null}
    </div>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/portfolio"
      className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 px-10 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500/10"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main
      className={`${montserrat.className} min-h-screen bg-[#081116] text-white`}
    >
      <section
        id="home"
        className="relative overflow-hidden border-b border-emerald-500/10"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/Home-hero.png"
            alt="De-Verge Hub team in an office workspace"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[linear-gradient(122.98deg,rgba(1,8,5,0.8)_35.64%,rgba(30,98,64,0.8)_129.95%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(16,185,129,0.12),transparent_26%),linear-gradient(90deg,rgba(7,17,21,0.34),rgba(7,17,21,0.18),rgba(7,17,21,0.42))]" />
        </div>

        <div className="relative mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col px-6 pb-10 md:px-10 md:pb-12 lg:px-12">
          <SiteNavbar />

          <div className="relative z-10 flex flex-1 items-center py-14 md:py-16">
            <div className="max-w-4xl pl-0 md:pl-10">
              <div className="max-w-5xl font-bold text-[42px] leading-[1] tracking-[0] text-white sm:text-[64px] lg:text-[70px] space-y-2">
                <p>Cutting-Edge Digital</p>
                <p>
                  Solutions to <span className="text-emerald-400">Elevate</span>
                </p>
                <p>Your Business</p>
              </div>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/86 md:text-[1.15rem] md:leading-9">
                We design, build, and scale custom software solutions
                <br className="hidden md:block" />
                for startups, enterprises, and growing businesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-10">
                <PrimaryButton>
                  Schedule A Meeting <ArrowIcon />
                </PrimaryButton>
                <SecondaryButton className="bg-[linear-gradient(122.98deg,rgba(1,8,5,0.8)_35.64%,rgba(30,98,64,0.8)_129.95%)] text-white">
                  View Our Work
                </SecondaryButton>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081116] px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-extrabold text-emerald-500 md:text-[3.6rem]">
                {stat.value}
              </div>
              <p className="mt-1 text-2xl font-medium text-white/92">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#081417] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_1fr]">
          <div className="relative overflow-hidden rounded-[0.6rem] border-t-[6px] border-r-[6px] border-emerald-500 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="relative h-[22rem] md:h-[25rem]">
              <Image
                src="/images/Home-offer.png"
                alt="De-Verge Hub team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-2 w-32 bg-[#0d5ca8]" />
          </div>

          <div>
            <SectionEyebrow align="left">Who We Are</SectionEyebrow>
            <h2 className="max-w-xl text-2xl font-bold leading-tight text-white">
              Our story started with a
              <br />
              dedicated team of{" "}
              <span className="text-emerald-500">passionate</span>
              <br />
              <span className="text-emerald-500">innovators.</span>
            </h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-white/78 md:text-lg">
              We take pride in our dedication to excellence, innovative
              solutions, and steadfast commitment to client satisfaction.
            </p>
            <p className="mt-2 max-w-xl text-base leading-7 text-white/78 md:text-lg">
              Our expertise has empowered countless businesses to enhance their
              digital presence and achieve remarkable growth.
            </p>

            <div className="mt-3 flex flex-wrap gap-5">
              {[
                ["5+ Years", "Industry Experience"],
                ["15+ Experts", "Dedicated Professionals"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-lg bg-[#3a4551] px-6 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                >
                  <div className="text-[1.85rem] font-semibold text-emerald-400">
                    {title}
                  </div>
                  <div className="text-sm text-white/90">{subtitle}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PrimaryButton>
                Learn More <ArrowIcon />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service"
        className="bg-[#0a1018] px-6 py-2 md:px-10 lg:px-12"
      >
        <div className="mx-auto w-full max-w-[1346px]">
          <SectionEyebrow>
            <h2 className="font-bold text-2xl">
            What We Offer

            </h2>
            </SectionEyebrow>
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold leading-tight text-white md:text-[3rem]">
            What sets us apart? We deliver
            <br />
            holistic solutions by seamlessly
            <br />
            integrating{" "}
            <span className="text-emerald-500">strategy, design, and</span>
            <br />
            <span className="text-emerald-500">technology.</span>
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[0.9rem] bg-[#237545] px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex rounded-lg bg-white/12 p-3 text-white">
                  {service.icon}
                </div>
                <h3 className="text-[2rem] font-semibold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-white">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-[#081216] px-6 py-10 md:px-10 lg:px-12"
      >
        <div className="mx-auto w-full max-w-[1346px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionEyebrow align="left">
                <h2 className="font-bold text-2xl">
What We&apos;ve Done
                </h2>
                </SectionEyebrow>
              <h2 className="max-w-4xl text-xl font-bold leading-tight text-white md:text-[3rem]">
                Explore some of our
                <br />
                <span className="text-emerald-500">hands-on projects,</span>
                <br />
                delivered with a focus on
                <br />
                client satisfaction.
              </h2>
            </div>

            <PrimaryButton>
              Learn More <ArrowIcon />
            </PrimaryButton>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1rem] bg-white text-slate-950 shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[2rem] font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xl font-semibold text-blue-600">
                    {project.category}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700"
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

      <section id="blog" className="bg-[#0a1018] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-[1346px]">
          <SectionEyebrow>
                            <h2 className="font-bold text-xl">Testimonial
</h2>
            </SectionEyebrow>
          <h2 className="mx-auto max-w-4xl text-center text-xl font-bold leading-tight text-white md:text-[3rem]">
            See how our users have
            <br />
            significantly reduced their{" "}
            <span className="text-emerald-500">Startup</span>
            <br />
            <span className="text-emerald-500">
              and SaaS solution expenses.
            </span>
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className={`rounded-[1.6rem] border px-6 py-6 ${
                  index === 0
                    ? "border-emerald-500/35 bg-[linear-gradient(180deg,#04170d_0%,#0b1517_100%)]"
                    : "border-white/15 bg-[linear-gradient(180deg,#04080d_0%,#0c1517_100%)]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-white/65">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-white/76">
                  {testimonial.quote}
                </p>
                <div className="mt-7 flex items-center justify-between text-xs text-white/60">
                  <span>{testimonial.date}</span>
                  <span className="tracking-[0.25em] text-yellow-400">
                    *****
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden px-4 py-2 md:px-10 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.08),_transparent_16%),radial-gradient(circle_at_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(180deg,_#081417_0%,_#091116_100%)]" />
        <div className="relative mx-auto max-w-1xl rounded-[1rem] border border-emerald-500/70 bg-[#181e27] px-8 py-12 text-center shadow-[0_30px_70px_rgba(0,0,0,0.28)] md:px-16 md:py-16">
          <div className="mx-auto inline-flex rounded-full border border-emerald-500/50 bg-emerald-500/8 px-8 py-3 text-sm font-semibold text-emerald-500">
            • LET&apos;S WORK TOGETHER
          </div>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-[3rem]">
            <span className="text-emerald-500">Are You Ready To Elevate</span>
            <br />
            Your Business To A New
            <br />
            Height?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
            Collaborate with De Verge Hub to build high-quality software
            solutions, delivered securely, cost-efficiently, and with
            flexibility.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton>
              Get Started Today <ArrowIcon />
            </PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </div>

          <div className="mt-12 border-t border-white/50 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-white md:gap-10">
              <div className="flex items-center gap-3">
                <ShieldIcon />
                <span>Secure &amp; Confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <SpeedIcon />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <WalletIcon />
                <span>Flexible Payment Plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#090d16] px-6 pb-8 pt-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 md:grid-cols-[1.4fr_0.8fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <BrandMark />
            <p className="mt-4 max-w-lg text-base leading-6 text-white">
              Empowering your digital transformation with top freelance talent
              worldwide on our secure, cost-effective platform.
            </p>

            <div className="mt-5 flex gap-3">
              {[FaFacebook, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-md bg-white/5 transition hover:bg-white/10"
                  >
                    <Icon size={18} style={{ color: "#fff" }} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-base leading-6 text-white">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={footerLinkMap[item.label] ?? item.href}
                    className="transition hover:text-emerald-400 text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-base leading-6 text-white">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={footerLinkMap[item.label] ?? item.href}
                    className="transition hover:text-emerald-400 text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-lg leading-5 text-white">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form className="mt-4 space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-white bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto mt-10 flex max-w-7xl flex-col-reverse gap-3 border-t border-white/10 pt-5 text-lg text-white/70 md:flex-row md:items-center md:justify-between">
          <p className="text-center  text-white  md:text-left">
            &copy; 2023 De-Verge Hub. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 md:justify-end  text-white">
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

function StrategyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 19h16" />
      <path d="M7 15V9" />
      <path d="M12 15V5" />
      <path d="M17 15v-3" />
      <path d="m5 12 4-4 3 2 5-5 2 2" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 12V8a2 2 0 0 1 2-2h2l6-2v16l-6-2H6a2 2 0 0 1-2-2v-4Z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18 7a7 7 0 0 1 0 10" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z" />
      <path d="M12 8v8" />
      <path d="M8.5 10 12 8l3.5 2" />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 19h8" />
      <path d="M12 17v2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m9 10 3 3 3-3" />
      <path d="m9 14 3-3 3 3" />
    </svg>
  );
}

function SliderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 5v14" />
      <path d="M12 5v14" />
      <path d="M18 5v14" />
      <path d="M4 9h4" />
      <path d="M10 14h4" />
      <path d="M16 8h4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m12 3 7 3v6c0 4.5-2.8 7.7-7 9-4.2-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 12a9 9 0 1 1 18 0" />
      <path d="M12 12 16.5 7.5" />
      <path d="M5 15h2" />
      <path d="M17 15h2" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <path d="M17 8h4v8h-4" />
      <path d="M7 9h4" />
      <path d="M7 13h3" />
      <circle cx="18.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1.3 17v-5h1.9l.3-2.3h-2.2v-1.5c0-.7.2-1.1 1.2-1.1h1.2V7.1c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2v1.5H9v2.3h1.9V19h2.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 4 20 20" />
      <path d="M20 4 4 20" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
      <path d="M5.2 3.5A1.7 1.7 0 1 0 5.2 7a1.7 1.7 0 0 0 0-3.5ZM3.9 8.6h2.6V20H3.9V8.6Zm6.1 0h2.5v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V20h-2.6v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H10V8.6Z" />
    </svg>
  );
}
