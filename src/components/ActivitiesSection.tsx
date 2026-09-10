import React, { useState } from 'react';
import { Shield, Building2, Globe, Users, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language, ActivityItem } from '../types';
import { activitiesData } from '../data/portfolioData';

interface ActivitiesSectionProps {
  language: Language;
  onOpenLiveDemo?: (url?: string, path?: string) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ language, onOpenLiveDemo }) => {
  const [filter, setFilter] = useState<'all' | 'security' | 'corporate' | 'global'>('all');

  const filteredList =
    filter === 'all'
      ? activitiesData
      : activitiesData.filter((item) => item.category === filter);

  const getCategoryBadge = (cat: ActivityItem['category']) => {
    switch (cat) {
      case 'security':
        return {
          labelKo: '보안 & IT 교육',
          labelEn: 'Security & IT',
          icon: <Shield className="w-3.5 h-3.5" />,
          color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        };
      case 'corporate':
        return {
          labelKo: '기업 실무 & 인턴',
          labelEn: 'Corporate & Intern',
          icon: <Building2 className="w-3.5 h-3.5" />,
          color: 'bg-blue-50 text-blue-800 border-blue-300',
        };
      case 'global':
        return {
          labelKo: '글로벌 & 대외활동',
          labelEn: 'Global & Leadership',
          icon: <Globe className="w-3.5 h-3.5" />,
          color: 'bg-purple-50 text-purple-800 border-purple-300',
        };
    }
  };

  return (
    <section id="activities" className="py-20 lg:py-28 bg-[#f7f7f8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {language === 'ko' ? '대외활동 및 프로젝트' : 'PROJECTS & ACTIVITIES'}
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
              {language === 'ko' ? '실무 경험 및 글로벌 대외활동' : 'EXPERIENCES & IMPACT'}
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            {(
              [
                { key: 'all', labelKo: '전체', labelEn: 'All' },
                { key: 'security', labelKo: '보안 & IT', labelEn: 'Security' },
                { key: 'corporate', labelKo: '기업 실무', labelEn: 'Corporate' },
                { key: 'global', labelKo: '글로벌 & 대외활동', labelEn: 'Global' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.key
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-black'
                }`}
              >
                {language === 'ko' ? tab.labelKo : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={item.id}
                id={`activity-${item.id}`}
                className="bg-white border border-neutral-300 hover:border-black p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar with Category & Period */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${badge.color}`}
                    >
                      {badge.icon}
                      {language === 'ko' ? badge.labelKo : badge.labelEn}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  {/* Organization & Role */}
                  <div className="mb-2">
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      {language === 'ko' ? item.organizationKo : item.organizationEn}
                    </span>
                    <div className="text-xs font-mono font-semibold text-neutral-700">
                      {language === 'ko' ? item.roleKo : item.roleEn}
                    </div>
                  </div>

                  {/* Activity Title */}
                  <h3 className="font-editorial text-lg sm:text-xl uppercase font-black tracking-tight text-neutral-950 mb-4 group-hover:text-black">
                    {language === 'ko' ? item.titleKo : item.titleEn}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs text-neutral-600 mb-4">
                    {(language === 'ko' ? item.detailsKo : item.detailsEn).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5 group-hover:text-black" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.id === 'act-ai-automation' && onOpenLiveDemo && (
                  <div className="pt-4 border-t border-neutral-150 flex items-center justify-between mt-2">
                    <span className="text-[11px] font-mono text-emerald-700 font-bold">
                      📄 market_channel_kpi.html
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLiveDemo(
                          '/market_channel_kpi.html',
                          'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html'
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                      <span>Live Demo ↗</span>
                    </button>
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
