"use client";

import Image from "next/image";

const filtersRow1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const filtersRow2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const filtersRow3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const courses = [
  {
    title: "Learn Figma from Basic",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    avatars: [32, 12, 5, 8],
  },
  {
    title: "Build Digital Asset",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    avatars: [15, 22, 33, 41],
  },
  {
    title: "the Power of Big Data",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    avatars: [3, 16, 25, 29],
  },
  {
    title: "Balancing Productivity and Wellbeing",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    avatars: [11, 18, 24, 36],
  },
  {
    title: "Mastering Money Management",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    avatars: [9, 14, 27, 38],
  },
  {
    title: "From Idea to Startup Success",
    studio: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    avatars: [7, 19, 31, 45],
  },
];

const categories = [
  { label: "Design", src: "/category/design.png" },
  { label: "Development", src: "/category/development.png" },
  { label: "IT & Software", src: "/category/it-software.png" },
  { label: "Business", src: "/category/business.png" },
  { label: "Marketing", src: "/category/marketing.png" },
  { label: "Photography", src: "/category/photography.png" },
];

function FilterPill({ label, active = false }: { label: string; active?: boolean }) {
  if (label === "+ More") {
    return (
      <button
        type="button"
        className="rounded-full px-2 py-2.5 text-[13.5px] font-medium whitespace-nowrap text-[#003BE2] transition-colors hover:underline"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`rounded-full px-5 py-2.5 text-[13.5px] font-medium whitespace-nowrap transition-all ${
        active
          ? "bg-[#C9F31D] text-black shadow-[0_2px_12px_rgba(201,243,29,0.4)]"
          : "bg-[#F5F5F6] text-[#4b4b4e] hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

function GlassBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/30 px-3 py-[7px] text-[11px] leading-none font-medium whitespace-nowrap text-gray-900 shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-[12px]">
      {children}
    </span>
  );
}

function CourseCard({
  title,
  studio,
  image,
  avatars,
}: {
  title: string;
  studio: string;
  image: string;
  avatars: number[];
}) {
  return (
    <article className="flex w-full flex-col rounded-[24px] border border-gray-200/90 bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
      {/* Thumbnail */}
      <div className="relative h-[248px] w-full shrink-0 overflow-hidden rounded-[16px] bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover"
        />
        <div className="absolute right-3 bottom-3 left-3 flex items-center gap-2">
          <GlassBadge>17 Lessons</GlassBadge>
          <GlassBadge>2 hours 16 mins</GlassBadge>
          <GlassBadge>59 Comments</GlassBadge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate text-[18px] leading-snug font-bold tracking-tight text-gray-950">
            {title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 pt-0.5 text-[15px] font-medium text-gray-800">
            4.5
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#b6b6ba" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
        </div>

        <p className="mt-1.5 text-[13px] text-gray-500">
          by <span className="text-[#003BE2]">{studio}</span>
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
            {avatars.map((id, i) => (
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
    </article>
  );
}

export default function CoursesSection() {
  return (
    <div className="bg-white py-5">
      <section className="mx-auto w-full max-w-[1440px] px-8 pt-24 pb-16 md:px-12 lg:px-20">
        <div className="px-2 text-center md:px-6">
          <h2 className="mx-auto text-[32px] leading-[1.15] font-bold tracking-tight text-[#040819] md:text-[44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mx-auto mt-5 max-w-[880px] text-[14px] leading-[1.8] text-gray-400 md:text-[15.5px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {filtersRow1.map((f) => (
              <FilterPill key={f} label={f} active={f === "Featured"} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {filtersRow2.map((f) => (
              <FilterPill key={f} label={f} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {filtersRow3.map((f) => (
              <FilterPill key={f} label={f} />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/*  Explore  */}
      <section className="mx-auto w-full max-w-[1440px] px-8 pt-8 pb-24 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="mx-auto text-[26px] leading-snug font-bold tracking-tight text-[#040819] md:text-[32px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-4 max-w-[880px] text-[14px] leading-[1.8] text-gray-400 md:text-[15px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-18 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-gray-200/90 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
            >
              <Image
                src={cat.src}
                alt={cat.label}
                width={60}
                height={60}
                className="h-[52px] w-[52px] object-contain"
              />
              <span className="text-[14px] font-medium text-gray-800">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
