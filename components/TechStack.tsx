'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderCategoryIcon, Icons } from './Icons';

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-[#070a11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Icons.cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade <span className="text-gradient-cyan">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base">
            Specialized engineering capabilities across backend execution, relational datastores, containerized infrastructure, and telemetry systems.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.title}
              className="glass-card glass-card-hover rounded-xl p-6 relative overflow-hidden group border border-[#1b263b] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900/90 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                    {renderCategoryIcon(category.icon, "w-6 h-6 text-cyan-400")}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    {category.skills.length} Techs
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  {category.subtitle}
                </p>

                {/* Skills Tag Cloud */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        skill.featured
                          ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/40 font-semibold shadow-[0_0_10px_rgba(0,240,255,0.1)]'
                          : 'bg-slate-900/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {skill.featured && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-sans border-l border-slate-800 pl-1.5 ml-0.5">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Standard</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ready for Production &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
