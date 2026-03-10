import { Link } from 'react-router-dom';
import type { User } from '@/users/user.types';

export default function UserCard({ user }: { user: User }) {
  return (
    <Link to={`/users/${user.username}`} className="card user-card">
      <p className="user-card__username">{user.username}</p>
      <p className="user-card__id">ID: {user.id}</p>
    </Link>
  );
}
