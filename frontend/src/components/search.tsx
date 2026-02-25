import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import Select from '@/components/select';
import { useState } from 'react';
import { searchUsers } from '@/users/user.api';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');

  const searchOptions = [
    { value: 'posts', label: 'POSTS' },
    { value: 'users', label: 'USERS' },
  ];
  const sortOptions = [
    { value: 'relevant', label: 'RELEVANT' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'popular', label: 'POPULAR' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchUsers(query);
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
