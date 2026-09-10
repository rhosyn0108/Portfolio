import React, { useState } from 'react';
import { ArrowUpRight, Shield, Layers, FileText, CheckCircle2, X, ExternalLink, Play, Sparkles, Copy, Check } from 'lucide-react';
import { Language, EngagementProject } from '../types';
import { selectedProjects } from '../data/portfolioData';
import { LiveDemoModal } from './LiveDemoModal';

interface ProjectsSectionProps {
  language: Language;
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language, onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<EngagementProject | null>(null);
  const [liveDemoOpen, setLiveDemoOpen] = useState(false);
  const [demoUrl, setDemoUrl] = useState('/market_channel_kpi.html');
  const [localPath, setLocalPath] = useState(
    'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html'
  );
  const [copiedPath, setCopiedPath] = useState(false);

  const handleLaunchDemo = (
    url: string = '/market_channel_kpi.html',
    path: string = 'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html'
  ) => {
    setDemoUrl(url);
    setLocalPath(path);
    setLiveDemoOpen(true);
  };

  const handleCopyPath = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(path);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2500);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {language === 'ko' ? '주요 실무 프로젝트 & 데모' : 'SELECTED WORKS & LIVE DEMO'}
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
              {language === 'ko' ? '주요 감사 및 데이터 프로젝트' : 'MY SELECTED ENGAGEMENTS'}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              {language === 'ko'
                ? '디지털 어슈어런스 & AI 데이터 분석 실무'
                : 'DIGITAL ASSURANCE & DATA ANALYTICS'}
            </span>
            <button
              type="button"
              onClick={() => handleLaunchDemo()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Selected Works Grid - High Contrast Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((proj, idx) => {
            const isLiveDemo = proj.hasLiveDemo;

            return (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                onClick={() => setSelectedProject(proj)}
                className={`bg-white border transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-xl p-6 sm:p-8 relative ${
                  isLiveDemo
                    ? 'border-emerald-600/60 hover:border-emerald-700 ring-1 ring-emerald-500/20'
                    : 'border-black/15 hover:border-black'
                }`}
              >
                {/* Top Meta Bar */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black transition-colors">
                        {proj.number}
                      </span>
                      {isLiveDemo && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          LIVE DEMO AVAILABLE
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {language === 'ko' ? proj.categoryKo : proj.categoryEn}
                    </span>
                  </div>

                  {/* Visual Abstract Graphic Banner */}
                  <div
                    className={`w-full h-44 p-5 flex flex-col justify-between mb-6 relative overflow-hidden transition-transform group-hover:scale-[1.01] ${
                      isLiveDemo
                        ? 'bg-gradient-to-br from-neutral-950 via-slate-900 to-emerald-950 text-white border border-emerald-500/30'
                        : 'bg-neutral-950 text-white'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                        ENGAGEMENT {idx + 1}
                      </span>
                      {isLiveDemo ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLaunchDemo(proj.liveDemoUrl, proj.localFilePath);
                          }}
                          className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md transition-transform hover:scale-105 cursor-pointer z-10"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Live Demo</span>
                        </button>
                      ) : (
                        <div className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-emerald-400 uppercase">
                        CLIENT / PRACTICE DOMAIN
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-200">
                        {language === 'ko' ? proj.clientTypeKo : proj.clientTypeEn}
                      </div>
                      {isLiveDemo && proj.localFilePath && (
                        <div className="text-[10px] font-mono text-neutral-400 truncate max-w-full">
                          📄 market_channel_kpi.html
                        </div>
                      )}
                    </div>

                    {/* Aesthetic grid overlay */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    ></div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl uppercase font-black tracking-tight text-neutral-950 group-hover:text-black mb-3">
                    {language === 'ko' ? proj.titleKo : proj.titleEn}
                  </h3>

                  {/* Objective Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                    {language === 'ko' ? proj.objectiveKo : proj.objectiveEn}
                  </p>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-6 border-t border-neutral-150 flex items-center justify-between mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:underline">
                    {language === 'ko' ? '상세 업무 및 절차 보기' : 'Explore Engagement'}
                  </span>

                  {isLiveDemo ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLaunchDemo(proj.liveDemoUrl, proj.localFilePath);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current text-emerald-400" />
                        <span>Live Demo ↗</span>
                      </button>
                    </div>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Assurance Workflow Section */}
        <div className="mt-20 sm:mt-28 bg-white border border-black/15 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Heading & Call to action */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.05] mb-4">
                  {language === 'ko' ? (
                    <>
                      체계적인 3단계<br />
                      디지털 감사 프로세스
                    </>
                  ) : (
                    <>
                      DIGITAL TRUST<br />
                      IN 3 RIGOROUS STEPS
                    </>
                  )}
                </h3>
                <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                  {language === 'ko'
                    ? '사전 환경 분석부터 실증 테스트, 미비점 개선 및 최종 감사보고서 작성까지 철저한 글로벌 스탠다드 감사 방법론을 적용합니다.'
                    : 'From preliminary risk scoping to substantive control testing and final executive assurance reporting, following strict Deloitte & global standards.'}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenContact}
                className="w-fit px-6 py-3 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>{language === 'ko' ? '컨설팅 문의하기' : "Let's Talk"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: 3 Steps Cards */}
            <div className="lg:col-span-7 space-y-4">
              {/* Step 1 */}
              <div className="p-6 bg-[#f7f7f8] border border-neutral-200">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-editorial text-2xl font-black text-neutral-950">01</span>
                  <h4 className="font-bold text-sm sm:text-base uppercase tracking-tight text-neutral-900">
                    {language === 'ko'
                      ? '범위 획정 및 위험 평가 (Planning & Risk Scoping)'
                      : 'Discovery & Risk Scoping'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-10">
                  {language === 'ko'
                    ? '기업의 IT 시스템 아키텍처(ERP, DB, 서버, 네트워크)와 비즈니스 프로세스를 분석하여 핵심 감사 대상 및 RCM(Risk & Control Matrix)을 수립합니다.'
                    : 'Analyze enterprise architecture, data flows, and regulatory requirements to establish the audit perimeter and Risk & Control Matrix.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 bg-[#f7f7f8] border border-neutral-200">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-editorial text-2xl font-black text-neutral-950">02</span>
                  <h4 className="font-bold text-sm sm:text-base uppercase tracking-tight text-neutral-900">
                    {language === 'ko'
                      ? '설계 및 운영 효과성 테스트 (Design & Operating Testing)'
                      : 'Design & Operating Effectiveness Testing'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-10">
                  {language === 'ko'
                    ? 'ITGC(접근보안, 프로그램 변경, 시스템 운영) 및 ITAC 자동통제 샘플링 실증 테스트를 수행하여 통제의 지속적 유효성을 점검합니다.'
                    : 'Execute comprehensive sample testing on ITGC domains, automated application logic, interfaces, and key report (IPE) completeness.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 bg-[#f7f7f8] border border-neutral-200">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-editorial text-2xl font-black text-neutral-950">03</span>
                  <h4 className="font-bold text-sm sm:text-base uppercase tracking-tight text-neutral-900">
                    {language === 'ko'
                      ? '미비점 개선 자문 및 보고서 발행 (Remediation & Final Report)'
                      : 'Remediation Advisory & Assurance Reporting'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-10">
                  {language === 'ko'
                    ? '발견된 통제 미비점(Deficiencies)에 대한 실질적인 보완 통제 방안을 자문하고, 공신력 있는 회계감사 증빙 및 SOC 1/2 보고서를 완성합니다.'
                    : 'Deliver root-cause remediation guidance and issue authoritative audit documentation and bilingual SOC 1 / SOC 2 reports.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Detail Modal */}
      {selectedProject && (
        <div
          id="project-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            id="project-modal-container"
            className="bg-white max-w-2xl w-full p-6 sm:p-8 border border-black shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black border border-neutral-200 hover:border-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pb-4 border-b border-neutral-200 pr-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                  {selectedProject.number} · {language === 'ko' ? selectedProject.categoryKo : selectedProject.categoryEn}
                </span>
                {selectedProject.hasLiveDemo && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE DEMO
                  </span>
                )}
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl uppercase font-black text-neutral-950 mt-1">
                {language === 'ko' ? selectedProject.titleKo : selectedProject.titleEn}
              </h3>
              <div className="text-xs font-semibold text-neutral-600 mt-1">
                {language === 'ko' ? '대상 분야: ' : 'Sector: '}
                <span className="text-neutral-900 font-bold">
                  {language === 'ko' ? selectedProject.clientTypeKo : selectedProject.clientTypeEn}
                </span>
              </div>
            </div>

            {/* Live Demo Banner if applicable */}
            {selectedProject.hasLiveDemo && (
              <div className="mb-6 p-4 bg-neutral-900 text-white border border-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>실시간 동작 데모 대시보드 (Live Demo)</span>
                  </div>
                  <div className="text-[11px] text-neutral-300 mt-0.5">
                    마케팅 채널별 KPI 성과 지표를 실시간 시각화한 대시보드를 직접 체험하실 수 있습니다.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleLaunchDemo(selectedProject.liveDemoUrl, selectedProject.localFilePath);
                  }}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition cursor-pointer shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Live Demo 열기 ↗</span>
                </button>
              </div>
            )}

            {/* Modal Body */}
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  {language === 'ko' ? '프로젝트 목표' : 'ENGAGEMENT OBJECTIVE'}
                </div>
                <p className="text-neutral-800 font-medium leading-relaxed bg-neutral-50 p-3.5 border border-neutral-200">
                  {language === 'ko' ? selectedProject.objectiveKo : selectedProject.objectiveEn}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  {language === 'ko' ? '상세 수행 범위 및 절차' : 'AUDIT SCOPE & METHODOLOGY'}
                </div>
                <ul className="space-y-2">
                  {(language === 'ko' ? selectedProject.scopeKo : selectedProject.scopeEn).map(
                    (scopeItem, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{scopeItem}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  {language === 'ko' ? '핵심 성과 및 가치' : 'DELIVERED VALUE & OUTCOMES'}
                </div>
                <div className="space-y-2">
                  {(language === 'ko' ? selectedProject.outcomesKo : selectedProject.outcomesEn).map(
                    (outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="p-3 bg-neutral-950 text-white text-xs font-medium"
                      >
                        {outcome}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Local File Path Reference if present */}
              {selectedProject.localFilePath && (
                <div className="p-3 bg-neutral-100 border border-neutral-300 text-xs">
                  <div className="font-bold text-neutral-700 uppercase tracking-wider text-[10px] mb-1">
                    REFERENCE FILE PATH
                  </div>
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-neutral-600 break-all">
                    <span>{selectedProject.localFilePath}</span>
                    <button
                      type="button"
                      onClick={(e) => handleCopyPath(selectedProject.localFilePath!, e)}
                      className="px-2 py-1 bg-white border border-neutral-300 hover:border-black shrink-0 text-neutral-800 cursor-pointer"
                    >
                      {copiedPath ? '복사됨' : '복사'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-bold uppercase border border-neutral-300 hover:border-black cursor-pointer"
              >
                {language === 'ko' ? '닫기' : 'Close'}
              </button>

              {selectedProject.hasLiveDemo && (
                <button
                  type="button"
                  onClick={() => {
                    handleLaunchDemo(selectedProject.liveDemoUrl, selectedProject.localFilePath);
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Live Demo 실행 ↗</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onOpenContact();
                }}
                className="px-5 py-2 text-xs font-bold uppercase bg-black text-white hover:bg-neutral-800 cursor-pointer"
              >
                {language === 'ko' ? '프로젝트 문의' : 'Inquire Advisory'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Demo Modal Viewer */}
      <LiveDemoModal
        isOpen={liveDemoOpen}
        onClose={() => setLiveDemoOpen(false)}
        language={language}
        demoUrl={demoUrl}
        localPath={localPath}
      />
    </section>
  );
};
