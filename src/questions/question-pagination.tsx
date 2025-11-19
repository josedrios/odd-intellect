import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

export default function QuestionPagination() {
  return (
    <div className="question-pagination">
      <button className="question-pagination__button">
        <Icon name={ICON.LEFTARROW} />
      </button>
      <p className="question-pagination__index">1 / 10</p>
      <button className="question-pagination__button">
        <Icon name={ICON.RIGHTARROW} />
      </button>
    </div>
  );
}
