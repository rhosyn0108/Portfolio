import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { faqData } from '../data/portfolioData';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
          {language === 'ko' ? '자주 묻는 질문' : 'CONSULTATION & ASSURANCE GUIDE'}
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 mb-4">
          {language === 'ko' ? '자주 묻는 질문 (FAQ)' : "FREQUENTLY ASKED QUESTION'S"}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-12">
          {language === 'ko'
            ? 'IT 감사, 내부회계관리제도(ITGC/ITAC), 글로벌 SOC 인증 및 자문 업무에 대해 자주 묻는 질문과 답변입니다.'
            : 'Insights into digital assurance, IT internal controls methodology, and SOC attestation frameworks.'}
        </p>

        {/* Accordion List */}
        <div className="text-left divide-y divide-black/15 border-t border-b border-black">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors hover:bg-black/[0.02]">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left focus:outline-hidden cursor-pointer group"
                >
                  <span className="font-editorial text-base sm:text-lg md:text-xl uppercase font-black text-neutral-950 pr-4 group-hover:text-black">
                    {language === 'ko' ? faq.questionKo : faq.questionEn}
                  </span>
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 border border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 pr-6 text-sm text-neutral-700 leading-relaxed pl-2">
                    <p className="bg-white p-5 border border-neutral-200">
                      {language === 'ko' ? faq.answerKo : faq.answerEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
