import '../../styles/location.css';

export default function Location() {
  return (
    <section className="location">
      <h2>Lokasi Acara</h2>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=..." 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="location-details">
        <h3>Grand Ballroom Hotel Mulia</h3>
        <p>Jl. Kenari No. 456, Jakarta Selatan</p>
        <a href="https://goo.gl/maps/..." target="_blank" className="direction-btn">
          Petunjuk Arah
        </a>
      </div>
    </section>
  );
}