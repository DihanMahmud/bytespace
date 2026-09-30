"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HappyStudents from "@/components/HappyStudents";

export default function HeroSection() {
  return (
    <section className="hero grid-view relative overflow-hidden">
      <Navbar />

      {/* Decorative floating shapes — edge anchored so wide screens stay filled */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        {/* Left yellow spring (half off-screen like reference) */}
        <Image
          src="/hero-asset/left-spring-yellow.png"
          alt=""
          width={267}
          height={320}
          className="absolute top-[22%] w-20 md:w-[135px] mg: xl:w-[267px]"
          priority
        />

        {/* Right yellow cylinder (half off-screen like reference) */}
        <Image
          src="/hero-asset/right-cylinder.png"
          alt=""
          width={213}
          height={372}
          className="absolute top-[20%] right-0 w-20 md:w-[135px] xl:w-[213px]"
          priority
        />
      </div>

      {/* Headline + search */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 text-center">
        <h1 className="mx-auto mt-6 max-w-[920px] text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08] font-semibold tracking-tight text-white lg:mt-9">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mx-auto mt-4 max-w-[780px] text-[13px] leading-relaxed font-light text-white/70 sm:text-[15px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <form
          action="#"
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-5 flex max-w-[560px] flex-col items-center justify-center gap-2 sm:flex-row"
          role="search"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <div className="relative w-full sm:max-w-[420px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              className="absolute top-1/2 left-5 -translate-y-1/2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="hero-search"
              type="search"
              placeholder="Course, topic, creator"
              className="h-[50px] w-full rounded-full bg-white pr-5 pl-12 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-[50px] w-full shrink-0 rounded-full bg-[#C9FF00] px-8 text-sm font-medium text-black transition-colors hover:bg-[#d8ff4d] sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>

      {/* Bottom visual */}
      <div className="w-full h-auto">
        <div className="relative mx-auto w-full max-w-[1120px]">
          <Image
            src="/hero-asset/bottom-ring.png"
            alt=""
            width={1120}
            height={442}
            priority
            className="mx-auto w-auto lg:w-[1120px]"
          />
          {/* Human */}
          <Image
            src="/hero-asset/bottom-human.png"
            alt="Smiling student with headphones holding a laptop"
            width={722}
            height={544}
            priority
            className="absolute bottom-0 left-1/2 z-10 h-auto w-[420px] max-w-none -translate-x-[calc(50%-16px)] object-contain object-bottom select-none sm:w-[480px] sm:-translate-x-[calc(50%-24px)] lg:w-[700px] lg:-translate-x-[calc(50%-32px)]"
          />

          {/* UI/UX card */}
          <div className="absolute scale-[0.82]  sm:scale-100 -top-10 left-0 md:top-[-15%] md:left-[15%] lg:top-[20%] lg:left-[20%] z-20 rounded-2xl bg-white px-5 py-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-[15px] font-semibold text-gray-900">
              UI/UX Design
            </p>
            <p className="mt-0.5 text-[11px] whitespace-nowrap text-gray-500">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Learning progress card — fixed 232×131 */}
          <div className="absolute scale-[0.82]  sm:scale-100 -top-10 right-5 md:top-[-20%] md:right-[8%] lg:top-[18%] lg:right-[18%] z-20 flex w-[160px] md:w-[232px] flex-col justify-center gap-2 overflow-hidden rounded-2xl bg-white px-5 py-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-[11px] leading-[14px] text-gray-500">
              Learning Progress
            </p>
            <p className="mt-[4px] text-[32px] leading-none font-bold text-gray-900">
              55%
            </p>
            <div className="mt-[12px] h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#C9FF00]" />
            </div>
          </div>

          {/* Happy students card */}
          <div className="absolute bottom-0 left-0 md:bottom-[5%] md:left-[8%] lg:bottom-[15%] lg:left-[15%] z-20 scale-[0.82]  sm:scale-100">
            <HappyStudents />
          </div>

          {/* Left small white spring */}
          <Image
            src="/hero-asset/left-spring.png"
            alt=""
            width={177}
            height={176}
            className="absolute top-[-60%] left-[8%] md:top-[-60%] md:left-[15%] lg:top-[-15%] lg:left-[3%] w-16 md:w-[110px] lg:w-[177px]"
          />

          {/* Left white ring */}
          <Image
            src="/hero-asset/left-circle.png"
            alt=""
            width={346}
            height={343}
            className="absolute md:bottom-[20%] md:left-[15%] lg:bottom-0 lg:left-[-15%] w-10 md:w-[240px] lg:w-[346px]"
          />

          {/* Right white pyramid */}
          <Image
            src="/hero-asset/right-pyramid.png"
            alt=""
            width={190}
            height={189}
            className="absolute top-[-60%] right-[10%] md:top-[-75%] md:right-[10%] lg:top-[-15%] lg:right-[-3%] w-16 md:w-[120px] lg:w-[190px]"
          />
          {/* Right white spring */}
          <Image
            src="/hero-asset/right-spring.png"
            alt=""
            width={280}
            height={332}
            className="absolute md:right-[10%] md:bottom-[0%] lg:right-[-13%] lg:bottom-[0%] w-0 md:w-[200px] lg:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
