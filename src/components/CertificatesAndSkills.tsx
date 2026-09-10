import React from 'react';
import { Award, CheckCircle, ShieldCheck, Wrench, Languages, Code2, Database, Shield } from 'lucide-react';
import { Language } from '../types';
import { certificatesData, technicalSkills } from '../data/portfolioData';

interface CertificatesAndSkillsProps {
  language: Language;
}

export const CertificatesAndSkills: React.FC<CertificatesAndSkillsProps> = ({ language }) => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
            {language === 'ko' ? '자격 및 기술 스택' : 'CERTIFICATIONS & SKILLS'}
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
            {language === 'ko' ? '공인 자격증 및 전문 역량' : 'CERTIFICATES & EXPERTISE'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-medium">
            {language === 'ko'
              ? '국가기술자격 및 국가공인 라이선스, IT 감사와 정보보안 엔지니어링 실무에 활용되는 핵심 기술 매트릭스입니다.'
              : 'Official national qualifications, security credentials, and technical audit toolkits applied in enterprise digital assurance.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Certificates Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-black" />
              <span>{language === 'ko' ? '보유 자격 및 라이선스' : 'OFFICIAL LICENSES & CREDENTIALS'}</span>
            </h3>

            <div className="space-y-3">
              {certificatesData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-neutral-300 bg-[#f7f7f8] hover:border-black transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                      {cert.type}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                      {language === 'ko' ? cert.nameKo : cert.nameEn}
                    </h4>
                    <div className="text-xs text-neutral-600 font-medium">
                      발급처: {language === 'ko' ? cert.issuerKo : cert.issuerEn}
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-neutral-900 shrink-0 px-2 py-1 bg-white border border-neutral-200">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Competencies Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>{language === 'ko' ? '실무 기술 및 감사 역량 매트릭스' : 'TECHNICAL SKILLS & TOOLKIT'}</span>
            </h3>

            {/* Assurance & Internal Controls */}
            <div className="border border-neutral-300 p-6 bg-[#f7f7f8]">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {language === 'ko' ? '디지털 감사 & 내부회계관리제도' : 'IT AUDIT & INTERNAL CONTROLS'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.assurance.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-neutral-800 border border-neutral-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Engineering */}
            <div className="border border-neutral-300 p-6 bg-[#f7f7f8]">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {language === 'ko' ? '시스템 및 정보보안 엔지니어링' : 'SECURITY ENGINEERING & INFRASTRUCTURE'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.security.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-neutral-800 border border-neutral-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools, Analysis & Bilingual */}
            <div className="border border-neutral-300 p-6 bg-[#f7f7f8]">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {language === 'ko' ? '감사 도구, 언어 및 커뮤니케이션' : 'AUDIT TOOLS, DATA & GLOBAL FLUENCY'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.toolsAndLangs.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-neutral-800 border border-neutral-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
