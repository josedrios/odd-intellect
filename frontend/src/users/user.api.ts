import type { User, UserApi } from '@/users/user.types';
import { apiFetch } from '@/util/api-fetch';

function mapUser(user: UserApi): User {
  return {
    id: user.id,
    username: user.username,
    bio: user.bio,
    email: user.email,
    currentStreak: user.current_streak,
    longestStreak: user.longest_streak,
    name: user.name,
    country: user.country,
    age: user.age,
    gender: user.gender,
  };
}

export async function getUser(username: string): Promise<User> {
  const fetchedUser: UserApi = await apiFetch<UserApi>(`/users/${username}`, {
    method: 'GET',
  });
  const user: User = mapUser(fetchedUser);
  console.log('Fetched User: ');
  console.log(user);
  return user;
}
