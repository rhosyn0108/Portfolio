import React, { useState } from 'react';
import { Briefcase, GraduationCap, Globe2, ShieldCheck, Calendar, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { profileData, educationData } from '../data/portfolioData';

interface CareerAndEducationProps {
  language: Language;
}

export const CareerAndEducation: React.FC<CareerAndEducationProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'career' | 'education'>('all');

  return (
    <section id="career" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {language === 'ko' ? '경력 및 학력' : 'CAREER & EDUCATION'}
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
              {language === 'ko' ? '경력과 글로벌 학력 이력' : 'PROFESSIONAL TRAJECTORY'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            {(['all', 'career', 'education'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-black'
                }`}
              >
                {tab === 'all'
                  ? language === 'ko' ? '전체' : 'All'
                  : tab === 'career'
                  ? language === 'ko' ? '경력 (Career)' : 'Career'
                  : language === 'ko' ? '학력 (Education)' : 'Education'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {/* Career Block (Deloitte Anjin LLC) */}
          {(activeTab === 'all' || activeTab === 'career') && (
            <div
              id="career-deloitte-card"
              className="bg-white border-2 border-black p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
            >
              {/* Green active status bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      CURRENT POSITION · AUDIT & ASSURANCE
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl uppercase font-black text-neutral-950">
                      딜로이트 안진회계법인 (Deloitte Anjin LLC)
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {language === 'ko' ? '2022.11 ~ 현재 (재직 중)' : 'Nov 2022 ~ Present (Active)'}
                  </span>
                </div>
              </div>

              {/* Position and Details */}
              <div className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-neutral-50 border border-neutral-200 text-sm">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-neutral-500">본부 및 부서</div>
                    <div className="font-bold text-neutral-900 mt-0.5">A&A - Digital Assurance</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-neutral-500">직급</div>
                    <div className="font-bold text-neutral-900 mt-0.5">Senior Consultant (시니어 컨설턴트)</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-neutral-500">위치</div>
                    <div className="font-bold text-neutral-900 mt-0.5">대한민국 서울 여의도 Two IFC</div>
                  </div>
                </div>

                {/* Core Responsibilities Grid */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    {language === 'ko' ? '핵심 담당 직무 및 수행 업무' : 'PRIMARY RESPONSIBILITIES & DOMAINS'}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* IT Audit */}
                    <div className="p-4 bg-white border border-neutral-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <h4 className="font-bold text-sm text-neutral-900 uppercase">
                          {language === 'ko' ? 'IT 감사 (IT Audit)' : 'IT Audit'}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {language === 'ko'
                          ? '기업 IT 시스템 및 내부통제 환경 정밀 검토 및 평가. 데이터베이스, 서버, ERP 등 핵심 정보자산의 위험성 진단.'
                          : 'Comprehensive examination and risk assessment of enterprise IT systems and internal control environments.'}
                      </p>
                    </div>

                    {/* ITGC / ITAC */}
                    <div className="p-4 bg-white border border-neutral-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <h4 className="font-bold text-sm text-neutral-900 uppercase">
                          {language === 'ko' ? 'IT 내부회계관리제도' : 'ITGC & ITAC'}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {language === 'ko'
                          ? 'K-SOX 기준 IT 일반통제(ITGC) 및 자동통제(ITAC) 구축 및 연간 운영 적정성 평가 컨설팅 수행.'
                          : 'Design and operating effectiveness testing for IT General Controls (ITGC) and Application Controls (ITAC) under K-SOX.'}
                      </p>
                    </div>

                    {/* SOC Certification */}
                    <div className="p-4 bg-white border border-neutral-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <h4 className="font-bold text-sm text-neutral-900 uppercase">
                          {language === 'ko' ? 'SOC 인증 보고서' : 'SOC Attestation'}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {language === 'ko'
                          ? 'SSAE 18 / ISAE 3402 기준 SOC 1, SOC 2 인증 평가 및 글로벌 외부 제출용 정밀 보고서 작성 총괄.'
                          : 'SOC 1 & SOC 2 certification testing and official assurance reporting in compliance with international audit standards.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education & Overseas Experience Grid */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                {language === 'ko' ? '학력 및 해외 연수 경험' : 'EDUCATION & OVERSEAS ACADEMICS'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-300 p-6 sm:p-8 flex flex-col justify-between hover:border-black transition-colors"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 bg-neutral-100 text-neutral-900">
                            {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <Globe2 className="w-5 h-5" />}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-neutral-400">
                              {language === 'ko' ? edu.statusKo : edu.statusEn}
                            </span>
                            <h3 className="font-editorial text-xl sm:text-2xl uppercase font-black text-neutral-950">
                              {language === 'ko' ? edu.institutionKo : edu.institutionEn}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-bold text-neutral-900">
                          {language === 'ko' ? edu.degreeKo : edu.degreeEn}
                        </div>
                        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {language === 'ko' ? edu.locationKo : edu.locationEn}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 pt-2 text-xs text-neutral-600">
                        {(language === 'ko' ? edu.descriptionKo : edu.descriptionEn).map(
                          (desc, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-neutral-900 shrink-0 mt-1.5"></span>
                              <span>{desc}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
