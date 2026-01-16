
import React, { useState, useEffect, useRef } from 'react';
import Section from './components/Section';
import WorkCard from './components/WorkCard';
import { PROJECTS, PROCESS, EXPERIENCE, SKILLS, EDUCATION } from './constants';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; r: number; opacity: number; twinkle: number; speed: number }[] = [];
    let comets: { x: number; y: number; vx: number; vy: number; length: number; opacity: number; hue: number }[] = [];
    let satellites: { x: number; y: number; speed: number; size: number; blink: number; angle: number; depth: number }[] = [];
    
    const createRocket = () => {
      const sides = ['top', 'bottom', 'left', 'right'];
      const side = sides[Math.floor(Math.random() * sides.length)];
      let x, y, angle;
      const buffer = 100;

      if (side === 'top') {
        x = Math.random() * window.innerWidth;
        y = -buffer;
        angle = Math.PI / 2 + (Math.random() - 0.5);
      } else if (side === 'bottom') {
        x = Math.random() * window.innerWidth;
        y = window.innerHeight + buffer;
        angle = -Math.PI / 2 + (Math.random() - 0.5);
      } else if (side === 'left') {
        x = -buffer;
        y = Math.random() * window.innerHeight;
        angle = 0 + (Math.random() - 0.5);
      } else {
        x = window.innerWidth + buffer;
        y = Math.random() * window.innerHeight;
        angle = Math.PI + (Math.random() - 0.5);
      }

      return {
        x,
        y,
        angle,
        baseAngle: angle,
        speed: 1.2,
        time: Math.random() * 100,
        curveFreq: 0.02,
        curveAmp: 0.4,
        isActive: true
      };
    };

    let rocket = createRocket();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initSatellites();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 350; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() < 0.1 ? Math.random() * 2 + 1.2 : Math.random() * 0.8 + 0.2,
          opacity: Math.random(),
          twinkle: Math.random() * 0.01 + 0.005,
          speed: Math.random() * 0.03 + 0.01
        });
      }
    };

    const initSatellites = () => {
      satellites = [];
      for (let i = 0; i < 15; i++) {
        const depth = Math.random();
        const size = 1 + depth * 5;
        satellites.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.05 + depth * 0.25,
          size: size,
          blink: Math.random() * Math.PI * 2,
          angle: (Math.random() - 0.5) * 0.3,
          depth: depth
        });
      }
      satellites.sort((a, b) => a.depth - b.depth);
    };

    const drawRocket = (r: typeof rocket) => {
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(r.angle + Math.PI / 2);

      const firePulse = Math.sin(Date.now() * 0.1);
      const fireSize = 15 + firePulse * 5;
      const fireGrad = ctx.createLinearGradient(0, 10, 0, 10 + fireSize);
      fireGrad.addColorStop(0, '#FF4D00');
      fireGrad.addColorStop(0.4, '#FFD700');
      fireGrad.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.fillStyle = fireGrad;
      ctx.moveTo(-3, 10);
      ctx.lineTo(0, 10 + fireSize);
      ctx.lineTo(3, 10);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.bezierCurveTo(7, -14, 7, 10, 5, 12);
      ctx.lineTo(-5, 12);
      ctx.bezierCurveTo(-7, 10, -7, -14, 0, -20);
      ctx.fill();

      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.moveTo(-6, 4);
      ctx.lineTo(-12, 14);
      ctx.lineTo(-5, 12);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(6, 4);
      ctx.lineTo(12, 14);
      ctx.lineTo(5, 12);
      ctx.fill();

      ctx.fillStyle = '#00F5FF';
      ctx.beginPath();
      ctx.arc(0, -6, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawSatellite = (s: any) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      
      const panelWidth = s.size * 4;
      const panelHeight = s.size * 0.6;
      const bodySize = s.size * 1.5;

      ctx.fillStyle = `rgba(0, 245, 255, ${0.1 + s.depth * 0.2})`;
      ctx.fillRect(-panelWidth / 2, -panelHeight / 2, panelWidth, panelHeight);
      
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + s.depth * 0.5})`;
      ctx.fillRect(-bodySize / 2, -bodySize / 2, bodySize, bodySize);
      
      s.blink += 0.04;
      if (Math.sin(s.blink) > 0.85) {
        ctx.fillStyle = '#ff3333';
        ctx.beginPath();
        ctx.arc(0, 0, bodySize * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        s.opacity += s.twinkle;
        if (s.opacity > 1 || s.opacity < 0.2) s.twinkle *= -1;
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      satellites.forEach(s => {
        s.x += s.speed;
        s.y += s.speed * 0.15;
        if (s.x > canvas.width + 100) s.x = -100;
        if (s.x < -100) s.x = canvas.width + 100;
        if (s.y > canvas.height + 100) s.y = -100;
        if (s.y < -100) s.y = canvas.height + 100;
        drawSatellite(s);
      });

      if (Math.random() < 0.005) {
        comets.push({
          x: Math.random() * canvas.width,
          y: -100,
          vx: (Math.random() - 0.5) * 12,
          vy: Math.random() * 8 + 6,
          length: Math.random() * 150 + 100,
          opacity: 1,
          hue: Math.random() > 0.5 ? 180 : 200
        });
      }
      comets = comets.filter(c => {
        c.x += c.vx;
        c.y += c.vy;
        c.opacity -= 0.01;
        if (c.opacity <= 0) return false;
        
        ctx.strokeStyle = `hsla(${c.hue}, 100%, 70%, ${c.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.vx * 5, c.y - c.vy * 5);
        ctx.stroke();
        return c.y < canvas.height + 150;
      });

      rocket.time += rocket.curveFreq;
      rocket.angle = rocket.baseAngle + Math.sin(rocket.time) * rocket.curveAmp;
      rocket.x += Math.cos(rocket.angle) * rocket.speed;
      rocket.y += Math.sin(rocket.angle) * rocket.speed;

      const limit = 200;
      if (rocket.x < -limit || rocket.x > canvas.width + limit || rocket.y < -limit || rocket.y > canvas.height + limit) {
        rocket = createRocket();
      }

      drawRocket(rocket);
      requestAnimationFrame(update);
    };

    window.addEventListener('resize', resize);
    resize();
    update();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-deep-space">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-pitch-black/20 via-transparent to-pitch-black/80" />
    </div>
  );
};

const HUDCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };
    
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .clickable, .group'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);

    let rafId: number;
    const animate = () => {
      setPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.2,
        y: prev.y + (targetPos.y - prev.y) * 0.2
      }));
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      cancelAnimationFrame(rafId);
    };
  }, [targetPos]);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
    >
      <div className={`relative flex items-center justify-center transition-all duration-300 ease-out ${isHovering ? 'scale-150' : 'scale-100'}`}>
        {/* The Square Frame */}
        <div className={`absolute w-5 h-5 border border-cyber-cyan/50 transition-all duration-300 ${isHovering ? 'border-cyber-cyan' : 'border-cyber-cyan/40'}`} />
        
        {/* The Center Dot */}
        <div className="w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00F5FF]" />
      </div>
    </div>
  );
};

const ExperienceNode: React.FC<{ exp: typeof EXPERIENCE[0], index: number, total: number }> = ({ exp, index, total }) => {
  return (
    <div className="relative flex items-start group mb-32 last:mb-0">
      {/* Side Label (Period) */}
      <div className="hidden lg:block absolute -left-64 top-0 w-48 text-right pr-8">
        <div className="text-[10px] font-black text-neutral-800 uppercase tracking-[0.4em] group-hover:text-cyber-cyan transition-colors duration-500">
          STAMP_{index.toString().padStart(2, '0')}
        </div>
        <div className="text-[12px] font-bold text-slate-500 group-hover:text-white transition-colors duration-500">
          {exp.period}
        </div>
      </div>

      {/* Center Tactical Path */}
      <div className="flex flex-col items-center mr-16 md:mr-24 relative">
        {/* Node Glyph */}
        <div className="relative z-10 w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 border border-cyber-cyan/30 rotate-45 group-hover:rotate-180 transition-transform duration-1000 bg-pitch-black/80" />
          <div className="absolute inset-2 bg-cyber-cyan/10 border border-cyber-cyan/20 group-hover:bg-cyber-cyan/40 transition-colors" />
          <div className="relative text-[10px] font-black text-cyber-cyan group-hover:scale-110 transition-transform">
            0{index + 1}
          </div>
          
          {/* Active Ping */}
          {index === 0 && (
            <div className="absolute inset-0 border border-cyber-cyan rounded-lg animate-ping opacity-30 pointer-events-none" />
          )}
        </div>

        {/* Path Line */}
        {index < total - 1 && (
          <div className="absolute top-12 bottom-[-128px] w-[1px] bg-gradient-to-b from-cyber-cyan/60 via-cyber-cyan/10 to-transparent" />
        )}
      </div>

      {/* Content Block */}
      <div className="flex-1 pb-12">
        <div className="inline-flex items-center gap-4 mb-4">
          <span className="text-[10px] font-mono text-cyber-cyan/40 font-bold tracking-widest">TYPE_ROLE</span>
          <div className="h-[1px] w-8 bg-cyber-cyan/20" />
        </div>
        
        <h3 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter mb-4 group-hover:text-cyber-cyan transition-colors duration-700">
          {exp.role}
        </h3>
        
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <span className="text-slate-500 font-black text-[11px] uppercase tracking-[0.6em]">
            {exp.company}
          </span>
          <span className="lg:hidden text-[10px] text-cyber-cyan/40 font-bold">{exp.period}</span>
        </div>

        <div className="relative max-w-2xl">
          <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/5" />
          <p className="text-slate-400 text-lg leading-relaxed font-light pl-8 group-hover:text-slate-200 transition-colors duration-700">
            {exp.description}
          </p>
        </div>

        {/* Tactical Sub-Labels */}
        <div className="mt-10 flex gap-12 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="text-[8px] font-mono text-neutral-600">
            LOC_LAT: 27.6710° N <br />
            LOC_LNG: 85.3238° E
          </div>
          <div className="text-[8px] font-mono text-neutral-600">
            PATH: ROOT/DEV/EXP_{index} <br />
            STAT: ACTIVE_NODE
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-pitch-black z-[100] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 relative">
          <div className="w-48 h-[2px] bg-neutral-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyber-cyan w-full origin-left animate-[loading_2s_ease-in-out_infinite]" />
          </div>
          <div className="text-[10px] tracking-[1.2em] text-cyber-cyan animate-pulse font-extrabold uppercase">Initializing_System</div>
        </div>
        <style>{`@keyframes loading { 0% { transform: scaleX(0); } 50% { transform: scaleX(1); } 100% { transform: scaleX(0); transform-origin: right; } }`}</style>
      </div>
    );
  }

  const navLinks = [
    { name: 'Projects', id: 'work' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen relative bg-pitch-black font-body text-slate-400 overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
      <HUDCursor />
      <SpaceBackground />
      
      <div className="animate-fade-in relative z-10">
        <header className="fixed top-0 left-0 w-full z-50 px-10 md:px-24 flex items-center justify-between h-[70px] glass-morphism border-b border-white/10">
          <div className="group/logo cursor-pointer flex items-center" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Animated HUD Frames */}
              <div className="absolute inset-0 border-[0.5px] border-cyber-cyan/30 rounded-lg rotate-45 group-hover/logo:rotate-180 transition-transform duration-[1.5s] ease-in-out" />
              <div className="absolute inset-1.5 border-[0.5px] border-cyber-cyan/10 rounded-sm -rotate-45 group-hover/logo:rotate-0 transition-transform duration-[1s] ease-in-out" />
              
              {/* Initial Gylph */}
              <div className="relative z-10 flex items-baseline">
                <span className="font-heading font-black text-cyber-cyan text-lg tracking-tighter">S</span>
                <span className="font-heading font-black text-white text-lg tracking-tighter opacity-80">B</span>
              </div>
              
              {/* Pulse Indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 glass-morphism rounded-full flex items-center justify-center border-cyber-cyan/20">
                <div className="w-1 h-1 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_8px_#00F5FF]" />
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[9px] tracking-[0.4em] uppercase font-black text-slate-500 hover:text-cyber-cyan transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyber-cyan transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-10 md:px-24 lg:px-44 relative">
            <div className="max-w-6xl w-full">
              <div className="inline-flex items-center gap-8 mb-10 text-cyber-cyan text-[11px] uppercase tracking-[1em] font-black animate-slide-up">
                <span className="w-24 h-[1px] bg-cyber-cyan/30"></span>
                Junior Frontend Developer
              </div>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-12 text-white animate-slide-up [animation-delay:200ms]">
                Building <br /> <span className="text-cyber-cyan">Resilient UIs.</span>
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl text-slate-400 animate-slide-up [animation-delay:400ms]">
                I specialize in developing user-friendly interfaces for SaaS, PropTech, and FinTech ecosystems. Precise state management and high-fidelity interface design.
              </p>
              
              <div className="mt-20 flex flex-wrap gap-8 animate-slide-up [animation-delay:600ms]">
                {['REACT', 'REDUX', 'STYLED_COMPONENTS', 'FORMIK'].map(item => (
                  <div key={item} className="px-10 py-4 glass-morphism rounded-full text-[10px] tracking-[0.4em] font-black text-cyber-cyan border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all hover:-translate-y-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Grid */}
          <Section id="work" title="Industrial Archives">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PROJECTS.map(p => (
                <div key={p.id} className="transform hover:-translate-y-4 transition-all duration-1000">
                  <WorkCard project={p} />
                </div>
              ))}
            </div>
          </Section>

          {/* Experience Section - Redesigned to Roadmap Style */}
          <Section id="experience" title="Professional Path">
            <div className="py-20 relative max-w-5xl mx-auto">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceNode 
                  key={i} 
                  exp={exp} 
                  index={i} 
                  total={EXPERIENCE.length} 
                />
              ))}
            </div>
          </Section>

          {/* Education Section */}
          <Section id="education" title="Academic Foundation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-10 glass-morphism rounded-[3rem] border-white/5 hover:border-cyber-cyan/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 font-mono text-[8px] tracking-widest text-neutral-800 uppercase group-hover:text-cyber-cyan transition-colors">
                    REF_{i === 0 ? 'LEC_01' : 'TIC_02'}
                  </div>
                  <div className="text-[11px] font-black text-cyber-cyan uppercase tracking-[0.5em] mb-6">
                    {edu.period}
                  </div>
                  <h4 className="text-2xl text-white font-black mb-4 tracking-tight leading-none">
                    {edu.institution}
                  </h4>
                  <div className="text-[13px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">
                    {edu.degree}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-600 font-mono">
                    <div className="w-2 h-2 rounded-full bg-cyber-cyan/20 group-hover:bg-cyber-cyan transition-colors" />
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Tech Capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="p-8 glass-morphism rounded-[2.5rem] border-white/5 hover:border-cyber-cyan/20 transition-all group">
                  <h4 className="text-[11px] font-black text-cyber-cyan uppercase tracking-[0.5em] mb-8 border-b border-cyber-cyan/10 pb-4">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-4">
                    {skillGroup.items.map((skill, sIdx) => (
                      <li key={sIdx} className="text-[13px] text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cyber-cyan/20 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <Section id="contact" title="Connection Port" className="pb-64">
            <div className="py-24 text-center glass-morphism rounded-[6rem] border-cyber-cyan/10 p-16 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyber-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <h2 className="text-6xl md:text-8xl font-heading text-white font-black tracking-tighter mb-20 leading-[0.8] relative z-10">
                Secure <br /> <span className="text-cyber-cyan">Uplink.</span>
              </h2>
              <div className="flex flex-col items-center gap-6 relative z-10">
                <a href="mailto:arunbasnet54@gmail.com" className="inline-block text-xl md:text-3xl font-heading text-white hover:text-cyber-cyan transition-all duration-700 py-8 px-16 glass-morphism rounded-full border-cyber-cyan/20 hover:scale-105 shadow-[0_0_50px_rgba(0,245,255,0.05)]">
                  arunbasnet54@gmail.com
                </a>
              </div>
              <div className="mt-24 flex justify-center flex-wrap gap-12 md:gap-24 relative z-10">
                <a 
                  href="https://linkedin.com/in/sumanbasnet" 
                  target="_blank" 
                  className="flex items-center gap-4 text-[12px] uppercase tracking-[0.8em] font-black text-neutral-800 hover:text-cyber-cyan transition-all group/social"
                >
                  <svg className="w-5 h-5 transition-all duration-500 group-hover/social:scale-110 group-hover/social:drop-shadow-[0_0_8px_#00F5FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LINKEDIN</span>
                </a>
                <a 
                  href="https://github.com/sumanbasnet" 
                  target="_blank" 
                  className="flex items-center gap-4 text-[12px] uppercase tracking-[0.8em] font-black text-neutral-800 hover:text-cyber-cyan transition-all group/social"
                >
                  <svg className="w-5 h-5 transition-all duration-500 group-hover/social:scale-110 group-hover/social:drop-shadow-[0_0_8px_#00F5FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </Section>

          <footer className="px-10 md:px-24 py-32 flex flex-col md:flex-row justify-between items-center gap-12 text-[11px] uppercase tracking-[0.8em] text-neutral-800 font-black border-t border-white/5 bg-pitch-black relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-ping opacity-60" />
              <span>STATION_v5.8</span>
            </div>
            <div className="text-neutral-900 font-mono">NEPAL // ARCHIVE_24</div>
            <div className="text-cyber-cyan opacity-80">© SUMAN_BASNET</div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
