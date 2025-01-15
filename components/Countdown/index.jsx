import '../../styles/countdown.css';

export default function Countdown() {
  return (
    <section className="countdown">
      <h2>Menuju Hari Bahagia</h2>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <span className="number">00</span>
          <span className="text">Hari</span>
        </div>
        <div className="countdown-item">
          <span className="number">00</span>
          <span className="text">Jam</span>
        </div>
        <div className="countdown-item">
          <span className="number">00</span>
          <span className="text">Menit</span>
        </div>
        <div className="countdown-item">
          <span className="number">00</span>
          <span className="text">Detik</span>
        </div>
      </div>
    </section>
  );
}