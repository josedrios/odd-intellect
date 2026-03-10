import { useState } from 'react';
import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import { searchSorts, searchFilters } from '@/components/select-options';
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
  const [searchType, setSearchType] = useState<Option>(searchFilters[0]);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    document.activeElement.blur(); // unfocuses on search bar after submission

    setSearchQuery((prev) => ({ ...prev, loading: true }));
    try {
      if (searchInput.trim() === '') {
        setSearchQuery({ results: [], type: '', loading: false, err: '' });
      } else if (searchType.value === 'posts') {
        // TESTING SORT HERE, NEED TO MAKE STATE FOR SORT TYPE AND APPLY IT TO SEARCH RESULTS AND REGULAR POST HOME PAGE
        const fetchedPosts: Post[] = await searchPosts(searchInput);
        const sortedPosts = fetchedPosts.sort(
          (a, b) => b.commentCount - a.commentCount,
        );
        setSearchQuery((prev) => ({
          ...prev,
          results: sortedPosts,
          type: searchType.value,
        }));
      } else {
        const fetchedUsers: User[] = await searchUsers(searchInput);
        setSearchQuery((prev) => ({
          ...prev,
          results: fetchedUsers,
          type: searchType.value,
        }));
      }
    } catch (error) {
      console.log(error);
      setSearchQuery((prev) => ({
        ...prev,
        error:
          'You got an error :(, will go into detail on what the error is when I implement the code',
      }));
    } finally {
      setSearchQuery((prev) => ({ ...prev, loading: false }));
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
          options={searchFilters}
          defaultValue={searchFilters[0]}
          size={'xs'}
          value={searchType}
          setValue={setSearchType}
        />
        <p>{'     '} </p>
        <p>SORT:</p>
        {/* NEEDS A STATE AND STATE UPDATER (value and setValue) */}
        <Select
          options={searchSorts}
          defaultValue={searchSorts[0]}
          size={'xs'}
        />
      </div>
    </form>
  );
}
