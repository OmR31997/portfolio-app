'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Icons } from './Icons';

export const ProofOfWork = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeItem = PORTFOLIO_DATA.proofOfWork[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeItem.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="proof-of-work" className="py-24 bg-[#070a11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Icons.terminal className="w-3.5 h-3.5" />
              <span>Verifiable Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proof of <span className="text-gradient-cyan">Work & Code Specs</span>
            </h2>
            <p className="text-slate-400 text-base mt-1">
              Tangible evidence of technical capability through Docker configs, CI/CD pipelines, and NestJS infrastructure code.
            </p>
          </div>

          {/* GitHub CTA */}
          <a
            href={PORTFOLIO_DATA.developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white font-mono text-xs flex items-center gap-2 transition-all shrink-0"
          >
            <Icons.github className="w-4 h-4 text-cyan-400" />
            <span>View GitHub Repositories</span>
            <Icons.externalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Proof of Work Interactive Viewer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column — Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {PORTFOLIO_DATA.proofOfWork.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeTab === index
                    ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.filename}
                  </span>
                </div>
                <div className="font-bold text-sm text-white mb-1">{item.title}</div>
                <div className="text-xs text-slate-400 line-clamp-2">{item.description}</div>
              </button>
            ))}
          </div>

          {/* Right Column — Code Snippet Display Box */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-cyan-500/30 bg-[#090d16] overflow-hidden shadow-2xl font-mono text-xs flex flex-col h-full">
              
              {/* Header */}
              <div className="bg-[#0f1626] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icons.code className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-bold">{activeItem.filename}</span>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {activeItem.language}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 hover:text-white text-xs transition-colors flex items-center gap-1.5"
                >
                  <Icons.copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code */}
              <div className="p-6 overflow-x-auto bg-[#070a11] text-slate-200 leading-relaxed flex-grow">
                <pre>
                  <code>{activeItem.code}</code>
                </pre>
              </div>

              {/* Footer info */}
              <div className="bg-[#090d16] px-5 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Configuration Specification</span>
                <span className="text-cyan-400">Production Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
