'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderCategoryIcon, Icons } from './Icons';

export const WhyWorkWithMe = () => {
  return (
    <section className="py-24 bg-[#090d16] relative border-t border-[#1b263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Icons.check className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work <span className="text-gradient-cyan">With Me</span>
          </h2>
          <p className="text-slate-400 text-base">
            Engineered around reliability, rapid troubleshooting, clean code modularity, and production delivery.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.whyWorkWithMe.map((item) => (
            <div
              key={item.title}
              className="glass-card glass-card-hover rounded-xl p-6 border border-[#1b263b] flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all">
                {renderCategoryIcon(item.icon, "w-5 h-5 text-cyan-400")}
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
