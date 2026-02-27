import { useState, type SetStateAction } from 'react';
import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import { searchOptions, sortOptions } from '@/components/select-options';
import { Select } from '@/components/select';
import { searchUsers } from '@/users/user.api';
import { searchPosts } from '@/posts/post.api';
import type { User } from '@/users/user.types';
import type { Post } from '@/posts/post.types';
import type { Option } from '@/components/select';

export default function SearchBar({
  setResults,
  searchType,
  setSearchType,
}: {
  setResults: React.Dispatch<SetStateAction<User[] | Post[]>>;
  searchType: Option;
  setSearchType: React.Dispatch<React.SetStateAction<Option>>;
}) {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('This search type is ' + searchType.value);
    if (searchType.value === 'posts') {
      console.log('posts query search');
      const fetchedPosts: Post[] = await searchPosts(query);
      setResults(fetchedPosts);
    } else {
      console.log('user query search');
      const fetchedUsers: User[] = await searchUsers(query);
      setResults(fetchedUsers);
    }
  }

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
