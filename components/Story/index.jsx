import '../../styles/story.css';

export default function Story() {
  return (
    <section className="love-story">
      <h2>Our Love Story</h2>
      
      <div className="timeline">
        <div className="story-item">
          <div className="date">2020</div>
          <h3>First Meet</h3>
          <p>Pertama kali bertemu di sebuah cafe...</p>
        </div>
        
        <div className="story-item">
          <div className="date">2022</div>
          <h3>Dating</h3>
          <p>Mulai menjalin hubungan yang serius...</p>
        </div>
        
        <div className="story-item">
          <div className="date">2024</div>
          <h3>Engagement</h3>
          <p>Memutuskan untuk melangkah ke jenjang pernikahan...</p>
        </div>
      </div>
    </section>
  );
}