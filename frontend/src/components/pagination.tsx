import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const changePage = (direction: number) => {
    setCurrentPage((prev) => {
      if (totalPages < prev) {
        return totalPages;
      } else if (prev < 0) {
        return 1;
      } else if (prev === totalPages && direction > 0) {
        return totalPages;
      } else if (prev === 0 && direction < 0) {
        return 0;
      } else {
        return prev + direction;
      }
    });
  };

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => changePage(1)}>
        <Icon name={ICON.LEFTARROW} />
      </button>
      <p className="pagination__index">
        {currentPage} / {totalPages}
      </p>
      <button className="pagination__button" onClick={() => changePage(-1)}>
        <Icon name={ICON.RIGHTARROW} />
      </button>
    </div>
  );
}
