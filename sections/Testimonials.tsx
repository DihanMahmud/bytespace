import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F3]">
      {/* Glow 1 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-8%] left-1/2 h-[300px] w-[30%] -translate-x-1/2 rounded-[100%] blur-[100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.55) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
        }}
      />
      {/* Glow 2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[4%] right-[-20%] h-[560px] w-[40%] rounded-[100%] blur-[110px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
        }}
      />
      {/* Glow 3 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-22%] left-[-48%] h-[560px] w-[100%] rounded-[100%] blur-[110px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.34) 0%, rgba(0,59,226,0) 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-8 pt-20 pb-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
          <h2 className="text-[30px] leading-[1.18] font-bold tracking-tight text-[#040819] md:text-[42px]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="max-w-[560px] text-[14.5px] leading-[1.75] text-gray-500 lg:justify-self-end">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[repeat(3,374px)] 2xl:justify-between 2xl:gap-0">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-auto min-h-[420px] w-full max-w-[480px] flex-col rounded-[24px] bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:max-w-none 2xl:h-[436px] 2xl:max-w-[374px] 2xl:overflow-hidden"
            >
              <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-black">
                {t.name}
              </h3>
              <p className="mt-1 text-[15px] font-normal text-[#003BE2]">
                {t.role}
              </p>
              <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
