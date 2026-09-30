"use client";

import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-8 pt-14 pb-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-end gap-[7px] leading-none">
              <Image
                src="/hero-asset/Vector.png"
                alt=""
                width={29}
                height={32}
                className="mb-[1px] block h-[28px] w-auto"
              />
              <span className="leading-none text-[24px] font-extrabold tracking-tight text-black">
                ByteSpace
              </span>
            </Link>

            <p className="mt-5 max-w-[560px] text-[13.5px] leading-relaxed text-gray-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex max-w-[560px] flex-col gap-4 sm:flex-row sm:items-center"
            >
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-[52px] w-full rounded-full border border-gray-300 bg-white px-6 text-[13.5px] text-gray-900 placeholder:text-gray-800 focus:border-gray-500 focus:outline-none sm:max-w-[380px]"
              />
              <button
                type="submit"
                className="h-[52px] shrink-0 rounded-full bg-[#C9F31D] px-9 text-[15px] font-medium text-black transition-colors hover:bg-[#d8ff4d]"
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-[560px] text-[11px] leading-relaxed text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pt-[52px]"
          >
            {columns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-[22px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13.5px] font-normal text-gray-700 transition-colors hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-gray-300 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <p className="text-[12px] text-gray-700">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {bottomLinks.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="text-[12px] text-gray-700 transition-colors hover:text-black"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
