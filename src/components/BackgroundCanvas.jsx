import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 20), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
    }));

    let mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const isDark = theme === 'dark';

    const render = () => {
      try {
        if (!width || !height || width <= 0 || height <= 0) return;
        ctx.clearRect(0, 0, width, height);

        // Draw faint gradient background pulse
        const maxR = Math.max(width, height);
        const r0 = Math.max(0, Math.min(50, maxR / 10));
        const r1 = Math.max(r0 + 1, maxR);

        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          r0,
          width / 2,
          height / 2,
          r1
        );
        if (isDark) {
          const gradient = ctx.createRadialGradient(
            width / 2,
            height / 2,
            r0,
            width / 2,
            height / 2,
            r1
          );
          gradient.addColorStop(0, '#0f172a');
          gradient.addColorStop(1, '#080a11');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
        } else {
          // Base vibrant background in light mode
          ctx.fillStyle = '#eef2ff';
          ctx.fillRect(0, 0, width, height);

          // Top-left Vibrant Cyan Ambient Glow
          const cyanGlow = ctx.createRadialGradient(
            width * 0.25,
            height * 0.25,
            0,
            width * 0.25,
            height * 0.25,
            maxR * 0.65
          );
          cyanGlow.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
          cyanGlow.addColorStop(0.5, 'rgba(14, 165, 233, 0.15)');
          cyanGlow.addColorStop(1, 'rgba(238, 242, 255, 0)');
          ctx.fillStyle = cyanGlow;
          ctx.fillRect(0, 0, width, height);

          // Bottom-right Vibrant Purple Ambient Glow
          const purpleGlow = ctx.createRadialGradient(
            width * 0.75,
            height * 0.75,
            0,
            width * 0.75,
            height * 0.75,
            maxR * 0.65
          );
          purpleGlow.addColorStop(0, 'rgba(192, 132, 252, 0.35)');
          purpleGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
          purpleGlow.addColorStop(1, 'rgba(238, 242, 255, 0)');
          ctx.fillStyle = purpleGlow;
          ctx.fillRect(0, 0, width, height);
        }

        // Render & update particles
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse interaction push
          if (mouse.x && mouse.y) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius && dist > 0) {
              const force = (mouse.radius - dist) / mouse.radius;
              p.x -= (dx / dist) * force * 2;
              p.y -= (dy / dist) * force * 2;
            }
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.7, p.radius), 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? i % 2 === 0
              ? 'rgba(0, 240, 255, 0.7)'
              : 'rgba(138, 43, 226, 0.7)'
            : i % 3 === 0
            ? 'rgba(2, 132, 199, 0.85)'
            : i % 3 === 1
            ? 'rgba(147, 51, 234, 0.85)'
            : 'rgba(13, 148, 136, 0.85)';
          ctx.fill();

          // Connect nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const alpha = (1 - dist / 130) * (isDark ? 0.25 : 0.32);
              ctx.strokeStyle = isDark
                ? `rgba(0, 240, 255, ${alpha})`
                : `rgba(79, 70, 229, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      } catch (err) {
        console.error("Canvas render error:", err);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
}
