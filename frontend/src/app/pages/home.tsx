import PostList from '@/posts/post-list';
import SearchBar from '@/components/search';
import { useState } from 'react';
import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';
import SearchResults from '@/components/search-results';
import type { Option } from '@/components/select';
import { searchOptions } from '@/components/select-options';

export default function HomePage() {
  // Results from searcj query
  const [results, setResults] = useState<User[] | Post[]>([]);
  const [searchType, setSearchType] = useState<Option>(searchOptions[0]);

  return (
    <>
      <SearchBar
        setResults={setResults}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      {results.length !== 0 ? (
        <SearchResults results={results} type={searchType.value} />
      ) : (
        <PostList />
      )}
    </>
  );
}
