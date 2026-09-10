/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesAccordion } from './components/ServicesAccordion';
import { ProjectsSection } from './components/ProjectsSection';
import { CareerAndEducation } from './components/CareerAndEducation';
import { ActivitiesSection } from './components/ActivitiesSection';
import { CertificatesAndSkills } from './components/CertificatesAndSkills';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PrintableResume } from './components/PrintableResume';
import { LiveDemoModal } from './components/LiveDemoModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [contactOpen, setContactOpen] = useState(false);
  const [liveDemoOpen, setLiveDemoOpen] = useState(false);
  const [demoUrl, setDemoUrl] = useState('/market_channel_kpi.html');
  const [localPath, setLocalPath] = useState(
    'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html'
  );

  const handlePrintCv = () => {
    window.print();
  };

  const handleOpenLiveDemo = (
    url: string = '/market_channel_kpi.html',
    path: string = 'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html'
  ) => {
    setDemoUrl(url);
    setLocalPath(path);
    setLiveDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-neutral-900 font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Screen Presentation (Hidden when printing) */}
      <div className="print:hidden flex flex-col flex-1">
        {/* Navigation Bar */}
        <Navbar
          language={language}
          setLanguage={setLanguage}
          onOpenContact={() => setContactOpen(true)}
          onPrintCv={handlePrintCv}
          onOpenLiveDemo={() => handleOpenLiveDemo()}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            language={language}
            onOpenContact={() => setContactOpen(true)}
          />

          {/* Marquee Strip 1: Core Assurance Disciplines */}
          <MarqueeStrip />

          {/* About Soyun & Metrics */}
          <AboutSection language={language} />

          {/* Core Services (Expandable Accordion) */}
          <ServicesAccordion language={language} />

          {/* Inverted Marquee Divider */}
          <MarqueeStrip inverted={true} text="DELOITTE DIGITAL ASSURANCE ✦ IT AUDIT ✦ ITGC ✦ ITAC ✦ SOC 1 & 2" />

          {/* Selected Work & 3-Step Assurance Workflow */}
          <ProjectsSection
            language={language}
            onOpenContact={() => setContactOpen(true)}
          />

          {/* Career & Academic Background */}
          <CareerAndEducation language={language} />

          {/* Activities & Projects */}
          <ActivitiesSection
            language={language}
            onOpenLiveDemo={handleOpenLiveDemo}
          />

          {/* Official Certificates & Technical Competencies */}
          <CertificatesAndSkills language={language} />

          {/* Frequently Asked Questions */}
          <FaqSection language={language} />
        </main>

        {/* High-Contrast Editorial Footer */}
        <Footer
          language={language}
          onOpenContact={() => setContactOpen(true)}
          onPrintCv={handlePrintCv}
        />

        {/* Contact Drawer Modal */}
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          language={language}
        />

        {/* Global Live Demo Modal */}
        <LiveDemoModal
          isOpen={liveDemoOpen}
          onClose={() => setLiveDemoOpen(false)}
          language={language}
          demoUrl={demoUrl}
          localPath={localPath}
        />
      </div>

      {/* Printable Clean A4 Resume for browser print / PDF export */}
      <PrintableResume language={language} />
    </div>
  );
}
