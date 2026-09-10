import React from 'react';
import { Language } from '../types';
import { profileData, educationData, activitiesData, certificatesData } from '../data/portfolioData';

interface PrintableResumeProps {
  language: Language;
  profilePhoto?: string;
}

export const PrintableResume: React.FC<PrintableResumeProps> = ({ language, profilePhoto }) => {
  return (
    <div id="printable-resume" className="hidden print:block font-sans text-black p-8 max-w-4xl mx-auto bg-white">
      {/* Header with 3x4 Photo Slot */}
      <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-black tracking-tight">
            {profileData.nameKo} ({profileData.nameEn})
          </h1>
          <p className="text-sm font-bold uppercase text-neutral-800 mt-1">
            {language === 'ko'
              ? 'IT 감사 & 보안 전문가 / 시니어 컨설턴트 (Deloitte Anjin Digital Assurance)'
              : 'IT Audit & Security Specialist / Senior Consultant (Deloitte Anjin LLC)'}
          </p>

          <div className="mt-3 text-xs font-mono space-y-0.5 text-neutral-700">
            <div>EMAIL: {profileData.email}</div>
            <div>LINKEDIN: linkedin.com/in/soyun-rho-539a8921a</div>
            <div>BIRTH: {profileData.birth}</div>
          </div>
        </div>

        {/* 3x4cm Official Resume Photo Box */}
        <div className="w-24 aspect-[3/4] border-2 border-neutral-800 flex flex-col items-center justify-center text-center overflow-hidden shrink-0 bg-neutral-50">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="증명사진 (3×4)"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="p-1 text-[10px] font-mono text-neutral-500 flex flex-col items-center justify-center h-full">
              <span className="font-bold text-neutral-700">사 진</span>
              <span className="text-[9px] mt-0.5">(3 × 4 cm)</span>
            </div>
          )}
        </div>
      </div>

      {/* About Me */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider border-b border-black pb-1 mb-2">
          📌 {language === 'ko' ? '소개 (About Me)' : 'About Me'}
        </h2>
        <p className="text-xs leading-relaxed text-neutral-800">
          {language === 'ko' ? profileData.bioKo : profileData.bioEn}
        </p>
      </div>

      {/* Career */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider border-b border-black pb-1 mb-2">
          💼 {language === 'ko' ? '경력 사항 (Career / Work Experience)' : 'Work Experience'}
        </h2>
        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-xs text-black">
              딜로이트 안진회계법인 (Deloitte Anjin LLC)
            </span>
            <span className="text-[11px] font-mono font-bold text-neutral-700">
              2022.11 ~ 현재 (재직 중)
            </span>
          </div>
          <div className="text-[11px] font-semibold text-neutral-700 mb-1">
            A&A - Digital Assurance / Senior Consultant
          </div>
          <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1">
            <li>
              <strong>IT 감사 (IT Audit):</strong> 기업 IT 시스템 및 내부통제 환경 검토 및 평가
            </li>
            <li>
              <strong>IT 내부회계관리제도 (ITGC/ITAC):</strong> 구축 및 운영 평가 컨설팅
            </li>
            <li>
              <strong>SOC 인증 (SOC 1/2):</strong> SOC 1, SOC 2 인증 및 검토 보고서 작성
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider border-b border-black pb-1 mb-2">
          🎓 {language === 'ko' ? '학력 (Education)' : 'Education'}
        </h2>
        <div className="space-y-3">
          {educationData.map((edu, idx) => (
            <div key={idx} className="text-xs">
              <div className="flex justify-between font-bold">
                <span>{edu.institutionKo} ({edu.institutionEn})</span>
                <span className="font-mono text-[11px]">{edu.period}</span>
              </div>
              <div className="text-neutral-700 font-medium">
                {edu.degreeKo} ({edu.statusKo})
              </div>
              <div className="text-neutral-600 text-[11px]">
                {edu.descriptionKo.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Training & Activities */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider border-b border-black pb-1 mb-2">
          🛡️ {language === 'ko' ? '보안 교육 및 대외활동 (Activities & Projects)' : 'Activities & Training'}
        </h2>
        <div className="space-y-3 text-xs">
          {activitiesData.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between font-bold">
                <span>
                  {item.organizationKo} — {item.titleKo}
                </span>
                <span className="font-mono text-[11px]">{item.period}</span>
              </div>
              <div className="text-neutral-600 text-[11px]">
                {item.roleKo} | {item.detailsKo.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h2 className="text-sm font-black uppercase tracking-wider border-b border-black pb-1 mb-2">
          📜 {language === 'ko' ? '자격증 (Certificates)' : 'Certificates'}
        </h2>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {certificatesData.map((cert, idx) => (
            <div key={idx} className="border border-neutral-300 p-2">
              <div className="font-bold">{cert.nameKo}</div>
              <div className="text-[11px] text-neutral-600 flex justify-between mt-0.5">
                <span>{cert.issuerKo}</span>
                <span className="font-mono">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
