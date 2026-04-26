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

const values = [
  {
    title: "Transparency",
    description:
      "We believe in open honest communication, keeping our clients informed and involved at every stage of the process.",
    icon: <DocumentIcon />,
  },
  {
    title: "Excellence",
    description:
      "We are committed to creating high-quality software products and digital solutions, built with precision, innovation, and impact.",
    icon: <SparkIcon />,
  },
  {
    title: "Innovation",
    description:
      "We embrace the latest technologies and trends to build forward-thinking software products that drive business growth and transformation.",
    icon: <BoltIcon />,
  },
  {
    title: "Inclusion",
    description:
      "We value collaboration and diverse perspectives, creating an environment where ideas are shared and innovation thrives.",
    icon: <LayerIcon />,
  },
  {
    title: "Client-Centric",
    description:
      "We put our clients' needs at the forefront, ensuring customized solutions that align with their business goals and deliver meaningful results.",
    icon: <EyeIcon />,
  },
  {
    title: "Convergence Protocol",
    description:
      "We eliminate the friction between design and engineering. At DeVergeHub, aesthetics are treated as a technical requirement.",
    icon: <SignalIcon />,
  },
];

const achievements = [
  {
    title: "Successful Client Projects",
    description:
      "Completed numerous high-quality projects for businesses, delivering measurable results in technology and business services.",
    image: "/images/about-values 1.jpg", // Add your image path
    accent:
      "bg-[linear-gradient(180deg,rgba(7,17,21,0.05)_0%,rgba(7,17,21,0.75)_100%),linear-gradient(135deg,#9b6b43_0%,#4f3627_30%,#131d2a_100%)]",
  },
  {
    title: "Innovative Solutions & Impact",
    description:
      "We create innovative software products and digital solutions that help businesses stay ahead and make a meaningful impact in their markets.",
    image: "/images/about-values 2.jpg", // Add your image path
    accent:
      "bg-[linear-gradient(180deg,rgba(7,17,21,0.05)_0%,rgba(7,17,21,0.78)_100%),linear-gradient(135deg,#21344d_0%,#0f1724_45%,#080b13_100%)]",
  },
  {
    title: "Global Network Expansion",
    description:
      "Our software products reach businesses worldwide, delivering innovative solutions across industries and markets.",
    image: "/images/about-values 3.jpg", // Add your image path
    accent:
      "bg-[linear-gradient(180deg,rgba(7,17,21,0.06)_0%,rgba(7,17,21,0.76)_100%),linear-gradient(135deg,#b8c1d0_0%,#6b7489_45%,#151c28_100%)]",
  },
  {
    title: "Growth & Empowerment",
    description:
      "Our software products empower businesses to grow, innovate, and achieve their full potential.",
    image: "/images/about-values 4.jpg", // Add your image path
    accent:
      "bg-[linear-gradient(180deg,rgba(7,17,21,0.08)_0%,rgba(7,17,21,0.8)_100%),linear-gradient(135deg,#2f3244_0%,#111625_40%,#080b13_100%)]",
  },
];

const team = [
  {
    name: "Ujah Collins",
    role: "Project Coordinator",
    tone: "from-zinc-500 to-zinc-800",
    image: "/images/Aboutteam-mate1.png",
  },
  {
    name: "Ayeleru Sharafadeen",
    role: "Business Analyst",
    tone: "from-stone-400 to-zinc-900",
    image: "/images/Aboutteam-mate2.png",
  },
  {
    name: "Ashogbo Joseph",
    role: "Product Manager",
    tone: "from-neutral-200 to-zinc-700",
    image: "/images/Aboutteam-mate3.png",
  },
  {
    name: "Ogbona Kennedy",
    role: "Team Lead",
    tone: "from-neutral-400 to-zinc-900",
    image: "/images/Aboutteam-mate4.png",
  },
  {
    name: "Bar. Ogwuche James",
    role: "Legal Adviser",
    tone: "from-stone-300 to-zinc-700",
    image: "/images/Aboutteam-mate5.png",
  },
];

