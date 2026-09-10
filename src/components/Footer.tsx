import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail, Linkedin, Printer } from 'lucide-react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  language: Language;
  onOpenContact: () => void;
  onPrintCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenContact, onPrintCv }) => {
  return (
    <footer id="footer-section" className="bg-[#f7f7f8] border-t border-black/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-black/10">
          {/* Col 1: Main Pages */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
              <li>
                <a href="#hero-section" className="hover:underline">
                  {language === 'ko' ? '홈 (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  {language === 'ko' ? '소개 (About Soyun)' : 'About Soyun'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  {language === 'ko' ? '전문분야 (Services)' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  {language === 'ko' ? '주요 프로젝트 (Works)' : 'Works'}
                </a>
              </li>
              <li>
                <a href="#career" className="hover:underline">
                  {language === 'ko' ? '경력 및 학력 (Career)' : 'Career & Education'}
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:underline">
                  {language === 'ko' ? '대외활동 (Activities)' : 'Activities'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Core Practice */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              CORE SPECIALTIES
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
              <li>
                <a href="#services" className="hover:underline">
                  IT Audit (IT 감사)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  ITGC & ITAC (내부회계)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  SOC 1 / SOC 2 Attestation
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  Security Engineering (NCS)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  컴퓨터활용능력 1급
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onPrintCv}
                  className="hover:underline text-left cursor-pointer flex items-center gap-1 text-emerald-800"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {language === 'ko' ? '이력서 인쇄 / PDF 저장' : 'Printable Resume (PDF)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Dark Card (matching the Dossier newsletter / subscribe block) */}
          <div className="md:col-span-6">
            <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-between h-full border border-neutral-800">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="font-editorial text-2xl sm:text-3xl uppercase font-black tracking-tight text-white">
                  DELOITTE ANJIN DIGITAL ASSURANCE
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
                  {language === 'ko'
                    ? '노소윤 시니어 컨설턴트와의 협업 및 IT 감사, 내부회계관리제도 컨설팅 문의를 환영합니다.'
                    : 'Open for enterprise digital assurance inquiries, IT audit consultations, and professional engagements.'}
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{language === 'ko' ? '이메일 문의' : 'Email Soyun'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-neutral-700 hover:border-white text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: External Links Strip */}
        <div className="py-6 border-b border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold uppercase tracking-wider">
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center justify-between p-2 hover:bg-black/5"
          >
            <span>soyun0108@naver.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 hover:bg-black/5"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <div className="flex items-center justify-between p-2 text-neutral-500">
            <span>BIRTH: 1999.01.08</span>
          </div>
          <div className="flex items-center justify-between p-2 text-neutral-500">
            <span>DELOITTE ANJIN</span>
          </div>
        </div>

        {/* Copyright Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            COPYRIGHT © {new Date().getFullYear()} SOYUN RHO (노소윤) · ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[11px] text-neutral-400">
            IT AUDIT & SECURITY SPECIALIST · SENIOR CONSULTANT
          </div>
        </div>
      </div>
    </footer>
  );
};
