"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-8 lg:px-14"
      >
        {/* Left: logo + name */}
        <Link href="/" className="flex shrink-0 items-end gap-[7px] leading-none">
          <Image
            src="/hero-asset/Vector.png"
            alt="ByteSpace logo"
            width={29}
            height={32}
            priority
            className="mb-[1px] block h-[28px] w-auto"
          />
          <span className="leading-none text-[22px] font-extrabold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Middle: links */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-normal text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: actions */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/sign-in"
            className="text-sm font-normal text-white/80 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="text-sm font-normal text-white/80 transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <Link href="/cart" aria-label="Cart" className="flex items-center">
            <Image
              src="/hero-asset/cart.png"
              alt=""
              width={24}
              height={24}
              className="h-[22px] w-[22px] brightness-0 invert"
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/cart" aria-label="Cart" className="flex items-center">
            <Image
              src="/hero-asset/cart.png"
              alt=""
              width={24}
              height={24}
              className="h-[22px] w-[22px] brightness-0 invert"
            />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-white"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 rounded-2xl bg-white/10 p-3 backdrop-blur">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-medium text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-4 px-4 pb-2">
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                Sign In
              </Link>
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
