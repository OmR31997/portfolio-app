'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Icons } from './Icons';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#090d16] relative border-t border-[#1b263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Icons.shield className="w-3.5 h-3.5" />
            <span>Engineering History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-cyan">Production History</span>
          </h2>
          <p className="text-slate-400 text-base">
            Transparent breakdown of employment history placeholders alongside independent project-based production engineering.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all ${
                exp.type === 'production'
                  ? 'border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.15)] bg-slate-900/80'
                  : 'border-slate-800 opacity-90'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.type === 'placeholder' && (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                        Editable Placeholder
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-mono text-cyan-400 font-semibold">
                    {exp.company}
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <div className="text-xs font-mono text-slate-300 font-bold px-3 py-1 rounded bg-slate-950 border border-slate-800 inline-block">
                    {exp.period}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Key Achievements Bullet Points */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Accomplishments:
                </span>
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-mono">
                    <Icons.check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
