
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-40 px-8 md:px-20 lg:px-44 relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-24">
            <h2 className="font-heading text-[12px] tracking-[0.9em] uppercase text-neutral-800 font-bold flex items-center gap-10">
              <span className="w-20 h-[1px] bg-cyber-cyan/20"></span>
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">{title}</span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
