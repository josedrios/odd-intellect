import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';

export default function SearchResults({
  type,
  results,
}: {
  type: string;
  results: User[] | Post[];
}) {
  console.log(type);
  if (type.toLowerCase() === 'users') return <p>user results</p>;
  if (type.toLowerCase() === 'posts') return <p>post results</p>;
  else return <p>error, go back to home page</p>;
}
