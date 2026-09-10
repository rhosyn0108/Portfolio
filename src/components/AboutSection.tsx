import React from 'react';
import { ArrowRight, CheckSquare, Sparkles, Award, Shield, FileText } from 'lucide-react';
import { Language } from '../types';
import { profileData, metricStats } from '../data/portfolioData';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Label */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4">
                <span>{language === 'ko' ? '소개' : 'ABOUT SOYUN'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 mb-6">
                {language === 'ko' ? (
                  <>
                    글로벌 감각과<br />
                    IT 보안 역량을 겸비한<br />
                    <span className="text-neutral-500">Digital Assurance</span>
                  </>
                ) : (
                  <>
                    BRIDGING<br />
                    GLOBAL BUSINESS<br />
                    <span className="text-neutral-500">& IT SECURITY</span>
                  </>
                )}
              </h2>
              <p className="text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                {language === 'ko'
                  ? '딜로이트 안진회계법인 A&A 본부 Digital Assurance 팀 소속 시니어 컨설턴트로서, 대기업 및 상장사, 테크·클라우드 기업의 IT 감사 및 내부통제 인증 업무를 전문적으로 수행하고 있습니다.'
                  : 'Senior Consultant in Digital Assurance at Deloitte Anjin LLC (A&A), conducting rigorous IT audit, internal controls testing, and SOC attestation for enterprise clients.'}
              </p>

              {/* Quick Info Box */}
              <div className="p-4 bg-white border border-neutral-200 text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-semibold">{language === 'ko' ? '소속' : 'Organization'}</span>
                  <span className="font-bold text-neutral-900">딜로이트 안진회계법인</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-semibold">{language === 'ko' ? '본부/팀' : 'Department'}</span>
                  <span className="font-bold text-neutral-900">A&A - Digital Assurance</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-semibold">{language === 'ko' ? '직급' : 'Position'}</span>
                  <span className="font-bold text-neutral-900">Senior Consultant (시니어)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500 font-semibold">{language === 'ko' ? '재직기간' : 'Period'}</span>
                  <span className="font-bold text-emerald-700">2022.11 ~ 현재 (재직 중)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Editorial Copy & Metrics */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Bold Manifesto Heading */}
              <p className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.12] text-neutral-950 uppercase font-black mb-8">
                {language === 'ko' ? (
                  <>
                    IT 감사, IT 내부회계관리제도 구축 및 운영,{' '}
                    <span className="bg-neutral-950 text-white px-1.5 py-0.5">SOC 1 / SOC 2 인증</span>{' '}
                    분야의 독보적 전문성을 보유한{' '}
                    <span className="underline decoration-2 underline-offset-4">Digital Assurance</span>{' '}
                    컨설턴트입니다.
                  </>
                ) : (
                  <>
                    A DIGITAL ASSURANCE SENIOR CONSULTANT SPECIALIZING IN{' '}
                    <span className="bg-neutral-950 text-white px-1.5 py-0.5">IT AUDIT, ITGC/ITAC</span>,{' '}
                    AND SOC 1 & 2 ATTESTATIONS. COMBINING INTELLECTUAL DEPTH WITH{' '}
                    <span className="underline decoration-2 underline-offset-4">SYSTEM SECURITY ENGINEERING</span>.
                  </>
                )}
              </p>

              {/* In-depth narrative */}
              <div className="prose prose-neutral max-w-none text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 mb-12">
                <p>
                  {language === 'ko' ? profileData.bioKo : profileData.bioEn}
                </p>
                <p>
                  {language === 'ko'
                    ? '서울여자대학교에서 영어영문학과 글로벌문화산업·MICE를 복수전공하고 미국 펜실베이니아 소재 Cedar Crest College에서 교환학생 과정을 이수하며 다문화 커뮤니케이션과 영문 문서화 능력을 연마했습니다. 이후 KH정보교육원에서 국가직무능력표준(NCS) 기반 정보시스템 구축 및 보안엔지니어링(20010206) 전문가 과정을 성공적으로 수료하여, 시스템 아키텍처와 네트워크, 데이터베이스 보안에 이르는 기술적 깊이를 완성했습니다.'
                    : 'Holding a dual major in English Language & Literature and Global Cultural Industry & MICE from Seoul Women\'s University, and completing an academic year abroad at Cedar Crest College (USA), Soyun Rho possesses exceptional English communication proficiency. Coupling this with the rigorous NCS Security Engineering (20010206) qualification, she bridges complex enterprise IT architectures with statutory audit requirements.'}
                </p>
              </div>
            </div>

            {/* Metric Statistics Grid (inspired by the 400+ / 85+ / 10+ grid from the image) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-neutral-300">
              {metricStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border border-neutral-200 transition-all hover:border-black group"
                >
                  <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 group-hover:text-black">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-2">
                    {language === 'ko' ? stat.labelKo : stat.labelEn}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1 leading-snug">
                    {language === 'ko' ? stat.descKo : stat.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
