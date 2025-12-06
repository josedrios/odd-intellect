import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__body">
        <a
          className="footer__link"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          BACK TO TOP
        </a>
        <Link to="/about" className="footer__link">
          ABOUT
        </Link>
        <Link to="/donate" className="footer__link">
          DONATE
        </Link>
        <a className="footer__link">FAQS</a>
        <Link to="/contact" className="footer__link">
          CONTACT
        </Link>
        <a className="footer__link">TOS</a>
        <a className="footer__link">REQUEST</a>
        <a className="footer__link">HELP</a>
      </div>
      <p className="footer__copyright">Copyright © 2025 Jose D. Rios</p>
    </div>
  );
}
