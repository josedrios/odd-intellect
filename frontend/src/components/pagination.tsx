import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import type { SetStateAction } from 'react';

export type Paginator = {
  totalPages: number;
  currentPage: number;
  initialized: boolean;
};

export function Pagination({
  paginator,
  setPaginator,
}: {
  paginator: Paginator;
  setPaginator: React.Dispatch<SetStateAction<Paginator>>;
}) {
  const changePage = (direction: number) => {
    setPaginator((prev) => {
      if (paginator.totalPages < prev.currentPage) {
        return { ...prev, currentPage: paginator.totalPages };
      } else if (prev.currentPage < 0) {
        return { ...prev, currentPage: 0 };
      } else if (prev.currentPage === paginator.totalPages && direction > 0) {
        return prev;
      } else if (prev.currentPage === 0 && direction < 0) {
        return prev;
      } else {
        return { ...prev, currentPage: prev.currentPage + direction };
      }
    });
  };

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => changePage(-1)}>
        <Icon name={ICON.LEFTARROW} />
      </button>
      <p className="pagination__index">
        {paginator.currentPage} / {paginator.totalPages}
      </p>
      <button className="pagination__button" onClick={() => changePage(1)}>
        <Icon name={ICON.RIGHTARROW} />
      </button>
    </div>
  );
}
