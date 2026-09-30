import Image from "next/image";

const logos = [
  { src: "/logos/logo1.png", alt: "Logoipsum 1", width: 167, height: 41 },
  { src: "/logos/logo2.png", alt: "Logoipsum 2", width: 168, height: 41 },
  { src: "/logos/logo3.png", alt: "Logoipsum 3", width: 170, height: 41 },
  { src: "/logos/logo4.png", alt: "Logoipsum 4", width: 170, height: 41 },
  { src: "/logos/logo5.png", alt: "Logoipsum 5", width: 169, height: 42 },
];

export default function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="w-full bg-[#F1F1F3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-14 gap-y-8 px-8 py-16 md:px-12 md:py-20 lg:justify-between lg:px-20">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-[34px] w-auto object-contain opacity-90 md:h-[38px]"
          />
        ))}
      </div>
    </section>
  );
}
