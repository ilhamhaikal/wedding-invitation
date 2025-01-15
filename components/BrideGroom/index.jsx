import '../../styles/bridegroom.css';

export default function BrideGroom() {
  return (
    <section className="couple">
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