"use client";

import { useEffect } from 'react';
import '../../styles/bridegroom.css';

export default function BrideGroom() {
  useEffect(() => {
    const clouds = document.querySelectorAll('.cloud');
    
    clouds.forEach((cloud, index) => {
      let position = -100;
      const speed = 0.2 + (index * 0.1); // Different speeds for each cloud
      const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
      
      if (direction === -1) {
        position = window.innerWidth + 100;
      }

      function animateCloud() {
        position += speed * direction;
        
        // Reset position when cloud goes off screen
        if (direction === 1 && position > window.innerWidth + 100) {
          position = -100;
        } else if (direction === -1 && position < -100) {
          position = window.innerWidth + 100;
        }
        
        cloud.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateCloud);
      }

      requestAnimationFrame(animateCloud);
    });
  }, []);

  return (
    <section className="couple">
      <div className="clouds">
        <img src="/images/assets/mitos__1I400___1600_px___1080___1900_px___37_.png" alt="cloud" className="cloud c1" />
        <img src="/images/assets/hsh.png" alt="cloud" className="cloud c2" />
        <img src="/images/assets/nngh.png" alt="cloud" className="cloud c3" />
        <img src="/images/assets/mitos__1I400___1600_px___1080___1900_px___34_.png" alt="cloud" className="cloud c4" />
      </div>
      
      <img src="/images/assets/puun.png" alt="tree" className="tree-left" />
      <img src="/images/assets/puun.png" alt="tree" className="tree-right" />
      
      <div className="bottom-decorations">
        {[1,2,3,4,5].map((_, index) => (
          <img 
            key={index}
            src="/images/assets/IMG_0306.png" 
            alt="decoration" 
            className="bottom-deco"
          />
        ))}
      </div>
      
      <div className="groom">
        <img src="/images/groom.jpg" alt="Groom" />
        <h2>Ilham Muhammad Haikal S.Kom</h2>
        <p>Putra dari</p>
        <p>Bpk. Montague & Ibu Montague</p>
      </div>
      
      <div className="separator">&</div>
      
      <div className="bride">
        <img src="/images/bride.jpg" alt="Bride" />
        <h2>Yulia Shantika Sari S.Kom</h2>
        <p>Putri dari</p>
        <p>Bpk. Capulet & Ibu Capulet</p>
      </div>
    </section>
  );
}