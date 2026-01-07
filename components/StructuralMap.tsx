
import React, { useEffect, useRef } from 'react';

const districts = [
  "Phra Nakhon Si Ayutthaya", "Bang Pa-in", "Wang Noi", "Bang Sai", "Uthai",
  "Sena", "Phak Hai", "Tha Ruea", "Nakhon Luang", "Bang Pahan", 
  "Phachi", "Bang Chai", "Maharat", "Lat Bua Luang", "Ban Phraek"
];

export const StructuralMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: any[] = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = 600;
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize 16 major nodes for Ayutthaya districts
    districts.forEach((name, i) => {
      nodes.push({
        name,
        x: Math.random() * (canvas.width - 200) + 100,
        y: Math.random() * (canvas.height - 200) + 100,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        pulse: Math.random() * Math.PI,
        intensity: 0.5 + Math.random() * 0.5
      });
    });

    const draw = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw Digital Grid
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Connectivity Matrix
      ctx.lineWidth = 0.5;
      nodes.forEach((n, i) => {
        nodes.forEach((n2, j) => {
          if (i === j) return;
          const dist = Math.sqrt((n.x - n2.x)**2 + (n.y - n2.y)**2);
          if (dist < 200) {
            ctx.strokeStyle = `rgba(220, 38, 38, ${(200 - dist) / 1000})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        });
      });

      // Render Nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.05;

        if (n.x < 50 || n.x > canvas.width - 50) n.vx *= -1;
        if (n.y < 50 || n.y > canvas.height - 50) n.vy *= -1;

        const pulseVal = Math.sin(n.pulse) * 5;
        
        // Outer Glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 15 + pulseVal);
        grad.addColorStop(0, 'rgba(220, 38, 38, 0.4)');
        grad.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 15 + pulseVal, 0, Math.PI * 2);
        ctx.fill();

        // Core Node
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = '700 8px Monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText(n.name.toUpperCase(), n.x + 10, n.y + 3);
      });

      // Center Singularity (Phra Nakhon)
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.2)';
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="p-8 bg-black border border-white/5 rounded-3xl overflow-hidden relative group">
      <div className="absolute top-10 left-10 z-10 pointer-events-none">
        <h3 className="text-white text-lg font-black tracking-[0.3em] uppercase italic flex items-center gap-3">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
          Structural Grid Matrix
        </h3>
        <p className="text-[10px] text-red-600/60 font-mono uppercase tracking-[0.2em] mt-2">
          Sector 13: Phra Nakhon Si Ayutthaya Regional Core
        </p>
      </div>
      
      <div className="absolute top-10 right-10 z-10 bg-red-950/20 p-4 border border-red-900/40 rounded-lg backdrop-blur-xl">
        <div className="text-[8px] text-gray-500 font-black uppercase mb-3">Protocol Telemetry</div>
        <div className="space-y-2">
           <div className="flex justify-between items-center gap-8">
             <span className="text-[9px] text-gray-400 font-mono">Sync Stability</span>
             <span className="text-[9px] text-red-500 font-mono">99.99%</span>
           </div>
           <div className="flex justify-between items-center gap-8">
             <span className="text-[9px] text-gray-400 font-mono">Node Density</span>
             <span className="text-[9px] text-red-500 font-mono">HIGH</span>
           </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-[600px] cursor-crosshair" />

      <div className="absolute bottom-10 left-10 z-10 font-mono text-[9px] text-gray-700 max-w-xs uppercase leading-relaxed">
        Autonomous structural integrity maintained across 16 major nodes. No human observation registered in current cycle.
      </div>
    </div>
  );
};
