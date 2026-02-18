import { ICON } from '@/util/icon-names';
import Icon from '@/components/icons';
import Select from '@/components/select';

export default function SearchBar() {
  const options = [
    { value: 'relevant', label: 'RELEVANT' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'popular', label: 'POPULAR' },
  ];

  return (
    <form className="search-bar">
      <button type="submit" className="btn--bordered">
        <Icon name={ICON.SEARCH} />
      </button>
      <input className="search-bar__input" placeholder={`Find a post`} />
      <Select options={options} defaultValue={options[0]} size={'xs'} />
    </form>
  );
}
