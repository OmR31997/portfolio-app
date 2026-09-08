'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Icons } from './Icons';

export const ArchitectureFlow = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="workflow" className="py-24 bg-[#070a11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Icons.gitBranch className="w-3.5 h-3.5" />
            <span>Development Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-cyan">Pipeline Approach</span>
          </h2>
          <p className="text-slate-400 text-base">
            Systematic 7-step engineering methodology for converting business ideas into containerized, monitored production software.
          </p>
        </div>

        {/* Stepper Pipeline Bar */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 relative">
          {PORTFOLIO_DATA.workflow.map((item, index) => (
            <button
              key={item.step}
              onClick={() => setSelectedStep(index)}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                selectedStep === index
                  ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                {item.step}
              </div>
              <div className="font-bold text-sm text-white truncate">{item.title}</div>
              <div className="text-[10px] text-slate-400 truncate mt-1">{item.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="glass-card rounded-2xl p-8 border border-cyan-500/30 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-base flex items-center justify-center">
                  {PORTFOLIO_DATA.workflow[selectedStep].step}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {PORTFOLIO_DATA.workflow[selectedStep].title} Phase
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {PORTFOLIO_DATA.workflow[selectedStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {PORTFOLIO_DATA.workflow[selectedStep].description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                  Primary Tools & Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.workflow[selectedStep].tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Controls for Mobile & Desktop Navigation */}
            <div className="lg:col-span-4 bg-slate-950/80 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 mb-2">Step Navigation</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  disabled={selectedStep === 0}
                  onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                  className="py-2 px-3 rounded bg-slate-900 border border-slate-800 disabled:opacity-40 text-xs font-mono text-slate-200 hover:text-white transition-colors"
                >
                  &larr; Previous Step
                </button>
                <button
                  disabled={selectedStep === PORTFOLIO_DATA.workflow.length - 1}
                  onClick={() => setSelectedStep((prev) => Math.min(PORTFOLIO_DATA.workflow.length - 1, prev + 1))}
                  className="py-2 px-3 rounded bg-cyan-950 border border-cyan-500/40 disabled:opacity-40 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                >
                  Next Step &rarr;
                </button>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800 text-center">
                Phase {selectedStep + 1} of {PORTFOLIO_DATA.workflow.length}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
