import React, { useState } from 'react';
import { Plus, Minus, CheckCircle, ArrowUpRight, Shield, Layers, FileCheck2, Cpu } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { servicesData } from '../data/portfolioData';

interface ServicesAccordionProps {
  language: Language;
}

export const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ language }) => {
  // Start with first service open by default
  const [openId, setOpenId] = useState<string>('it-audit');

  const toggleService = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'it-audit':
        return <Shield className="w-5 h-5" />;
      case 'itgc-itac':
        return <Layers className="w-5 h-5" />;
      case 'soc-assurance':
        return <FileCheck2 className="w-5 h-5" />;
      case 'security-engineering':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
            {language === 'ko' ? '핵심 서비스 & 자문' : 'CORE CAPABILITIES'}
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
            {language === 'ko' ? 'Digital Assurance 전문 분야' : 'WHAT I DO IN DIGITAL ASSURANCE'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-medium">
            {language === 'ko'
              ? '딜로이트 안진회계법인에서 수행하는 주요 IT 감사, 내부회계관리제도 평가, 글로벌 SOC 인증 및 보안 엔지니어링 역량입니다.'
              : 'End-to-end digital assurance capabilities delivered at Deloitte Anjin, spanning statutory IT audits, K-SOX internal controls, and global SOC attestations.'}
          </p>
        </div>

        {/* Accordion Rows matching the dossier design */}
        <div className="border-t border-black divide-y divide-black/20">
          {servicesData.map((service: ServiceItem) => {
            const isOpen = openId === service.id;
            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                className="transition-colors duration-200 hover:bg-black/[0.02]"
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-neutral-400">
                      {service.number}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-black tracking-tight text-neutral-950 group-hover:text-black transition-colors">
                      {language === 'ko' ? service.titleKo : service.titleEn}
                    </h3>
                  </div>
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 border border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isOpen && (
                  <div className="pb-8 pt-2 pl-8 sm:pl-14 pr-4 transition-all duration-300">
                    <div className="bg-white p-6 sm:p-8 border border-neutral-300 space-y-6 shadow-xs">
                      {/* Summary Banner */}
                      <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                        <div className="p-2 bg-neutral-100 text-neutral-900 shrink-0">
                          {getIcon(service.id)}
                        </div>
                        <div>
                          <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                            {language === 'ko' ? '핵심 개요' : 'SERVICE OVERVIEW'}
                          </div>
                          <p className="text-sm sm:text-base font-semibold text-neutral-900 mt-0.5">
                            {language === 'ko' ? service.summaryKo : service.summaryEn}
                          </p>
                        </div>
                      </div>

                      {/* Detailed Test Scopes */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                          {language === 'ko' ? '주요 수행 절차 및 평가 범위' : 'TESTING SCOPE & AUDIT PROCEDURES'}
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {(language === 'ko' ? service.detailsKo : service.detailsEn).map(
                            (detail, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 bg-neutral-50 p-3 border border-neutral-150"
                              >
                                <CheckCircle className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Tags Bar */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-[11px] font-mono uppercase text-neutral-400 mr-2">
                          FRAMEWORKS:
                        </span>
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-mono font-medium bg-neutral-100 text-neutral-800 border border-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
