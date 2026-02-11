import { useEffect, useRef } from 'react';

const BackgroundElements = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(61, 123, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(61, 123, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top right orb */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(61, 123, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Bottom left orb */}
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(61, 123, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Center orb - subtle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(61, 123, 255, 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(61, 123, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(61, 123, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Hexagons */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute top-[20%] left-[5%] w-16 h-16 opacity-10 animate-float"
          viewBox="0 0 64 74"
          style={{ animationDelay: '0s' }}
        >
          <polygon
            points="32,0 64,18.5 64,55.5 32,74 0,55.5 0,18.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-accent"
          />
        </svg>
        
        <svg
          className="absolute top-[60%] right-[8%] w-12 h-12 opacity-10 animate-float"
          viewBox="0 0 48 56"
          style={{ animationDelay: '2s' }}
        >
          <polygon
            points="24,0 48,14 48,42 24,56 0,42 0,14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-accent"
          />
        </svg>

        <svg
          className="absolute bottom-[15%] left-[15%] w-20 h-20 opacity-5 animate-float"
          viewBox="0 0 80 92"
          style={{ animationDelay: '4s' }}
        >
          <polygon
            points="40,0 80,23 80,69 40,92 0,69 0,23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-accent"
          />
        </svg>
      </div>
    </>
  );
};

export default BackgroundElements;
