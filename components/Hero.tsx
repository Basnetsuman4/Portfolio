
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center section-padding">
      <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-block px-4 py-1.5 bg-stone-200/50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-300/30 dark:border-stone-700/30">
          Next.js & React Specialist
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]">
          I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
          Building high-velocity digital products with <span className="text-stone-800 dark:text-stone-200 font-medium italic">Next.js</span>, <span className="text-stone-800 dark:text-stone-200 font-medium italic">React Native</span>, and <span className="text-stone-800 dark:text-stone-200 font-medium italic">AI-driven workflows</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-10">
          <a 
            href="#projects"
            className="px-10 py-4 bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 rounded-full font-bold shadow-lg shadow-stone-400/20 dark:shadow-black/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95"
          >
            Explore Projects
          </a>
          <a 
            href="#contact"
            className="px-10 py-4 bg-[#faf9f6] dark:bg-stone-800/40 text-stone-900 dark:text-stone-200 border border-stone-200 dark:border-stone-700/50 rounded-full font-bold hover:bg-white dark:hover:bg-stone-800/60 hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300"
          >
            Start Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
