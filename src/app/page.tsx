"use client";

import SplashScreen from "../component/SplashScreen";
import Navbar from "../component/Navbar";
import HeroSection from "../component/section/HeroSection";
import AboutSection from "../component/section/AboutSection";
import ExperienceSection from "../component/section/ExperienceSection";
import ProjectSection from "../component/section/ProjectSection";
import ContactSection from "../component/section/ContactSection";
import Footer from "../component/Footer";
import Skills from "@/component/section/Skills";
import ScrollToTop from "../component/ScrollTop";
import BackgroundAnimation from "../component/BackgroundAnimation";

export default function Page() {
  return (
    <SplashScreen>
      <Navbar />
      <HeroSection />
      <BackgroundAnimation>
        <AboutSection />
        <ExperienceSection />
        <Skills />
        <ProjectSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </BackgroundAnimation>

    </SplashScreen>
  );
}
