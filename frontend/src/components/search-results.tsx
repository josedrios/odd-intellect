import PostCard from '@/posts/post-card';
import Pagination from '@/components/pagination';
import type { SearchQuery } from '@/app/pages/home';
import UserCard from '@/users/user-card';

export default function SearchResults({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
}) {
  let result;
  if (searchQuery.results.length === 0) {
    result = <p>No results found, sorry :(</p>;
  } else if (searchQuery.type.toLowerCase() === 'posts') {
    result = (
      <div className="post-list">
        {searchQuery.results.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Pagination />
      </div>
    );
  } else if (searchQuery.type.toLowerCase() === 'users') {
    result = (
      <div>
        {searchQuery.results.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    );
  } else if (searchQuery.err != '') {
    result = <p>error, go back to home page</p>;
  } else {
    result = <p>sorry, we had an issue processing your search</p>;
  }

  return (
    <>
      <button
        onClick={() =>
          setSearchQuery({ results: [], type: '', loading: false, err: '' })
        }
      >
        Clear Search
      </button>
      {result}
    </>
  );
}
