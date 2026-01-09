import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Terminal, Send, Sparkles, X } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const AITechnicalConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Handshake successful. System online. I am Suman's technical proxy. Query my memory banks about his Next.js expertise, architectural decisions, or current deployment status." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a technical consultant proxy for Suman Basnet, a Software Engineer. 
          Context: 
          Name: Suman Basnet.
          Role: Frontend Developer (Next.js Specialist) at Intosoft Pvt Ltd.
          Education: Bachelor of Computer Engineering from Lalitpur Engineering College.
          Technical Stack: Next.js (Primary), React, TypeScript, JavaScript, Node.js, Tailwind, Redux.
          
          Persona: Highly technical, concise, and futuristic. Use cybernetic metaphors sparingly. Refer to projects as "deployments" or "architectural units". Suman's primary strength is Next.js, including App Router, Server Components, and Edge performance.`,
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Transmission error. Connection unstable." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error: Neural Link Interrupted. System self-correcting..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-5 glass-button rounded-full shadow-[0_0_30px_rgba(76,29,149,0.4)] transform hover:scale-110 group"
      >
        <Sparkles className="w-6 h-6 text-white group-hover:rotate-45 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl glass-card rounded-sm overflow-hidden shadow-[0_0_50px_rgba(76,29,149,0.1)] border-violet-900/20 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between p-5 border-b border-violet-900/10 bg-violet-950/20">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-violet-600" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-500">ENGINEER_PROXY_v2.0.4</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-violet-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="h-96 overflow-y-auto p-8 space-y-6 font-mono text-sm bg-black/60">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-4 rounded-sm ${m.role === 'user' ? 'bg-violet-900/10 text-violet-200 border border-violet-900/30' : 'bg-slate-900/40 text-slate-300 border border-slate-800'}`}>
                    <div className="text-[9px] uppercase tracking-[0.2em] opacity-30 mb-2">{m.role === 'user' ? 'In_Stream' : 'Out_Stream'}</div>
                    <div className="leading-relaxed">{m.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-violet-950/30 text-violet-500 border border-violet-900/20 px-4 py-2 rounded-sm animate-pulse font-mono text-xs italic">
                    Decoding_Request...
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-violet-900/10 flex gap-3 bg-black/40">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Request technical data..."
                className="flex-1 bg-slate-900/50 border border-slate-800 rounded px-5 py-3 font-mono text-xs focus:outline-none focus:border-violet-900/40 text-violet-50 placeholder:text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="glass-button px-6 py-3 rounded-sm transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AITechnicalConsultant;