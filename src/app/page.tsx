'use client'
import Navbar from "@/components/Navbar";
import ClientsSlider from "@/components/clients-slider/ClientsSlider";
import Footer from "@/components/Footer";
import StartUpStories from "@/components/StartUpStories";
import GlobalPresence from "@/components/GlobalPresence";
import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";
import StartupDevelopment from "@/components/StartupDevelopment";
import OurStory from "@/components/OurStory";


export default function Home() {
  return (
    <div className="main">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Showcase */}
      <Showcase />

      {/* Startup development */}
      <StartupDevelopment />

      {/* Our Story */}
      <OurStory />

      {/* /Start up stories */}
      <StartUpStories />

      {/* Our Presence */}
      <GlobalPresence />

      {/* Clients Slider */}
      <ClientsSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
}
