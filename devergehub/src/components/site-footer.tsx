import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

function BrandMark() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/Brandmark.png"
        alt="De-Verge Hub Logo"
        width={140}
        height={40}
        className="h-auto w-auto object-contain"
        priority
      />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#090d16] px-6 pb-8 pt-16 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 md:grid-cols-[1.4fr_0.8fr_0.7fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-lg text-base leading-6 text-white">
            Empowering your digital transformation with top freelance talent
            worldwide on our secure, cost-effective platform.
          </p>

          <div className="mt-5 flex gap-3">
            {[FaFacebook, FaInstagram, FaXTwitter, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-md bg-white/5 transition hover:bg-white/10"
                >
                  <Icon size={18} style={{ color: "#fff" }} />
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-base leading-6 text-white">
            {footerLinks.company.map((item) => (
              <li key={item.label}>
                <Link
                  href={footerLinkMap[item.label] ?? item.href}
                  className="text-lg transition hover:text-emerald-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-base leading-6 text-white">
            {footerLinks.support.map((item) => (
              <li key={item.label}>
                <Link
                  href={footerLinkMap[item.label] ?? item.href}
                  className="text-lg transition hover:text-emerald-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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

      {/* Desktop view (copywright section)  */}
      <div className="hidden md:flex justify-between max-w-7xl gap-3 mx-auto mt-10 border-t border-white pt-5 text-lg text-white/70 md:flex-row md:items-center md:justify-between">
        <p className="text-white md:text-left">
          &copy; 2023 De-Verge Hub. All rights reserved.
        </p>

        {/* <div className="flex flex-col gap-4 text-white md:flex-row md:justify-end md:gap-6"> */}
        <a href="#" className="transition hover:text-emerald-400">
          Privacy Policy
        </a>
        <a href="#" className="transition hover:text-emerald-400">
          Terms of Service
        </a>
        {/* </div> */}
      </div>

      {/* Mobile view (copywright section)  */}
      <div className="flex md:hidden max-w-7xl flex-col-reverse gap-3 mx-auto mt-10 border-t border-white pt-5 text-lg text-white/70">
        <p className="text-white md:text-left">
          &copy; 2023 De-Verge Hub. All rights reserved.
        </p>

        <div className="flex flex-col gap-4 text-white md:flex-row md:justify-end md:gap-6">
          <a href="#" className="transition hover:text-emerald-400">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-emerald-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
