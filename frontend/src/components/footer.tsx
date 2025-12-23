import { Link } from 'react-router-dom';
import backToTop from '@/util/back-to-top';
export default function Footer() {
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
          <Link key={link} to={`/${link}`} className="footer__link">
            {link.toUpperCase()}
          </Link>
        ))}
      </div>
      <p className="footer__copyright">Copyright © 2025 Jose D. Rios</p>
    </div>
  );
}
