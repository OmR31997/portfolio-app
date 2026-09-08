'use client';

import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { Icons } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project || !project.codeSnippet) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.codeSnippet!.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#090d16] border border-cyan-500/30 rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0f1626] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Icons.code className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{project.title}</h3>
              <p className="text-xs font-mono text-slate-400">{project.codeSnippet.filename}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Icons.copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              <Icons.x className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-slate-200 bg-[#070a11] leading-relaxed">
          <pre className="overflow-x-auto">
            <code>{project.codeSnippet.code}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#0f1626] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Language: {project.codeSnippet.language}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 hover:text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
