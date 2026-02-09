
import React, { useState } from 'react';
import { PROJECTS } from '../data';

const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Industrial' | 'College'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Portfolio</span>
            <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-50">Featured Creations</h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg font-light">A bridge between industrial efficiency and academic curiosity.</p>
          </div>
          
          <div className="flex bg-stone-200/50 dark:bg-stone-800/50 p-1.5 rounded-2xl w-fit">
            {(['All', 'Industrial', 'College'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  filter === f 
                    ? 'bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 shadow-md' 
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2rem] p-8 border border-stone-200/60 dark:border-stone-700/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                  project.category === 'Industrial' 
                    ? 'bg-[#e3e8d8] dark:bg-emerald-900/20 text-[#4d5b3d] dark:text-emerald-400 border-[#4d5b3d]/10' 
                    : 'bg-[#f5e6d3] dark:bg-amber-900/20 text-[#8c6b4d] dark:text-amber-400 border-[#8c6b4d]/10'
                }`}>
                  {project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-[#2d2d2a] dark:group-hover:bg-stone-100">
                   <svg className="w-5 h-5 text-stone-400 dark:text-stone-500 group-hover:text-white dark:group-hover:text-stone-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors leading-snug">
                {project.title}
              </h3>
              
              <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed font-light mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-[#f2f0ea] dark:bg-stone-900/50 text-stone-500 dark:text-stone-400 text-[11px] rounded-lg font-bold border border-stone-200/50 dark:border-stone-700/50 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
