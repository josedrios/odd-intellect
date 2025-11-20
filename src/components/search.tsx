import { ICON } from '@/util/icon-names';
import Icon from './icons';

interface SearchProps {
  account?: boolean;
}

export default function SearchBar({ account = false }: SearchProps) {
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        placeholder={`Find a ${account ? 'Comment' : 'Question'}`}
      />
      <button type="submit">
        <Icon name={ICON.SEARCH} />
      </button>
      <button>
        <Icon name={ICON.SORT} />
      </button>
    </form>
  );
}
