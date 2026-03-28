import { useAuthCtx } from '@/context/auth-context';
import { Link } from 'react-router-dom';

export default function Nav() {
  const { username, id } = useAuthCtx();
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="nav__header">odd intellect</h1>
      </Link>
      <Link
        to={`/${id ? 'users/' + username : 'login'}`}
        className="nav__account"
      >
        {username ? username : 'Account'}
      </Link>
    </nav>
  );
}
