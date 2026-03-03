import { useState } from 'react';
import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import { searchOptions, sortOptions } from '@/components/select-options';
import { Select } from '@/components/select';
import { searchUsers } from '@/users/user.api';
import { searchPosts } from '@/posts/post.api';
import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';
import type { Option } from '@/components/select';
import type { SearchQuery } from '@/app/pages/home';

export default function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
}) {
  const [searchType, setSearchType] = useState<Option>(searchOptions[0]);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('This search type is ' + searchType.value);
    if (searchInput.trim() === '') {
      setSearchQuery({ results: [], type: '' });
    } else if (searchType.value === 'posts') {
      console.log('posts query search');
      const fetchedPosts: Post[] = await searchPosts(searchInput);
      setSearchQuery({ results: fetchedPosts, type: searchType.value });
    } else {
      console.log('user query search');
      const fetchedUsers: User[] = await searchUsers(searchInput);
      setSearchQuery({ results: fetchedUsers, type: searchType.value });
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__header">
        <input
          className="search-bar__input"
          value={searchInput}
          placeholder={`Find a post`}
          onChange={handleChange}
        />
        <button type="submit" className="btn--bordered">
          <Icon name={ICON.SEARCH} />
        </button>
      </div>
      <div className="search-bar__footer">
        <p>TYPE:</p>
        <Select
          options={searchOptions}
          defaultValue={searchOptions[0]}
          size={'xs'}
          value={searchType}
          setValue={setSearchType}
        />
        <p>{'     '} </p>
        <p>SORT:</p>
        {/* NEEDS A STATE AND STATE UPDATER (value and setValue) */}
        <Select
          options={sortOptions}
          defaultValue={sortOptions[0]}
          size={'xs'}
        />
      </div>
    </form>
  );
}
