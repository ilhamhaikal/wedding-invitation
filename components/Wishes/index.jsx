import '../../styles/wishes.css';

export default function Wishes() {
  return (
    <section className="wishes">
      <h2>Ucapan & Doa</h2>
      <div className="wishes-form">
        <input type="text" placeholder="Nama Anda" className="input-field" />
        <textarea placeholder="Tulis ucapan dan doa..." className="input-field"></textarea>
        <button className="submit-btn">Kirim Ucapan</button>
      </div>
      <div className="wishes-list">
        <div className="wish-card">
          <h4>Ahmad</h4>
          <p>Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.</p>
          <span className="wish-time">2 jam yang lalu</span>
        </div>
        {/* More wish cards */}
      </div>
    </section>
  );
}