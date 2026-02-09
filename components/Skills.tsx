
import React from 'react';
import { SKILL_CATEGORIES } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Competencies</span>
          <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-50">Technical Arsenal</h2>
          <p className="text-stone-500 dark:text-stone-400 text-lg font-light">Specialized tools and languages I leverage to solve complex problems.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name} className="space-y-6 p-10 rounded-[2.5rem] bg-[#faf9f6] dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-700/30 shadow-lg shadow-stone-200/20 dark:shadow-black/20">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">{cat.name}</h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-5 py-2.5 bg-[#f2f0ea] dark:bg-stone-900/50 hover:bg-[#2d2d2a] dark:hover:bg-stone-100 text-stone-700 dark:text-stone-300 hover:text-[#f2f0ea] dark:hover:text-stone-900 rounded-2xl text-sm font-bold border border-stone-200 dark:border-stone-700 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 group-hover:bg-stone-500 dark:group-hover:bg-stone-400 transition-colors"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
