'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Icons } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              &lt;/&gt;
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wider uppercase">
                {PORTFOLIO_DATA.developer.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {PORTFOLIO_DATA.developer.title}
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#featured-project" className="hover:text-cyan-400 transition-colors">GiftFactory API</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#proof-of-work" className="hover:text-cyan-400 transition-colors">Proof of Work</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <Icons.chevronDown className="w-4 h-4 rotate-180 text-cyan-400" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Om Rathore. All rights reserved. Production-Grade Systems Engineering.
          </div>
          <div className="flex items-center gap-2 text-cyan-400/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
