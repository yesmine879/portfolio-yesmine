import React, { useEffect, useRef } from 'react';

// ============================================================
// NETWORK BACKGROUND
// Fond animé : points reliés par des lignes, façon "constellation"
// ============================================================

const NetworkBackground = ({
  particleCount = 65,
  maxDistance = 150,
  color = '168, 85, 247',
  speed = 0.65,
  fixed = false,
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const isDocumentVisibleRef = useRef(!document.hidden);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // --------------------------------------------------------
    // RESIZE
    // --------------------------------------------------------

    const resize = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Canvas travaille en pixels CSS
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // --------------------------------------------------------
    // CREATE PARTICLES
    // --------------------------------------------------------

    const createParticles = () => {
      particlesRef.current = Array.from(
        { length: Math.max(0, particleCount) },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,

          radius: Math.random() * 1.5 + 1,
        })
      );
    };

    resize();
    createParticles();

    // --------------------------------------------------------
    // RESIZE OBSERVER
    // --------------------------------------------------------

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // --------------------------------------------------------
    // MOUSE
    // --------------------------------------------------------

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: null,
        y: null,
      };
    };

    const handleVisibilityChange = () => {
      isDocumentVisibleRef.current = !document.hidden;
      if (isDocumentVisibleRef.current && !animationRef.current) {
        draw();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });

    window.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // --------------------------------------------------------
    // ANIMATION
    // --------------------------------------------------------

    const draw = () => {
      if (!isDocumentVisibleRef.current) {
        animationRef.current = null;
        return;
      }
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // ------------------------------------------------------
      // MOVE PARTICLES
      // ------------------------------------------------------

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce horizontal
        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }

        // Bounce vertical
        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        particle.x = Math.max(
          0,
          Math.min(width, particle.x)
        );

        particle.y = Math.max(
          0,
          Math.min(height, particle.y)
        );
      });

      // ------------------------------------------------------
      // CONNECTIONS BETWEEN PARTICLES
      // ------------------------------------------------------

      const maxDistanceSquared =
        maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i += 1) {
        const particleA = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j += 1
        ) {
          const particleB = particles[j];

          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;

          const distanceSquared =
            dx * dx + dy * dy;

          if (
            distanceSquared <
            maxDistanceSquared
          ) {
            const distance = Math.sqrt(
              distanceSquared
            );

            const opacity =
              (1 - distance / maxDistance) * 0.38;

            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 0.8;

            ctx.beginPath();
            ctx.moveTo(
              particleA.x,
              particleA.y
            );
            ctx.lineTo(
              particleB.x,
              particleB.y
            );
            ctx.stroke();
          }
        }

        // ----------------------------------------------------
        // CONNECTION TO MOUSE
        // ----------------------------------------------------

        if (
          mouse.x !== null &&
          mouse.y !== null
        ) {
          const dx =
            particleA.x - mouse.x;

          const dy =
            particleA.y - mouse.y;

          const mouseDistance =
            Math.sqrt(dx * dx + dy * dy);

          const mouseMaxDistance =
            maxDistance * 1.35;

          if (
            mouseDistance <
            mouseMaxDistance
          ) {
            const opacity =
              (1 -
                mouseDistance /
                  mouseMaxDistance) *
              0.5;

            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(
              particleA.x,
              particleA.y
            );
            ctx.lineTo(
              mouse.x,
              mouse.y
            );
            ctx.stroke();
          }
        }
      }

      // ------------------------------------------------------
      // GLOWING PARTICLES
      // ------------------------------------------------------

      ctx.shadowColor = `rgba(${color}, 0.9)`;
      ctx.shadowBlur = 7;

      particles.forEach((particle) => {
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${color}, 0.95)`;

        ctx.fill();
      });

      // Reset shadow
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      // ------------------------------------------------------
      // NEXT FRAME
      // ------------------------------------------------------

      animationRef.current =
        requestAnimationFrame(draw);
    };

    // --------------------------------------------------------
    // START ANIMATION
    // --------------------------------------------------------

    draw();

    // --------------------------------------------------------
    // CLEANUP
    // --------------------------------------------------------

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      resizeObserver.disconnect();

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      window.removeEventListener(
        'mouseout',
        handleMouseLeave
      );
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [
    particleCount,
    maxDistance,
    color,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${
        fixed ? 'fixed' : 'absolute'
      } inset-0 w-full h-full pointer-events-none select-none`}
      style={{
        zIndex: 5,
      }}
    />
  );
};

export default NetworkBackground;
