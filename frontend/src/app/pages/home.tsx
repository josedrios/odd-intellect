import PostList from '@/posts/post-list';
import SearchBar from '@/components/search';
import { useEffect, useState } from 'react';
import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';
import SearchResults from '@/components/search-results';
import Loader from '@/components/loader';

export type SearchQuery = {
  results: Post[] | User[];
  type: string;
  loading: boolean;
  err: string;
};

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    results: [],
    type: '',
    loading: false,
    err: '',
  });

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  let body;
  if (searchQuery.loading) {
    body = <Loader />;
  } else if (searchQuery.err != '') {
    body = <p>There was an error with your search :(</p>;
  } else if (searchQuery.type != '') {
    body = (
      <SearchResults
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  } else {
    body = <PostList />;
  }

  return (
    // Implement the error and loading states into the flow of the code
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      {body}
    </>
  );
}
