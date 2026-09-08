'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Icons } from './Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Remote Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    // Read query parameter if redirected from Services page
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      if (serviceParam) {
        setFormData((prev) => ({ ...prev, projectType: serviceParam }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL for static execution
    const subject = encodeURIComponent(`[Project Inquiry - ${formData.projectType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${PORTFOLIO_DATA.developer.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070a11] relative border-t border-[#1b263b]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Headline & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Icons.mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a backend problem <span className="text-gradient-cyan">to solve?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              I&apos;m available for remote development, backend projects, API development, Dockerization, AWS deployment and technical troubleshooting.
            </p>

            {/* Direct Contact Info Box */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                  <Icons.mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-sm font-bold text-white font-mono truncate">
                    {PORTFOLIO_DATA.developer.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-auto p-2 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
                  aria-label="Copy Email Address"
                >
                  <Icons.copy className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                  <Icons.globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Availability</div>
                  <div className="text-sm font-bold text-white">
                    Remote Worldwide & Contract Projects
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 text-slate-400">
              <a
                href={PORTFOLIO_DATA.developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Icons.github className="w-5 h-5" />
              </a>

              <a
                href={PORTFOLIO_DATA.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <Icons.linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.developer.email}`}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all"
                aria-label="Send Direct Email"
              >
                <Icons.mail className="w-5 h-5 text-cyan-400" />
              </a>
            </div>

          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-cyan-500/30 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Start a Project / Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill out the fields below to trigger an immediate email request.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Icons.check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Opening mail client... You can also email directly at {PORTFOLIO_DATA.developer.email}</span>
                </div>
              )}

              {copiedEmail && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-2">
                  <Icons.copy className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Project Type / Subject
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Remote Development Role">Remote Node.js / NestJS Backend Position</option>
                    <option value="Freelance API Development">Freelance API & Business Logic Development</option>
                    <option value="Docker & AWS Infrastructure">Docker Containerization & AWS Deployment</option>
                    <option value="Database Systems & Caching">Database Migration, Prisma & Redis Setup</option>
                    <option value="Bug Fixing & Troubleshooting">Bug Fixing & Infrastructure Troubleshooting</option>
                    <option value="Other Contract Opportunity">Other Remote Contract Work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Project Details / Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project requirements, API specifications, or backend infrastructure goals..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
                  >
                    <span>Start a Project</span>
                    <Icons.chevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-sm font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Icons.copy className="w-4 h-4" />
                    <span>Email Me</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
