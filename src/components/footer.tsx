import { Link } from 'react-router-dom';
export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    'about',
    'donate',
    'contact',
    'terms',
    'request',
    'help',
  ];

  return (
    <div className="footer">
      <div className="footer__body">
        <a onClick={() => backToTop()} className="footer__link">
          BACK TO TOP
        </a>
        {footerLinks.map((link) => (
          <Link
            key={link}
            to={`/${link}`}
            onClick={() => backToTop()}
            className="footer__link"
          >
            {link.toUpperCase()}
          </Link>
        ))}
      </div>
      <p className="footer__copyright">Copyright © 2025 Jose D. Rios</p>
    </div>
  );
}
