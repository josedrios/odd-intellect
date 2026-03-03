import PostList from '@/posts/post-list';
import SearchBar from '@/components/search';
import { useEffect, useState } from 'react';
import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';
import SearchResults from '@/components/search-results';

export type SearchQuery = {
  results: Post[] | User[];
  type: string;
};

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    results: [],
    type: '',
  });

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      {searchQuery && searchQuery.type != '' ? (
        <SearchResults searchQuery={searchQuery} />
      ) : (
        <PostList />
      )}
    </>
  );
}
