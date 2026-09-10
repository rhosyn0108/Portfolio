import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Linkedin,
  Mail,
  MapPin,
  Building,
  Lock,
  CheckCircle2,
  Award,
  Camera,
  Upload,
  User,
  Trash2,
} from 'lucide-react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  language: Language;
  onOpenContact: () => void;
  profilePhoto?: string;
  onUpdatePhoto?: (photo: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenContact,
  profilePhoto: propPhoto,
  onUpdatePhoto,
}) => {
  const [internalPhoto, setInternalPhoto] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('soyun_profile_photo');
      if (saved) return saved;
    }
    return profileData.profileImage || '/profile_soyun.jpg';
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const activePhoto = propPhoto !== undefined ? propPhoto : internalPhoto;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setInternalPhoto(base64);
        if (onUpdatePhoto) {
          onUpdatePhoto(base64);
        }
        try {
          localStorage.setItem('soyun_profile_photo', base64);
        } catch (err) {
          console.warn('Could not save to localStorage:', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInternalPhoto('');
    if (onUpdatePhoto) {
      onUpdatePhoto('');
    }
    try {
      localStorage.removeItem('soyun_profile_photo');
    } catch (err) {
      console.warn('Could not remove from localStorage:', err);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  return (
    <section id="hero-section" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Sub-eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                {language === 'ko' ? '포트폴리오' : "HI I'M"}
              </span>
              <span className="h-px w-8 bg-neutral-300"></span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {language === 'ko' ? '딜로이트 안진 재직 중' : 'Deloitte Anjin Senior Consultant'}
              </span>
            </div>

            {/* Headline in High-Impact Editorial Condensed Sans */}
            <h1
              id="hero-name-heading"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.88] font-black uppercase tracking-tight text-neutral-950 mb-6 select-none"
            >
              {language === 'ko' ? (
                <>
                  <span className="block text-4xl sm:text-5xl md:text-6xl font-black mb-2 text-neutral-800">
                    노소윤
                  </span>
                  SOYUN RHO
                </>
              ) : (
                <>
                  SOYUN
                  <span className="block text-neutral-900">RHO</span>
                </>
              )}
            </h1>

            {/* Position & Bullet attributes */}
            <div className="space-y-2 mb-8 text-sm sm:text-base font-semibold text-neutral-800">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-black shrink-0"></span>
                <span>It Specialist</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-black shrink-0"></span>
                <span>
                  {language === 'ko'
                    ? 'IT 감사 · IT 내부회계관리제도(ITGC/ITAC) · SOC 1/2 인증'
                    : 'IT Audit · IT Internal Accounting Controls (ITGC/ITAC) · SOC 1 & 2'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-black shrink-0"></span>
                <span>
                  {language === 'ko'
                    ? '영어영문학 & 글로벌문화산업·MICE + NCS 정보보안 엔지니어링'
                    : 'Bilingual (B.A. English / MICE) + NCS Security Engineering'}
                </span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Let's Talk CTA */}
              <button
                id="hero-contact-btn"
                type="button"
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-black text-white hover:bg-neutral-800 text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>{language === 'ko' ? '프로젝트 문의하기' : "Let's Talk"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* View All Work Link */}
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="px-6 py-3.5 border border-black bg-white hover:bg-neutral-100 text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all"
              >
                <span>{language === 'ko' ? '주요 감사 업무 보기' : 'View All Work'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* LinkedIn Direct Button */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Editorial Consultant Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Circular Rotating Badge (Deloitte / Assurance Stamp) */}
            <div className="absolute -top-6 -left-6 sm:-left-10 z-20 hidden sm:flex items-center justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 120 120"
                >
                  <path
                    id="textCircle"
                    d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                  />
                  <text className="text-[9px] uppercase font-bold tracking-[0.2em] fill-black">
                    <textPath href="#textCircle">
                      ✦ DELOITTE ANJIN ✦ DIGITAL ASSURANCE ✦ IT AUDIT ✦
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xs">
                  DEL.
                </div>
              </div>
            </div>

            {/* Consultant Editorial Dossier Card */}
            <div
              id="hero-consultant-card"
              className="relative w-full max-w-lg bg-neutral-900 text-white p-6 sm:p-7 shadow-2xl border border-neutral-800 overflow-hidden"
            >
              {/* Background Geometric Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #111113 1px)',
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              ></div>

              {/* Status Pill on Card */}
              <div className="relative z-10 flex items-center justify-between mb-5 pb-3.5 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[11px] font-mono tracking-wider text-neutral-300 uppercase">
                    SPECIALIST ID: SR-19990108
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-neutral-800 text-neutral-300 border border-neutral-700">
                  DIGITAL ASSURANCE
                </span>
              </div>

              {/* Card Main Body */}
              <div className="relative z-10 space-y-5">
                {/* 3:4 Profile Photo Slot & Firm/Consultant Identity */}
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                  {/* 3:4 Ratio Image Frame */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      id="hero-3x4-profile-frame"
                      onClick={triggerFileInput}
                      className="w-32 sm:w-36 aspect-[3/4] bg-neutral-950 border-2 border-neutral-700 hover:border-emerald-400 transition-all flex flex-col items-center justify-center relative overflow-hidden shadow-lg group/photo cursor-pointer"
                      title={
                        language === 'ko'
                          ? '클릭하여 3:4 프로필 이미지 업로드 / 변경'
                          : 'Click to upload 3:4 profile photo'
                      }
                    >
                      {activePhoto ? (
                        <>
                          <img
                            src={activePhoto}
                            alt="노소윤 프로필 사진 (3×4)"
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/photo:scale-105"
                          />
                          {/* Hover action overlay */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2 text-center">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                              <Camera className="w-3 h-3" />
                              <span>{language === 'ko' ? '사진 변경' : 'Change'}</span>
                            </div>
                            <button
                              type="button"
                              onClick={handleRemovePhoto}
                              className="inline-flex items-center gap-1 text-[10px] text-neutral-300 hover:text-rose-400 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>{language === 'ko' ? '삭제' : 'Remove'}</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-3 text-center h-full w-full select-none">
                          {/* Editorial corner tick marks */}
                          <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-neutral-500"></div>
                          <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-neutral-500"></div>
                          <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-neutral-500"></div>
                          <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-neutral-500"></div>

                          <div className="w-10 h-10 rounded-full bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover/photo:text-emerald-400 group-hover/photo:border-emerald-500/50 transition-colors mb-2">
                            <User className="w-5 h-5" />
                          </div>

                          <span className="inline-block font-mono text-[9px] font-bold text-emerald-400 tracking-wider bg-emerald-950/70 border border-emerald-800/80 px-1.5 py-0.5 rounded-xs mb-1">
                            3 : 4 RATIO
                          </span>
                          <span className="text-[11px] font-bold text-neutral-200 leading-tight">
                            {language === 'ko' ? '프로필 사진' : 'Profile Photo'}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-500 mt-0.5">
                            300 × 400px
                          </span>

                          <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-neutral-300 group-hover/photo:text-emerald-300 transition-colors">
                            <Upload className="w-3 h-3 text-emerald-400" />
                            <span>{language === 'ko' ? '사진 등록' : 'Upload'}</span>
                          </div>
                        </div>
                      )}

                      {/* Hidden File Input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                    </div>
                  </div>

                  {/* Firm & Identity Description */}
                  <div className="flex-1 min-w-0 space-y-3 text-center sm:text-left">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-0.5">
                        FIRM & PRACTICE
                      </div>
                      <div className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center justify-center sm:justify-start gap-1.5">
                        <Building className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">딜로이트 안진회계법인</span>
                      </div>
                      <div className="text-xs font-semibold text-neutral-300 mt-0.5">
                        Audit & Assurance — Digital Assurance
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-800/90">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
                        CONSULTANT
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-baseline justify-center sm:justify-start gap-1.5">
                        <span>노소윤</span>
                        <span className="text-xs font-mono text-neutral-400 font-normal">
                          (Soyun Rho)
                        </span>
                      </div>
                      <div className="text-xs font-mono font-semibold text-emerald-400 mt-0.5">
                        Digital Assurance Senior Consultant
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Focus Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-neutral-800">
                  <div className="bg-neutral-800/80 p-3 border border-neutral-700">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">ROLE</div>
                    <div className="font-bold text-xs sm:text-sm text-white mt-0.5">
                      Senior Consultant
                    </div>
                    <div className="text-[10px] text-neutral-400">2022.11 ~ Present</div>
                  </div>
                  <div className="bg-neutral-800/80 p-3 border border-neutral-700">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      SPECIALTY
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-white mt-0.5">
                      IT Audit & SOC
                    </div>
                    <div className="text-[10px] text-neutral-400">ITGC / ITAC / SOC 1·2</div>
                  </div>
                </div>

                {/* Key Qualifications Checkmarks */}
                <div className="space-y-2 pt-1 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>NCS 정보보안 전문가 과정 (보안엔지니어링 20010206)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>서울여자대학교 영어영문학 & 글로벌문화산업·MICE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Cedar Crest College (USA) 교환학생 이수</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    Seoul, South Korea
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    STATUS: ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
