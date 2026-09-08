'use client';

import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { Icons } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenCodeModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCodeModal }) => {
  const [showChallenges, setShowChallenges] = useState(false);

  return (
    <div className="glass-card glass-card-hover rounded-xl p-6 border border-[#1b263b] flex flex-col justify-between h-full group">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500">Production Spec</span>
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technical Highlight Bar */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 mb-4">
          <span className="text-cyan-400 font-bold block mb-1">Highlight:</span>
          {project.highlights}
        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Challenges Drawer */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => setShowChallenges(!showChallenges)}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>{showChallenges ? 'Hide Key Technical Challenges' : 'View Key Technical Challenges'}</span>
              <Icons.chevronDown className={`w-3.5 h-3.5 transition-transform ${showChallenges ? 'rotate-180' : ''}`} />
            </button>

            {showChallenges && (
              <ul className="mt-3 space-y-2 text-xs text-slate-300 font-mono bg-slate-950/60 p-3 rounded border border-slate-800">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
        {project.codeSnippet && (
          <button
            onClick={() => onOpenCodeModal(project)}
            className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <Icons.code className="w-3.5 h-3.5" />
            <span>Code Snippet</span>
          </button>
        )}

        <div className="flex items-center gap-2 ml-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Icons.github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="px-3 py-1.5 rounded bg-slate-900/40 border border-slate-800 text-slate-600 text-xs font-mono cursor-not-allowed flex items-center gap-1">
              <Icons.github className="w-3.5 h-3.5 opacity-50" />
              <span>Private Repo</span>
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 hover:bg-cyan-900 transition-colors"
            >
              <Icons.externalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
