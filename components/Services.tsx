'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderCategoryIcon, Icons } from './Icons';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#090d16] relative border-t border-[#1b263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Icons.tool className="w-3.5 h-3.5" />
            <span>Freelance & Contract Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can <span className="text-gradient-cyan">Build & Solve</span>
          </h2>
          <p className="text-slate-400 text-base">
            Turnkey backend solutions, infrastructure automation, performance tuning, and remote production engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-xl p-6 border border-[#1b263b] flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all">
                    {renderCategoryIcon(service.icon, "w-6 h-6 text-cyan-400")}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <Icons.check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/50 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 transition-all group-hover:text-white"
                >
                  <span>Request This Service</span>
                  <Icons.chevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
