import '../../styles/qrcode.css';

export default function QRCode() {
  return (
    <section className="qrcode">
      <h2>E-Invitation</h2>
      <div className="qrcode-container">
        <div className="qrcode-card">
          <img src="/images/qrcode.png" alt="QR Code" />
          <p>Silakan scan QR Code ini saat memasuki tempat acara</p>
        </div>
      </div>
    </section>
  );
}