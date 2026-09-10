import React, { useState } from 'react';
import { X, Copy, Check, Mail, Linkedin, ArrowUpRight, Send, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, language }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${companyName ? `[${companyName}] ` : ''}Regarding IT Audit & Assurance`
    );
    const body = encodeURIComponent(
      `From: ${senderName} (${senderEmail})\nCompany: ${companyName}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="contact-modal-dialog"
        className="bg-white max-w-xl w-full p-6 sm:p-8 border-2 border-black shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black border border-neutral-200 hover:border-black cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 pb-4 border-b border-neutral-200 pr-10">
          <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
            GET IN TOUCH
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl uppercase font-black text-neutral-950 mt-1">
            {language === 'ko' ? '노소윤 시니어 컨설턴트 문의' : "LET'S TALK ASSURANCE"}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">
            {language === 'ko'
              ? 'IT 감사, 내부회계관리제도(ITGC/ITAC), SOC 1/2 인증 및 프로젝트 협업 문의를 환영합니다.'
              : 'Direct consultation on IT Audit, ITGC/ITAC internal controls, SOC 1/2 attestation, and professional inquiries.'}
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-300">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-neutral-700" />
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">DIRECT EMAIL</div>
                <span className="font-mono text-xs sm:text-sm font-bold text-neutral-900">
                  {profileData.email}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase bg-black text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'ko' ? '복사됨!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{language === 'ko' ? '이메일 복사' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-300 hover:border-black transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Linkedin className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">LINKEDIN PROFILE</div>
                <span className="text-xs sm:text-sm font-bold text-neutral-900">
                  linkedin.com/in/soyun-rho-539a8921a
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-900" />
          </a>
        </div>

        {/* Quick Email Form */}
        <form onSubmit={handleSendEmail} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-600 mb-1">
                {language === 'ko' ? '이름 / 담당자' : 'Your Name'}
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={language === 'ko' ? '홍길동' : 'John Doe'}
                className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-black focus:outline-hidden bg-neutral-50"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-600 mb-1">
                {language === 'ko' ? '소속 기관 / 회사' : 'Company / Organization'}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={language === 'ko' ? '회사명' : 'Company LLC'}
                className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-black focus:outline-hidden bg-neutral-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-600 mb-1">
              {language === 'ko' ? '회신받을 이메일' : 'Contact Email'}
            </label>
            <input
              type="email"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="example@company.com"
              className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-black focus:outline-hidden bg-neutral-50"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-600 mb-1">
              {language === 'ko' ? '문의 내용' : 'Message / Inquiries'}
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                language === 'ko'
                  ? 'IT 감사, ITGC 컨설팅, SOC 인증 및 협업 관련 문의사항을 남겨주세요.'
                  : 'Please describe your inquiry regarding IT audit or SOC certification.'
              }
              className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-black focus:outline-hidden bg-neutral-50"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{language === 'ko' ? '이메일 클라이언트 열기' : 'Open Email Draft'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
