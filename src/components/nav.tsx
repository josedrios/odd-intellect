import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="nav__header">odd intellect</h1>
      </Link>
      <Link to="/auth" className="nav__account">
        John Doe
      </Link>
    </nav>
  );
}
