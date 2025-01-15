import '../../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Design by 
          <a href="https://eternavite.com" target="_blank" rel="noopener noreferrer">
            EternaVite
          </a>
        </p>
        <p className="copyright">© {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
}