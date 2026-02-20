import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import Select from '@/components/select';

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
  return (
    <form className="search-bar">
      <div className="search-bar__header">
        <input className="search-bar__input" placeholder={`Find a post`} />
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
