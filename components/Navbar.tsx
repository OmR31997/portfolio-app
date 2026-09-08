'use client';

import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#featured-project' },
    { name: 'Services', href: '#services' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Experience', href: '#experience' },
    { name: 'Proof of Work', href: '#proof-of-work' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a11]/85 backdrop-blur-md border-b border-[#1b263b] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-bold tracking-wider text-white hover:text-cyan-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all">
            <span className="font-mono text-xs font-black">&lt;/&gt;</span>
          </div>
          <span className="font-mono tracking-tight font-extrabold uppercase">
            OM RATHORE <span className="text-cyan-400 text-xs font-normal font-sans tracking-normal hidden sm:inline-block border border-cyan-900/60 bg-cyan-950/40 px-2 py-0.5 rounded-full ml-1 text-[10px]">Backend</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={PORTFOLIO_DATA.developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800/60 rounded-lg border border-transparent hover:border-slate-700"
            aria-label="GitHub Profile"
          >
            <Icons.github className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="relative group px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center gap-1.5"
          >
            <span>Hire Me</span>
            <Icons.chevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <Icons.x className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-[#1b263b] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Hire Me
            </a>
            <div className="flex justify-center gap-4 pt-2 text-slate-400">
              <a href={PORTFOLIO_DATA.developer.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <Icons.github className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.developer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <Icons.linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.developer.email}`} className="hover:text-cyan-400">
                <Icons.mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
