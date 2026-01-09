
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let w: number, h: number;
    let mouse = { x: -1000, y: -1000 };
    let time = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      angle: number;
      spin: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 4 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.spin;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (250 - dist) / 250;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }

        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
        if (this.y < -10) this.y = h + 10;
        if (this.y > h + 10) this.y = -10;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
        ctx.lineWidth = 1.2;
        
        ctx.beginPath();
        ctx.moveTo(-this.size, -this.size);
        ctx.lineTo(this.size, this.size);
        ctx.moveTo(this.size, -this.size);
        ctx.lineTo(-this.size, this.size);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const drawWaves = () => {
      if (!ctx) return;
      const waveCount = 3;
      const colors = [
        'rgba(76, 29, 149, 0.05)',
        'rgba(139, 92, 246, 0.03)',
        'rgba(30, 27, 75, 0.05)'
      ];

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 1;

        const offset = i * 200;
        const speed = 0.001 + i * 0.0005;
        const amplitude = 50 + i * 20;

        for (let x = 0; x <= w; x += 10) {
          const y = (h / 2) + 
            Math.sin(x * 0.002 + time * speed + offset) * amplitude + 
            Math.sin(x * 0.005 - time * speed * 0.5) * (amplitude / 2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      const density = (w * h) / 18000;
      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, w, h);
      
      // Draw Grid subtly
      ctx.strokeStyle = 'rgba(76, 29, 149, 0.02)';
      ctx.lineWidth = 0.5;
      const gridSize = 120;
      for(let x=0; x<w; x+=gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for(let y=0; y<h; y+=gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Draw flowing waves
      drawWaves();

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Subtle connection lines
      ctx.strokeStyle = 'rgba(76, 29, 149, 0.06)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
};

export default ParticleBackground;
