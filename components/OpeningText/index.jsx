"use client";

import { useEffect } from 'react';
import '../../styles/opening.css';

export default function OpeningText() {
  useEffect(() => {
    const flowerTop = document.querySelector('.flower-top');
    const flowerBottom = document.querySelector('.flower-bottom');
    let angle = 0;

    const animate = () => {
      angle += 0.02;
      const yOffset = Math.sin(angle) * 10;
      const xOffset = Math.cos(angle) * 5;

      if (flowerTop) {
        flowerTop.style.transform = `rotate(180deg) translate(${xOffset}px, ${yOffset}px)`;
      }
      if (flowerBottom) {
        flowerBottom.style.transform = `translate(${-xOffset}px, ${-yOffset}px)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="opening">
      <img src="/images/assets/asfa.png" alt="flower" className="flower-top" />
      <div className="opening-content">
        <p className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <img src="/images/assets/divider.png" alt="divider" className="divider" />
        <p className="greeting">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
        <p className="message">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan 
          acara pernikahan putra-putri kami:
        </p>
      </div>
      <img src="/images/assets/asfa.png" alt="flower" className="flower-bottom" />
    </section>
  );
}