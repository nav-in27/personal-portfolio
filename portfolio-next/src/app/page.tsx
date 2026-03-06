"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CurrentlyBuildingSection from "@/components/CurrentlyBuildingSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import SectionIndicator from "@/components/SectionIndicator";
import NexusCardModal from "@/components/NexusCard";
import TerminalMode from "@/components/TerminalMode";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [nexusOpen, setNexusOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Main Portfolio */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <Navbar onNexusClick={() => setNexusOpen(true)} onTerminalClick={() => setTerminalOpen(true)} />
        <SectionIndicator />
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CurrentlyBuildingSection />
        <CertificationsSection />
        <ContactSection onNexusClick={() => setNexusOpen(true)} />
        <ScrollToTop />
      </motion.main>

      {/* Nexus Card Modal */}
      <NexusCardModal isOpen={nexusOpen} onClose={() => setNexusOpen(false)} />

      {/* Terminal Mode Modal */}
      <TerminalMode isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
