import PostCard from '@/posts/post-card';
import Pagination from '@/components/pagination';
import type { SearchQuery } from '@/app/pages/home';

export default function SearchResults({
  searchQuery,
}: {
  searchQuery: SearchQuery;
}) {
  if (searchQuery.results.length === 0) {
    return <p>No results found, sorry :(</p>;
  }
  if (searchQuery.type.toLowerCase() === 'posts')
    return (
      <div className="post-list">
        {searchQuery.results.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Pagination />
      </div>
    );
  if (searchQuery.type.toLowerCase() === 'users')
    return (
      <div>
        {searchQuery.results.map((user) => (
          <>
            <p>ID: {user.id}</p>
            <p>USERNAME: {user.username}</p>
          </>
        ))}
      </div>
    );
  else return <p>error, go back to home page</p>;
}
