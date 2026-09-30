"use client";

import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="grid-view relative w-full overflow-hidden bg-[#003BE2]">
      {/* Top-left lime spring */}
      <Image
        src="/join-us/left-spring-yellow.png"
        alt=""
        width={266}
        height={225}
        aria-hidden="true"
        className="pointer-events-none absolute top-[0%] left-[0%] w-32 select-none md:w-[170px] lg:w-[266px]"
      />
      {/* Upper-left white zigzag */}
      <Image
        src="/join-us/left-spring-white.png"
        alt=""
        width={177}
        height={176}
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] left-[15%] w-12 select-none md:w-[80px] lg:w-[180px]"
      />
      {/* Left white cone */}
      <Image
        src="/join-us/left-cone-white.png"
        alt=""
        width={140}
        height={189}
        aria-hidden="true"
        className="pointer-events-none absolute top-[48%] left-[0%] w-16 select-none md:w-[100px] lg:w-[125px]"
      />
      {/* Bottom-left yellow ring */}
      <Image
        src="/join-us/left-ring-yellow.png"
        alt=""
        width={346}
        height={190}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[0%] left-[4%] w-40 select-none md:w-[220px] lg:w-[346px]"
      />

      {/* Top-right yellow pyramid */}
      <Image
        src="/join-us/right-cone-yellow.png"
        alt=""
        width={190}
        height={189}
        aria-hidden="true"
        className="pointer-events-none absolute top-[2%] right-[13%] w-16 select-none md:w-[110px] lg:w-[190px]"
      />
      {/* Right white cylinder */}
      <Image
        src="/join-us/right-cylinder-white.png"
        alt=""
        width={218}
        height={372}
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] right-[0%] w-20 select-none md:w-[130px] lg:w-[218px]"
      />
      {/* Bottom-right lime spring */}
      <Image
        src="/join-us/right-spring-yellow.png"
        alt=""
        width={334}
        height={199}
        aria-hidden="true"
        className="pointer-events-none absolute right-[3%] bottom-[0%] w-40 select-none md:w-[210px] lg:w-[334px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-8 py-20 text-center md:py-30">
        <h2 className="mx-auto text-[28px] leading-[1.25] font-semibold tracking-tight text-white md:text-[42px] mb-8">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-7 max-w-[900px] text-[13px] leading-[1.9] font-light text-white/85 md:text-[16px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join"
          className="mt-9 inline-flex h-[52px] items-center rounded-full bg-[#C9F31D] px-10 text-[15px] font-medium text-black transition-colors hover:bg-[#d8ff4d]"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
