"use client"
import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';
import { useEffect, useState } from 'react';
import { track } from '@/lib/ga-tags';

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    setPageLoaded(true);
    if (process.env.NODE_ENV === 'production') {
      console.log = () => { };
      console.warn = () => { };
      console.error = () => { };
    }
  }, [])

  useEffect(() => {
    if (pageLoaded) {
      track("Portfolio_Opened")
    }
  }, [pageLoaded])

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
