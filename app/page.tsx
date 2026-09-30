import HeroSection from "@/sections/HeroSection";
import LogoStrip from "@/sections/LogoStrip";
import CoursesSection from "@/sections/CoursesSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <LogoStrip />
      <CoursesSection />
      <Footer />
    </>
  );
}
