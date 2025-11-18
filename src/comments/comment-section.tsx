import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from './comment-card';

export default function CommentSection() {
  return (
    <div className="comment-section">
      <CommentSectionHeader />
      <CommentCard username="Some Dude" parent />
      <CommentCard username="Some Dude" />
      <CommentCard username="Some Dude" parent />
      <CommentCard username="Some Dude" />
      <CommentCard username="Some Dude" />
    </div>
  );
}

function CommentSectionHeader() {
  return (
    <div className="comment-section__header">
      <button className="comment-section__sort btn--text">
        <p>RELEVANT</p>
        <Icon name={ICON.SORT} />
      </button>
      <button className="comment-section__create-comment btn--text">
        CREATE COMMENT
      </button>
    </div>
  );
}
