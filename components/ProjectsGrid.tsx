'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Icons } from './Icons';

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Backend' | 'DevOps'>('All');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#070a11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Icons.layers className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-cyan">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-base mt-1">
              Backend API systems, database architectures, containerized workloads, and cloud automation.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {(['All', 'Backend', 'DevOps'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCodeModal={(p) => setSelectedProjectForModal(p)}
            />
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProjectForModal}
          onClose={() => setSelectedProjectForModal(null)}
        />

      </div>
    </section>
  );
};
