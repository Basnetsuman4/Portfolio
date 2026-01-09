
import React, { useState, useEffect } from 'react';

const TerminalIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState('');
  
  const fullText = [
    "> Initializing Suman_OS v2.0.4...",
    "> Verifying kernel integrity... [OK]",
    "> Establishing secure websocket connection to 127.0.0.1...",
    "> Loading React artifacts and state modules...",
    "> Compiling frontend assets with Vite/HMR...",
    "> Inlining critical CSS... (Dark_Violet_Core_Enabled)",
    "> Rendering DOM... Optimized.",
    "> System Ready. Welcome, Architect."
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let typingInterval: number;

    const typeChar = () => {
      if (lineIndex < fullText.length) {
        const line = fullText[lineIndex];
        if (charIndex < line.length) {
          setCurrentLineText(line.substring(0, charIndex + 1));
          charIndex++;
          typingInterval = window.setTimeout(typeChar, 15); // Character typing speed
        } else {
          // Line finished
          setDisplayedLines(prev => [...prev, line]);
          setCurrentLineText('');
          charIndex = 0;
          lineIndex++;
          typingInterval = window.setTimeout(typeChar, 200); // Pause between lines
        }
      } else {
        // All lines finished
        setTimeout(onComplete, 1000);
      }
    };

    typingInterval = window.setTimeout(typeChar, 500); // Initial delay

    return () => clearTimeout(typingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#02010a] flex items-center justify-center p-6 font-mono">
      <div className="max-w-xl w-full">
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-900/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-900/50" />
          <div className="w-3 h-3 rounded-full bg-green-900/50" />
        </div>
        <div className="space-y-2 text-sm md:text-base min-h-[250px]">
          {displayedLines.map((line, i) => (
            <div key={i} className="text-slate-700">
              {line}
            </div>
          ))}
          {currentLineText && (
            <div className="text-violet-700 font-bold">
              {currentLineText}
              <span className="animate-pulse inline-block ml-1">_</span>
            </div>
          )}
          {!currentLineText && displayedLines.length < fullText.length && (
             <div className="text-violet-700 font-bold opacity-0">.</div>
          )}
          {displayedLines.length === fullText.length && (
            <div className="text-violet-700 font-bold">
              <span className="animate-pulse inline-block">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
