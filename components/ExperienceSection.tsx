
import React from 'react';
import { EXPERIENCES } from '../data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Career Timeline</span>
          <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-50">Professional Experience</h2>
          <p className="text-stone-500 dark:text-stone-400 text-lg font-light">My evolution in the software development industry.</p>
        </div>

        <div className="space-y-10">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2.5rem] p-8 md:p-12 border border-stone-200/60 dark:border-stone-700/30 shadow-lg shadow-stone-200/30 dark:shadow-black/20 hover:shadow-xl hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-stone-600 dark:text-stone-300 font-semibold">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600"></span>
                    <span className="text-stone-400 dark:text-stone-500 font-medium text-sm">{exp.duration}</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-[#f2f0ea] dark:bg-stone-900/50 text-stone-500 dark:text-stone-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-stone-200/50 dark:border-stone-700/50">
                  Engineering
                </div>
              </div>
              
              <ul className="grid gap-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-stone-500 dark:text-stone-400 leading-relaxed text-lg font-light">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 flex-shrink-0 group-hover:bg-stone-500 dark:group-hover:bg-stone-300 transition-colors"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
