import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import { Select } from '@/components/select';
import { useState } from 'react';
import { searchUsers } from '@/users/user.api';
import { searchPosts } from '@/posts/post.api';
import type { Option } from '@/components/select';

export default function SearchBar() {
  const searchOptions = [
    { value: 'posts', label: 'POSTS' },
    { value: 'users', label: 'USERS' },
  ];
  const sortOptions = [
    { value: 'relevant', label: 'RELEVANT' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'popular', label: 'POPULAR' },
  ];

  const [query, setQuery] = useState<string>('');
  const [searchType, setSearchType] = useState<Option>(searchOptions[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('This search type is ' + searchType.value);
    if (searchType.value === 'posts') {
      console.log('posts query search');
      searchPosts(query);
    } else {
      console.log('user query search');
      searchUsers(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__header">
        <input
          className="search-bar__input"
          value={query}
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
        <Select
          options={sortOptions}
          defaultValue={sortOptions[0]}
          size={'xs'}
        />
      </div>
    </form>
  );
}
