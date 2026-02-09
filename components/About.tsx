
import React from 'react';
import { PERSONAL_INFO, EDUCATIONS } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">The Professional</span>
            <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-50">My Philosophy</h2>
          </div>
          <p className="text-xl text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            {PERSONAL_INFO.about}
          </p>
          <div className="flex items-center gap-10 pt-4">
            <div>
              <span className="block text-4xl font-bold text-stone-900 dark:text-stone-50">1.5+</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1 block">Years of Craft</span>
            </div>
            <div className="w-[1px] h-14 bg-stone-200 dark:bg-stone-800"></div>
            <div>
              <span className="block text-4xl font-bold text-stone-900 dark:text-stone-50">5+</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1 block">Impactful Projects</span>
            </div>
          </div>
        </div>

        <div className="bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2.5rem] p-10 lg:p-12 border border-stone-200/60 dark:border-stone-700/30 shadow-xl shadow-stone-200/40 dark:shadow-black/20 space-y-10">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-200 border-b border-stone-100 dark:border-stone-700 pb-6">Academic Foundation</h3>
          <div className="space-y-10">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-stone-200 dark:border-stone-700 last:border-0 pb-2">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600"></div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-lg">{edu.degree}</h4>
                <p className="text-stone-500 dark:text-stone-400 mt-1">{edu.institution}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-stone-400 dark:text-stone-500 italic font-light">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
