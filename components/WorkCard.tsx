
import React from 'react';
import { Project } from '../types';

interface WorkCardProps {
  project: Project;
}

const ProjectIcon: React.FC<{ id: string }> = ({ id }) => {
  const iconProps = {
    className: "w-9 h-9 transition-all duration-700 text-cyber-cyan group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]",
    strokeWidth: 1.1,
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  };

  switch (id) {
    case 'housebuild':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 8.31m5.84 6.06l-2.42-2.42m0 0L2.12 11.9a2.99 2.99 0 010-5.64L9.59 8.31m2.58 3.64l2.42 2.42m0 0l6.06-6.06m-6.06 6.06a6 6 0 01-7.38 5.84v-4.8" />
        </svg>
      );
    case 'geomedlink':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0112 15c-2.998 0-5.74-1.1-7.843-2.918m7.843 2.918A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      );
    case 'escape-plan':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
  }
};

const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <div className="group relative glass-morphism-card rounded-[3rem] p-10 md:p-12 h-full transition-all duration-1000 border-white/5 hover:border-cyber-cyan/30 hover:bg-white/[0.02] flex flex-col overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-40 group-hover:opacity-100 transition-opacity">
         <div className="text-[8px] tracking-[0.6em] text-neutral-600 font-bold font-mono group-hover:text-cyber-cyan uppercase">Obj_{project.id}</div>
      </div>

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className="p-5 glass-morphism rounded-[1.8rem] border-white/10 group-hover:border-cyber-cyan/40 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-white/[0.01]">
          <ProjectIcon id={project.id} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-[0.6em] text-cyber-cyan font-black mb-2">
            Log_{project.id}
          </span>
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <span className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              {project.category}
            </span>
          </div>
        </div>
      </div>
      
      <h3 className="font-heading text-2xl md:text-3xl font-black text-white tracking-tighter mb-6 group-hover:text-cyber-cyan transition-colors duration-700 relative z-10">
        {project.title}
      </h3>

      <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-10 max-w-sm font-light relative z-10 group-hover:text-slate-300 transition-colors">
        {project.description}
      </p>
      
      <div className="space-y-4 mb-12 flex-grow relative z-10">
        {project.bullets.slice(0, 3).map((bullet, i) => (
          <div key={i} className="flex gap-4 text-[12px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors group/bullet">
             <span className="text-cyber-cyan font-bold font-mono opacity-50 group-hover/bullet:opacity-100 transition-opacity">0{i+1} —</span>
             <span className="flex-1">{bullet}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5 relative z-10">
        {project.tech.map(t => (
          <span key={t} className="text-[8px] text-slate-600 uppercase tracking-[0.3em] font-black py-2 px-4 glass-morphism rounded-full group-hover:text-white group-hover:border-cyber-cyan/30 transition-all border-white/5 hover:bg-cyber-cyan/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
