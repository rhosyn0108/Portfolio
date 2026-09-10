import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Globe, Printer, Mail, Menu, X, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenContact: () => void;
  onPrintCv: () => void;
  onOpenLiveDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenContact,
  onPrintCv,
  onOpenLiveDemo,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelKo: '소개', labelEn: 'About' },
    { href: '#services', labelKo: '전문분야', labelEn: 'Services' },
    { href: '#projects', labelKo: '주요수행', labelEn: 'Works' },
    { href: '#career', labelKo: '경력·학력', labelEn: 'Career' },
    { href: '#activities', labelKo: '활동', labelEn: 'Activities' },
    { href: '#faq', labelKo: 'FAQ', labelEn: 'FAQ' },
  ];

  return (
    <header
      id="top-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7f7f8]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-xs'
          : 'bg-[#f7f7f8] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tighter text-lg leading-none uppercase">
                {language === 'ko' ? profileData.nameKo : profileData.nameEn}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-neutral-500 uppercase mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Deloitte Digital Assurance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-tight text-neutral-700 hover:text-black transition-colors"
              >
                {language === 'ko' ? link.labelKo : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              type="button"
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-none border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 transition-all cursor-pointer"
              title="Toggle Language (KO / EN)"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-600" />
              <span>{language === 'ko' ? 'ENG' : 'KOR'}</span>
            </button>

            {/* Live Demo Button */}
            {onOpenLiveDemo && (
              <button
                id="nav-live-demo-btn"
                type="button"
                onClick={onOpenLiveDemo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none border border-emerald-600 bg-emerald-50 text-emerald-900 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shadow-2xs"
                title="AI 데이터 분석 및 마케팅 채널 KPI 대시보드 데모"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Print CV */}
            <button
              id="print-cv-btn"
              type="button"
              onClick={onPrintCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider rounded-none border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 transition-all cursor-pointer"
              title="Print or Save Resume as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-600" />
              <span>{language === 'ko' ? '이력서 인쇄' : 'Print CV'}</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              id="lets-talk-btn"
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
            >
              <span>{language === 'ko' ? '문의하기' : "Let's Talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-lang-btn"
              type="button"
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="px-2.5 py-1 text-xs font-bold border border-neutral-300 bg-white"
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-neutral-300 bg-white text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="sm:hidden border-b border-black/10 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold py-2 border-b border-neutral-100 text-neutral-800"
              >
                {language === 'ko' ? link.labelKo : link.labelEn}
              </a>
            ))}
            {onOpenLiveDemo && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLiveDemo();
                }}
                className="w-full py-2.5 px-3 border border-emerald-600 bg-emerald-50 text-emerald-900 font-bold text-xs uppercase flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>AI 데이터 분석 Live Demo</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="pt-3 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPrintCv();
              }}
              className="flex-1 py-2.5 text-xs font-bold uppercase border border-black bg-white flex items-center justify-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              {language === 'ko' ? '이력서 인쇄' : 'Print CV'}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2.5 text-xs font-bold uppercase bg-black text-white flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              {language === 'ko' ? '문의하기' : "Let's Talk"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
