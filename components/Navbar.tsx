
import React from 'react';

interface NavbarProps {
  activeSection: string;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, toggleTheme, theme }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto flex items-center gap-3">
      <div className="glass px-2 py-2 rounded-2xl shadow-xl shadow-stone-200/40 dark:shadow-black/20 flex items-center justify-center gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium whitespace-nowrap ${
              activeSection === item.href.slice(1)
                ? 'bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 shadow-md'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/50 dark:hover:bg-white/5'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className="p-3 rounded-2xl glass shadow-xl shadow-stone-200/40 dark:shadow-black/20 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
