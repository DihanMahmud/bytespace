"use client";

import Image from "next/image";
import HappyStudents from "@/components/HappyStudents";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CheckIcon() {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBFBF9]">
      {/* Top lime glow — spans toward the top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-6%] left-[6%] h-[420px] w-[62%] rounded-[100%] blur-[100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.65) 0%, rgba(203,252,1,0.28) 53%, rgba(203,252,1,0.08) 75%, rgba(203,252,1,0) 100%)",
        }}
      />
      {/* Bottom-left green glow — on the left edge, clearly inside view */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[0%] left-[-18%] h-[560px] w-[46%] rounded-[100%] blur-[90px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.68) 0%, rgba(203,252,1,0.30) 53%, rgba(203,252,1,0.10) 75%, rgba(203,252,1,0) 100%)",
        }}
      />
      {/* Bottom-right blue glow — much bigger */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20%] bottom-[-15%] h-[740px] w-[55%] rounded-[100%] blur-[100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.40) 0%, rgba(0,59,226,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-20">
        {/* ── Part 1: growth ── */}
        <div className="grid grid-cols-1 items-center gap-12 pt-20 pb-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[30px] leading-[1.2] font-bold tracking-tight text-[#040819] md:text-[42px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-6 max-w-[520px] text-[14.5px] leading-[1.8] text-gray-600">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>
            <div className="mt-9 flex items-start gap-12">
              {growthStats.map((s) => (
                <div key={s.label}>
                  <p className="text-[30px] leading-none font-bold text-[#003BE2]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[14px] text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative mx-auto h-[560px] w-full max-w-[600px] md:h-[640px]">
            {/* Course card — same look as the courses section card */}
            <div className="absolute top-0 left-0 z-0 w-[300px] rounded-[24px] sm:scale-100 scale-75 border border-gray-200/90 bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:w-[340px]">
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[16px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute right-3 bottom-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-white/30 px-3 py-[7px] text-[11px] leading-none font-medium whitespace-nowrap text-gray-900 shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-[12px]">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-white/30 px-3 py-[7px] text-[11px] leading-none font-medium whitespace-nowrap text-gray-900 shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-[12px]">
                    2 hours 16 mins
                  </span>
                  <span className="rounded-full bg-white/30 px-3 py-[7px] text-[11px] leading-none font-medium whitespace-nowrap text-gray-900 shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-[12px]">
                    59 Comments
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-[18px] leading-snug font-bold tracking-tight text-gray-950">
                    Learn Figma from Basic
                  </h3>
                  <span className="flex shrink-0 items-center gap-1 pt-0.5 text-[15px] font-medium text-gray-800">
                    4.5
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#b6b6ba" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] text-gray-500">
                  by <span className="text-[#003BE2]">purepearl studio</span>
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 rounded-full border border-gray-200/70 bg-[#F5F5F6]/70 px-4 py-2 text-[13px] font-medium text-gray-600 shadow-[0_1px_8px_rgba(0,0,0,0.05)] backdrop-blur-md">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <line x1="12" x2="12" y1="20" y2="10" />
                      <line x1="18" x2="18" y1="20" y2="4" />
                      <line x1="6" x2="6" y1="20" y2="16" />
                    </svg>
                    Beginner
                  </span>
                  <span className="flex items-center">
                    {[32, 12, 5, 8].map((id, i) => (
                      <span
                        key={id}
                        className="h-[30px] w-[30px] overflow-hidden rounded-full border-2 border-white bg-gray-200"
                        style={{ marginLeft: i === 0 ? 0 : -10 }}
                      >
                        <img
                          src={`https://i.pravatar.cc/60?img=${id}`}
                          alt=""
                          width={30}
                          height={30}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                    ))}
                    <span className="-ml-2.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white bg-[#C9F31D] text-[10px] font-bold text-black">
                      26+
                    </span>
                  </span>
                </div>
                <p className="mt-5 text-[20px] leading-none font-extrabold text-[#003BE2]">
                  $25
                  <span className="ml-1 text-[13px] font-normal text-gray-400">/lifetime</span>
                </p>
              </div>
            </div>

            {/* Boy — large, overlapping the card, bottom-aligned */}
            <Image
              src="/stats/boy.png"
              alt="Smiling student with headphones holding a laptop"
              width={703}
              height={688}
              priority
              className="absolute bottom-0 left-[5%] z-10 w-[520px] select-none md:w-[560px]"
            />

            {/* Learning progress card */}
            <div className="absolute top-[36%] right-[0%] z-20 w-[190px] rounded-[16px] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:w-[210px] sm:scale-100 scale-70">
              <p className="text-[11px] text-gray-500">Learning Progress</p>
              <p className="mt-1 text-[32px] leading-none font-bold text-gray-950">
                55%
              </p>
              <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[55%] rounded-full bg-[#C9F31D]" />
              </div>
            </div>

            {/* Lime spring */}
            <Image
              src="/stats/spring-for-male.png"
              alt=""
              width={217}
              height={216}
              aria-hidden="true"
              className="absolute top-[25%] md:top-[13%] right-[10%] md:right-[-8%] z-20 w-[100px] select-none md:w-[217px]"
            />
          </div>
        </div>

        {/* ── Part 2: create & manage ── */}
        <div className="grid grid-cols-1 items-center gap-12 pt-10 pb-24 lg:grid-cols-2">
          {/* Visual composition */}
          <div className="relative mx-auto h-[580px] w-full max-w-[600px] md:h-[660px]">
            {/* Total revenue card */}
            <div className="absolute top-0 left-[0] z-20 w-full max-w-[300px] rounded-[18px] bg-[#003BE2] p-5 text-white shadow-[0_12px_40px_rgba(0,59,226,0.35)] sm:scale-100 scale-70">
              <p className="text-[13px] font-medium">Total Revenue</p>
              <p className="text-[10px] text-white/70">July 1-28</p>
              <p className="mt-1 text-[24px] leading-none font-bold">$120.29</p>
              <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-white/25">
                <div className="h-full w-[60%] rounded-full bg-[#C9F31D]" />
              </div>
            </div>

            {/* Year to date card */}
            <div className="absolute top-[25%] left-0 z-20 w-[160px] rounded-[18px] bg-[#003BE2] p-4 text-white shadow-[0_12px_40px_rgba(0,59,226,0.35)] sm:scale-100 scale-70">
              <p className="text-[12px] font-medium">Year to Date</p>
              <p className="text-[10px] text-white/70">2023</p>
              <p className="mt-1 text-[20px] leading-none font-bold">
                $1,200.38
              </p>
              <span className="mt-2 inline-block rounded-full bg-[#C9F31D] px-2.5 py-1 text-[10px] font-bold text-black">
                +12$
              </span>
            </div>

            {/* Girl — large, bottom-aligned */}
            <Image
              src="/stats/girl.png"
              alt="Smiling creator with headphones holding a tablet"
              width={579}
              height={719}
              priority
              className="absolute bottom-0 left-[5%] z-20 w-[500px] select-none md:w-[579px]"
            />

            {/* Lime spring */}
            <Image
              src="/stats/spring-for-girl.png"
              alt=""
              width={217}
              height={216}
              aria-hidden="true"
              className="absolute top-[40%] left-[70%] md:top-[10%] md:left-[55%] z-31 w-[90px] select-none md:w-[217px]"
            />

            {/* Happy students card */}
            <div className="absolute right-[-5%] md:right-[4%] rounded-2xl bottom-[20%] md:bottom-[30%] z-20 scale-70 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:scale-100">
              <HappyStudents />
            </div>
          </div>

          <div>
            <h2 className="text-[30px] leading-[1.2] font-bold tracking-tight text-[#040819] md:text-[42px]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-6 max-w-[520px] text-[14.5px] leading-[1.8] text-gray-600">
              <span className="font-bold text-gray-900">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-5">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[15.5px] font-medium text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
