import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Maximize2, ShieldCheck, RefreshCw, FileCode } from 'lucide-react';
import { Language } from '../types';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  demoUrl?: string;
  localPath?: string;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  isOpen,
  onClose,
  language,
  demoUrl = '/market_channel_kpi.html',
  localPath = 'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html',
}) => {
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText(localPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      id="live-demo-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        id="live-demo-modal-dialog"
        className="bg-neutral-900 border border-neutral-700 w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-neutral-950 border-b border-neutral-800 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-7 h-7 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-black text-xs shrink-0">
              DEMO
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-tight truncate">
                  {language === 'ko'
                    ? 'AI 데이터 분석 & 마케팅 채널 KPI 대시보드'
                    : 'AI Data Analytics & Market Channel KPI Dashboard'}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 truncate flex items-center gap-1.5">
                <FileCode className="w-3 h-3 text-neutral-500 shrink-0" />
                <span className="truncate">{localPath}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Copy Local Path */}
            <button
              type="button"
              onClick={handleCopyPath}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition cursor-pointer"
              title="Copy local file path"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'ko' ? '경로 복사됨' : 'Path Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{language === 'ko' ? '로컬 경로 복사' : 'Copy Path'}</span>
                </>
              )}
            </button>

            {/* Refresh iframe */}
            <button
              type="button"
              onClick={handleReload}
              className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 transition cursor-pointer"
              title="Refresh demo"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            {/* Open in New Tab */}
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer shadow-sm"
            >
              <span>{language === 'ko' ? '새 창으로 열기' : 'Open in Tab'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 transition cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Live Demo Viewport */}
        <div className="flex-1 bg-black relative w-full h-full">
          <iframe
            key={iframeKey}
            src={demoUrl}
            title="Market Channel KPI Live Demo"
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-neutral-950 border-t border-neutral-800 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              {language === 'ko'
                ? 'AI 데이터 분석 및 업무 자동화 실무_강북 / 실습1_260820'
                : 'AI Data Analytics & Workflow Automation Practice / Exercise 1'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-neutral-500">
              File: market_channel_kpi.html
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">
              분석자: <strong>노소윤 (Soyun Rho)</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
