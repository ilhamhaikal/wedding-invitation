import '../../styles/gallery.css';

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Galeri Foto</h2>
      <div className="gallery-grid">
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="gallery-item">
            <img src={`/images/gallery${item}.jpg`} alt={`Gallery ${item}`} />
          </div>
        ))}
      </div>
    </section>
  );
}