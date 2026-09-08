'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderCategoryIcon, Icons } from './Icons';

export const FeaturedProject = () => {
  const project = PORTFOLIO_DATA.featuredProject;
  const [activeNode, setActiveNode] = useState<number>(2); // Default to NestJS Core
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const copyCodeSnippet = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section id="featured-project" className="py-24 bg-[#090d16] relative overflow-hidden border-y border-[#1b263b]">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Icons.sparkles className="w-3.5 h-3.5" />
              <span>Featured System Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 text-xs font-mono flex items-center gap-2 transition-all hover:text-white"
            >
              <Icons.code className="w-4 h-4 text-cyan-400" />
              <span>{showCode ? 'View Architecture' : 'View Code Implementation'}</span>
            </button>
          </div>
        </div>

        {/* Top Info Grid: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column — Context & Challenges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-xl p-6 border border-[#1b263b]">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Icons.shield className="w-4 h-4 text-cyan-400" />
                <span>System Purpose & Domain Problem</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 text-xs text-slate-300">
                <strong className="text-cyan-300 block mb-1 font-mono">Technical Challenge:</strong>
                {project.problem}
              </div>
            </div>

            {/* Key Engineering Features */}
            <div className="glass-card rounded-xl p-6 border border-[#1b263b]">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Icons.layers className="w-4 h-4 text-cyan-400" />
                <span>Core Business Logic & Technical Implementation</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded border border-slate-800">
                    <Icons.check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column — Technologies & Outcome */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-xl p-6 border border-[#1b263b] flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Icons.cpu className="w-4 h-4 text-cyan-400" />
                  <span>Technology Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Icons.zap className="w-4 h-4 text-cyan-400" />
                  <span>Engineering Highlights</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed bg-cyan-950/30 p-3.5 rounded border border-cyan-500/20 font-mono">
                  {project.highlights}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400">
                  <strong className="text-emerald-400 block mb-1">Architecture Outcome:</strong>
                  {project.outcome}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Visual Section: Architecture Diagram Flow vs Code Implementation */}
        {!showCode ? (
          <div className="glass-card rounded-xl p-6 sm:p-8 border border-cyan-500/30 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icons.server className="w-5 h-5 text-cyan-400" />
                <span>Interactive System Architecture Flow</span>
              </h3>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                Click any pipeline node to inspect details
              </span>
            </div>

            {/* Architecture Node Pipeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
              {project.architectureNodes?.map((node, index) => (
                <button
                  key={node.title}
                  onClick={() => setActiveNode(index)}
                  className={`p-4 rounded-xl text-left border transition-all relative ${
                    activeNode === index
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                      Step 0{index + 1}
                    </span>
                    {renderCategoryIcon(node.icon, activeNode === index ? "w-4 h-4 text-cyan-300" : "w-4 h-4 text-slate-500")}
                  </div>
                  <div className="font-bold text-xs mb-1 text-white">{node.title}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{node.tech}</div>
                </button>
              ))}
            </div>

            {/* Selected Node Details Box */}
            {project.architectureNodes && project.architectureNodes[activeNode] && (
              <div className="bg-[#070a11] rounded-xl p-5 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    {renderCategoryIcon(project.architectureNodes[activeNode].icon, "w-6 h-6 text-cyan-400")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{project.architectureNodes[activeNode].title}</span>
                      <span className="text-xs font-mono text-cyan-400 font-normal px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {project.architectureNodes[activeNode].tech}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {project.architectureNodes[activeNode].description}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded border border-cyan-500/30 shrink-0">
                  Status: Integrated & Verified
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Code Snippet Viewer */
          <div className="rounded-xl border border-cyan-500/30 bg-[#070a11] overflow-hidden font-mono text-xs shadow-2xl">
            <div className="bg-[#0f1626] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icons.code className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-bold">{project.codeSnippet?.filename}</span>
                <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                  {project.codeSnippet?.language}
                </span>
              </div>
              <button
                onClick={copyCodeSnippet}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
              >
                <Icons.copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-6 text-slate-200 overflow-x-auto leading-relaxed bg-[#070a11]">
              <code>{project.codeSnippet?.code}</code>
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
