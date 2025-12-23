import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

export default function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination__button">
        <Icon name={ICON.LEFTARROW} />
      </button>
      <p className="pagination__index">1 / 10</p>
      <button className="pagination__button">
        <Icon name={ICON.RIGHTARROW} />
      </button>
    </div>
  );
}
