'use client';

import React, { useState } from 'react';
import { Icons } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'server' | 'docker' | 'health'>('server');

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-hero">
      {/* Background Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Remote Work & Freelance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Building Reliable <span className="text-gradient-cyan">Backend Systems</span> & Cloud Infrastructure
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Backend-focused developer specializing in <strong className="text-white font-medium">Node.js, NestJS, PostgreSQL, Docker</strong> and <strong className="text-white font-medium">AWS</strong>. I build scalable APIs, production-ready backend systems and automated deployment infrastructure.
            </p>

            {/* Technical Chips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">Node.js / NestJS</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">PostgreSQL + Prisma</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">Redis & BullMQ</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">Docker & AWS ECS</span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center gap-2"
              >
                <span>View My Work</span>
                <Icons.chevronRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2"
              >
                <span>Hire Me</span>
                <Icons.mail className="w-5 h-5 text-cyan-400" />
              </a>
            </div>

            {/* External Links & Copy Email */}
            <div className="flex items-center gap-6 pt-4 text-slate-400 text-sm">
              <a
                href={PORTFOLIO_DATA.developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Icons.github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Icons.linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-mono text-xs border border-slate-800 bg-slate-900/60 px-3 py-1.5 rounded-md"
              >
                <Icons.copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>{copied ? 'Email Copied!' : PORTFOLIO_DATA.developer.email}</span>
              </button>
            </div>

          </div>

          {/* Right Column — Simulated Production Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-[#090d16]/90 backdrop-blur-md shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0f1626] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 text-[11px] ml-2 font-mono">om-rathore-backend-node</span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center space-x-1 text-[11px]">
                  <button
                    onClick={() => setActiveTab('server')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'server' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    server.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('docker')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'docker' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    docker-compose
                  </button>
                  <button
                    onClick={() => setActiveTab('health')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'health' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    /health
                  </button>
                </div>
              </div>

              {/* Terminal Output Content */}
              <div className="p-5 space-y-3 min-h-[310px] text-slate-300 leading-relaxed overflow-x-auto">
                {activeTab === 'server' && (
                  <>
                    <div className="text-slate-500"># Initializing NestJS Modular Application Core</div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-slate-500">$</span>
                      <span>nest start --config nest-cli.json --prod</span>
                    </div>
                    <div className="text-emerald-400">[Nest] 18402  - 09/08/2026, 21:20:00 PM   LOG [NestFactory] Starting Nest application...</div>
                    <div className="text-emerald-400">[Nest] 18402  - 09/08/2026, 21:20:00 PM   LOG [InstanceLoader] DatabaseModule dependencies initialized +12ms</div>
                    <div className="text-emerald-400">[Nest] 18402  - 09/08/2026, 21:20:00 PM   LOG [InstanceLoader] RedisModule dependencies initialized +8ms</div>
                    <div className="text-emerald-400">[Nest] 18402  - 09/08/2026, 21:20:01 PM   LOG [InstanceLoader] BullMQWorkerModule initialized +15ms</div>
                    <div className="text-blue-400">[Nest] 18402  - 09/08/2026, 21:20:01 PM   LOG [RoutesResolver] SettlementController &#123;/api/v1/settlement&#125; +4ms</div>
                    <div className="text-blue-400">[Nest] 18402  - 09/08/2026, 21:20:01 PM   LOG [RoutesResolver] TasksController &#123;/api/v1/tasks&#125; +2ms</div>
                    <div className="text-cyan-300 font-bold">[SYSTEM] API Listening on 0.0.0.0:3000 (HTTP/2 Enabled) <span className="animate-blink">_</span></div>
                  </>
                )}

                {activeTab === 'docker' && (
                  <>
                    <div className="text-slate-500"># Starting Microservice Container Stack</div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-slate-500">$</span>
                      <span>docker-compose up -d --build</span>
                    </div>
                    <div className="text-slate-400">[+] Building 14.2s (12/12) FINISHED</div>
                    <div className="text-emerald-400"> ✔ Container pg-db         Healthy (PostgreSQL 15)</div>
                    <div className="text-emerald-400"> ✔ Container redis-cache    Started (Redis 7.0)</div>
                    <div className="text-emerald-400"> ✔ Container nest-api-main  Started (Node.js 20 Alpine)</div>
                    <div className="text-emerald-400"> ✔ Container prometheus     Started (Metrics Scraper)</div>
                    <div className="text-emerald-400"> ✔ Container nginx-ssl      Started (Reverse Proxy)</div>
                    <div className="text-cyan-300 font-bold pt-2">[DOCKER] 5/5 containers running cleanly in production mode.</div>
                  </>
                )}

                {activeTab === 'health' && (
                  <>
                    <div className="text-slate-500"># GET /api/v1/healthcheck</div>
                    <div className="text-slate-200">
                      {`{`}
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-400">&quot;status&quot;</span>: <span className="text-emerald-400">&quot;UP&quot;</span>,
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-400">&quot;uptimeSeconds&quot;</span>: 482910,
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-400">&quot;database&quot;</span>: &#123; <span className="text-cyan-400">&quot;postgres&quot;</span>: <span className="text-emerald-400">&quot;CONNECTED&quot;</span>, <span className="text-cyan-400">&quot;latencyMs&quot;</span>: 1.4 &#125;,
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-400">&quot;cache&quot;</span>: &#123; <span className="text-cyan-400">&quot;redis&quot;</span>: <span className="text-emerald-400">&quot;PONG&quot;</span>, <span className="text-cyan-400">&quot;memoryUsage&quot;</span>: <span className="text-amber-300">&quot;18.4MB&quot;</span> &#125;,
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-400">&quot;backgroundQueue&quot;</span>: &#123; <span className="text-cyan-400">&quot;activeWorkers&quot;</span>: 4, <span className="text-cyan-400">&quot;waitingJobs&quot;</span>: 0 &#125;
                      <br />
                      {`}`}
                    </div>
                    <div className="text-emerald-400 font-bold pt-1">HTTP 200 OK (Response time: 4ms)</div>
                  </>
                )}
              </div>

              {/* Terminal Footer Info */}
              <div className="bg-[#090d16] px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Production Ready Environment</span>
                </div>
                <span>Architecture: x86_64 / Linux</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
