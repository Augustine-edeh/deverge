"use client";

import { useMemo, useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const categories = [
  "All",
  "SEO",
  "Industry News",
  "AI",
  "Web Dev",
  "Trends",
  "Marketing",
  "UX Design",
];

const posts = [
  {
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt:
      "Discover the emerging trends that will shape web development in the coming year, from AI integration to new frameworks and tools that promise to ....",
    author: "CodewithHarry",
    category: "Web Dev",
    image: "/images/blog-img1.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
  {
    title: "10 Ways Technology can Benefit your Growing Business",
    excerpt:
      "Learn the SEO strategies and digital systems that are driving results in 2025, from AI-powered content optimization to technical improvements that increase visibility.",
    author: "External Author",
    category: "SEO",
    image: "/images/blog-img2.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
  {
    title: "The Role of Data Science in Business Decision-Making",
    excerpt:
      "Making informed decisions is a fundamental aspect of any successful business. That is where data science comes in, acting as an unseen engine behind stronger choices and clearer direction.",
    author: "William & Mary",
    category: "Industry News",
    image: "/images/blog-img3.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
  {
    title: "AI in Healthcare: Transforming Diagnosis and Treatment",
    excerpt:
      "Artificial intelligence is transforming industries worldwide, and healthcare is no exception. Its potential to improve diagnostics, workflows, and patient outcomes is growing rapidly.",
    author: "Radhika Narayanan",
    category: "AI",
    image: "/images/blog-img4.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
  {
    title: "The Importance of Data Encryption in Cybersecurity",
    excerpt:
      "Data encryption plays a crucial role in ensuring the confidentiality and integrity of sensitive information in today's digital world, especially for high-trust platforms and services.",
    author: "Secure debug",
    category: "Trends",
    image: "/images/blog-img5.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
  {
    title: "The Future of Blockchain: Trends and Applications",
    excerpt:
      "Future-facing blockchain technology keeps expanding beyond cryptocurrency, opening new opportunities in payments, identity, logistics, and secure records for growing businesses.",
    author: "Georgia Weston",
    category: "Marketing",
    image: "/images/blog-img6.png",
    date: "March 15, 2024",
    readTime: "45 mins read",
    views: "1,234 views",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.author.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <main
      className={`${montserrat.className} min-h-screen bg-[#081216] text-white`}
    >
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#10382f_0%,#081216_36%,#081216_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(16,185,129,0.08),transparent_20%),radial-gradient(circle_at_25%_18%,rgba(16,185,129,0.08),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12 lg:pb-20">
          <SiteNavbar />

          <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-400">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Full-Stack Development & Design
              </div>

              <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4rem]">
                We build the Digital
                <br />
                Architecture of
                <br />
                tomorrow.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-[1srem] md:leading-[1.45]">
                Discover our latest insights, trends, and tips on digital
                marketing and web development.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  Schedule A Meeting
                  <ArrowIcon />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500/10"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[24rem] rounded-[2rem] border border-emerald-500/10 bg-black/10 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:max-w-[25rem] lg:mr-0 lg:max-w-[27rem]">
              <div className="relative h-[22rem] overflow-hidden rounded-[1.6rem] lg:h-[24rem]">
                <Image
                  src="/images/blog-hero.png"
                  alt="Developer workstation for De Verge Hub blog"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 432px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081216] px-6 py-4 md:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-[1346px]">
          <div className="max-w-[17.5rem] rounded-[1rem] border border-white/35 bg-white/5 px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:max-w-[18rem]">
            <label className="flex items-center gap-3">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Article"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
              />
              <span className="text-white/80">
                <SearchIcon />
              </span>
            </label>
          </div>

          <div className="mt-6 overflow-x-auto rounded-[1.3rem] border border-white/10 bg-white/6 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <div className="flex min-w-max gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-emerald-500 text-white"
                      : "text-white/82 hover:bg-white/8"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-[1.7rem] bg-[#f3f4f6] p-4 text-[#101828] shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-[15.5rem] overflow-hidden rounded-[1.1rem] sm:h-[16rem]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_35%,rgba(0,0,0,0.68)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4">
                    <h2 className="max-w-[90%] text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.55rem]">
                      {post.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-[1.05rem] leading-9 text-[#20252f]">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-[#1f2937]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarIcon />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ClockIcon />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <EyeIcon />
                    {post.views}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <p className="text-[1.25rem] font-extrabold text-[#171b24]">
                    {post.author}
                  </p>
                  <a
                    href="#"
                    className="text-lg font-bold text-emerald-500 transition hover:text-emerald-600"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="mt-12 rounded-[1.4rem] border border-white/10 bg-white/5 px-6 py-10 text-center">
              <p className="text-lg text-white/75">
                No articles match your search right now.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 1.8" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.7" />
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
