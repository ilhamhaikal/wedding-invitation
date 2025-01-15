import '../../styles/giftregistry.css';

export default function GiftRegistry() {
  return (
    <section className="gift">
      <h2>Amplop Digital</h2>
      <div className="gift-container">
        <div className="gift-card">
          <h3>Bank BCA</h3>
          <p className="account-number">1234 5678 9012</p>
          <p className="account-name">Romeo Montague</p>
          <button className="copy-btn">Salin Nomor</button>
        </div>
        
        <div className="gift-card">
          <h3>Bank Mandiri</h3>
          <p className="account-number">9876 5432 1098</p>
          <p className="account-name">Juliet Capulet</p>
          <button className="copy-btn">Salin Nomor</button>
        </div>
      </div>
    </section>
  );
}