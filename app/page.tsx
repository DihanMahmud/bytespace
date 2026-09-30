import HeroSection from "@/sections/HeroSection";
import LogoStrip from "@/sections/LogoStrip";
import CoursesSection from "@/sections/CoursesSection";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import JoinUs from "@/sections/JoinUs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <LogoStrip />
      <CoursesSection />
      <Stats />
      <JoinUs />
      <Testimonials />
      <Footer />
    </>
  );
}
