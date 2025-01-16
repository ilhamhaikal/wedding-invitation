"use client";

import { useEffect, useRef } from 'react';
import '../../styles/gallery.css';

export default function Gallery() {
  const canvasRef = useRef(null);
  const images = [
    '/images/gallery/prewedding1.jpg',
    '/images/gallery/prewedding2.jpg',
    '/images/gallery/prewedding3.jpg',
    '/images/gallery/prewedding4.jpg',
    '/images/gallery/prewedding5.jpg',
    '/images/gallery/prewedding6.jpg'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make canvas taller
    };

    // Create particles
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      opacity: Math.random()
    }));

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.opacity = Math.sin(particle.y / 100) * 0.5 + 0.5;

        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }

        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="gallery">
      <canvas ref={canvasRef} className="falling-animation" />
      <h2>Galeri Foto</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}