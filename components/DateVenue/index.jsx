import '../../styles/datevenue.css';

export default function DateVenue() {
  return (
    <section className="event">
      <h2>Jadwal Acara</h2>
      
      <div className="ceremony">
        <h3>Akad Nikah</h3>
        <p className="date">Minggu, 12 December 2024</p>
        <p className="time">08:00 WIB - Selesai</p>
        <p className="venue">Masjid Al-Iman</p>
        <p className="address">Jl. Merpati No. 123, Jakarta Selatan</p>
      </div>
      
      <div className="reception">
        <h3>Resepsi</h3>
        <p className="date">Minggu, 12 December 2024</p>
        <p className="time">11:00 - 14:00 WIB</p>
        <p className="venue">Grand Ballroom Hotel Mulia</p>
        <p className="address">Jl. Kenari No. 456, Jakarta Selatan</p>
      </div>
    </section>
  );
}