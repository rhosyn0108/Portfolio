import React from 'react';

interface MarqueeStripProps {
  inverted?: boolean;
  text?: string;
  speed?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  inverted = false,
  text,
}) => {
  const items = [
    'DELOITTE ANJIN DIGITAL ASSURANCE',
    'IT AUDIT & SYSTEMS REVIEW',
    'ITGC & ITAC INTERNAL CONTROLS',
    'SOC 1 & SOC 2 TYPE II ATTESTATION',
    'NCS SECURITY ENGINEERING',
    'K-SOX COMPLIANCE ADVISORY',
    'TRUST SERVICES CRITERIA',
    'BILINGUAL ENGAGEMENTS',
  ];

  const displayList = text ? Array(8).fill(text) : items;

  return (
    <div
      className={`w-full overflow-hidden border-y marquee-section select-none py-3 sm:py-4 ${
        inverted
          ? 'bg-black text-white border-neutral-900'
          : 'bg-white text-black border-black/10'
      }`}
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {displayList.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center mx-4 sm:mx-6">
            <span className="font-editorial text-sm sm:text-base md:text-lg tracking-wider uppercase font-bold">
              {item}
            </span>
            <span className="mx-4 text-xs opacity-60">✦</span>
          </div>
        ))}
        {/* Duplication for seamless infinite scroll */}
        {displayList.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center mx-4 sm:mx-6">
            <span className="font-editorial text-sm sm:text-base md:text-lg tracking-wider uppercase font-bold">
              {item}
            </span>
            <span className="mx-4 text-xs opacity-60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
