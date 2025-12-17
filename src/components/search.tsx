import { ICON } from '@/util/icon-names';
import Icon from './icons';

export default function SearchBar() {
  return (
    <form className="search-bar">
      <input className="search-bar__input" placeholder={`Find a prompt`} />
      <button type="submit">
        <Icon name={ICON.SEARCH} />
      </button>
      <button>
        <Icon name={ICON.SORT} />
      </button>
    </form>
  );
}
