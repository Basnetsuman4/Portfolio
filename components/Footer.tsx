
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-stone-200/60 dark:border-stone-800/60 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-2xl font-bold text-stone-900 dark:text-stone-50 tracking-tight">Suman <span className="text-stone-400 dark:text-stone-600 font-light italic">Basnet</span></span>
          <p className="text-stone-400 dark:text-stone-600 text-xs font-bold uppercase tracking-widest">© {currentYear} • Crafting Digital Landscapes</p>
        </div>
        
        <div className="flex items-center gap-10">
          <a href="#about" className="text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest">Bio</a>
          <a href="#projects" className="text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest">Works</a>
          <a href="#skills" className="text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest">Tools</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest">Connect</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 rounded-full bg-[#faf9f6] dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white dark:hover:bg-stone-800 transition-all group shadow-sm"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