function SectionLabel({
  children,
  dark = true,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] ${
        dark ? "text-emerald-400" : "text-emerald-600"
      }`}
    >
      <span
        className={`h-px w-10 ${dark ? "bg-emerald-500/70" : "bg-emerald-600/60"}`}
      />
      <span>{children}</span>
    </div>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
    >
      {children}
    </Link>
  );
}

function AboutPage() {
  return (
    <main
      className={`${montserrat.className} min-h-screen bg-[#071115] text-white`}
    >
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),linear-gradient(180deg,#0b1718_0%,#071115_100%)]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(7,17,21,0.2)_0%,rgba(7,17,21,0.05)_35%,rgba(7,17,21,0.18)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-2 md:px-10 lg:px-12">
          <SiteNavbar />

          <div className="grid items-center gap-12 py-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
            <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="text-5xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
                About
                <br />
                <span className="text-emerald-400">De-Verge</span> Hub
              </h1>

              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-[16px] md:text-[20px] leading-7 md:leading-[1.4] text-white font-normal">
                {" "}
                De Verge Hub is a software development company focused on
                designing and building high-quality digital solutions that help
                businesses grow, stand out, and succeed in today&apos;s digital
                world.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[24rem] rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-500/10 bg-[#13253d]/90 p-4 ">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-emerald-300/80">
                    Network
                  </p>
                  <h3 className="mt-4 text-[1.85rem] font-medium text-white">
                    Global
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    We create scalable software solutions powering businesses
                    across industries.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/10 bg-[#13253d]/90 p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-emerald-300/80">
                    Delivery
                  </p>
                  <h3 className="mt-2 text-[1.85rem] font-medium text-white">
                    Web
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    Modern digital products, seamless web experiences, and
                    forward-thinking innovation.
                  </p>
                </div>
              </div>

              <div className="relative mt-3 overflow-hidden rounded-[1.4rem] border border-white/10">
                <div className="relative h-[12.5rem] w-full">
                  <Image
                    src="/images/About-hero.png"
                    alt="De-Verge Hub team and workspace"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(7,17,21,0.28))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#071115] px-6 py-8 md:px-10 lg:px-12 lg:py-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
          <div className="rounded-[1.6rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_18%),linear-gradient(135deg,#8d5938_0%,#4b3428_24%,#172028_55%,#0b1117_100%)] p-3 shadow-[0_0_32px_rgba(16,185,129,0.24)]">
            <div className="relative h-[17rem] overflow-hidden rounded-[1.2rem] sm:h-[20rem]">
              <Image
                src="/images/About-ourstory-img.jpg"
                alt="About De-Verge Hub story illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,17,21,0.2))]" />
            </div>
          </div>

          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-[3rem]">
              We pride ourselves on our commitment to{" "}
              <span className="text-emerald-400">excellence.</span>
            </h2>
            <p className="mt-5 font-medium text-[11.58px] leading-[15.06px] tracking-normal md:text-sm md:leading-6">
              De Verge Hub was founded to empower businesses of all sizes with
              innovative digital solutions that drive transformation, foster
              growth, and build a connected future. Our mission is to deliver
              cutting-edge digital products, transformative web and mobile
              experiences, and expert consulting services that help businesses
              thrive in the digital age.
            </p>
            <p className="mt-5 font-medium text-[11.58px] leading-[15.06px] tracking-normal md:text-sm md:leading-6">
              We focus on understanding our clients&apos; needs, creating
              tailored solutions, and providing ongoing support to ensure their
              continued success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071115] px-6 py-8 md:px-10 lg:px-12 lg:py-14">
        <div className="mx-auto w-full max-w-[1346px]">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-[3rem]">
            Our core values are the foundation of everything we strive to
            achieve.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.35rem] border border-white/25 bg-[#091317] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
              >
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f1] px-6 py-16 text-[#0d1117] md:px-10 lg:px-12 lg:py-20">
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {achievements.map((item) => (
            <article
              key={item.title}
              className={`relative min-h-68 overflow-hidden rounded-[1.3rem] ${item.accent} p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] group`}
            >
              {/* 🖼️ IMAGE LAYER (ADD THIS HERE) */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 🌑 DARK OVERLAY (for readability) */}
              <div className="absolute inset-0 z-0 bg-black/40" />

              {/* 📌 CONTENT (must stay above image) */}
              <div className="relative z-10 flex h-full flex-col justify-end">
                <h3 className="text-[1.9rem] font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/90">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#071115] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1346px]">
          <p className="text-2xl font-semibold text-emerald-400">
            Meet Our Team
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-tight text-white md:text-[3rem]">
            We come together as a team to deliver the best services to our
            clients.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#0e171b]"
              >
                <div
                  className={`relative h-64 bg-gradient-to-b ${member.tone} ${
                    index === 0
                      ? "shadow-[inset_0_-70px_80px_rgba(0,0,0,0.45)]"
                      : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_10%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.85))]" />
                </div>
                <div className="-mt-14 pt-1">
                  <div className="rounded-2xl bg-black/72 px-3 py-3 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/75">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#081019] px-6 py-16 md:px-10 lg:px-12 lg:py-24"
      >
        {/* Layered Radial Gradients for the glow effect */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
        radial-gradient(104.15% 178.83% at 0% 50%, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0) 24%),
        radial-gradient(104.15% 178.83% at 100% 50%, rgba(16, 185, 129, 0.22) 0%, rgba(16, 185, 129, 0) 28%),
        linear-gradient(180deg, #081019 0%, #090f18 100%)
      `,
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Join Us At De-Verge Hub!</SectionLabel>
            <h2 className="max-w-xl text-5xl font-medium leading-[0.96] text-white md:text-[4rem]">
              Ready for growth and innovation?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/72">
              Join De-Verge Hub, let&apos;s create something great together.
            </p>
            <div className="mt-8">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[17rem] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#494147_0%,#2e2b31_100%)] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:max-w-[18rem] lg:max-w-[19rem]">
            <div className="relative h-[24rem] overflow-hidden rounded-[1.35rem] sm:h-[26rem]">
              <Image
                src="/images/About-footer.png"
                alt="Join De-Verge Hub collaboration visual"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 304px"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.1),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.22))]" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 3h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m5 5 2 2" />
      <path d="m17 17 2 2" />
      <path d="m19 5-2 2" />
      <path d="m7 17-2 2" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M13 2 6 13h5l-1 9 7-11h-5l1-9Z" />
    </svg>
  );
}

function LayerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m12 4 7 4-7 4-7-4 7-4Z" />
      <path d="m5 12 7 4 7-4" />
      <path d="m5 16 7 4 7-4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 12h.01" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M5 5a10 10 0 0 0 0 14" />
      <path d="M19 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

export default AboutPage;
