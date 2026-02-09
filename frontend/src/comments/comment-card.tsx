import Icon from '@/components/icons';
import { useModal } from '@/context/modal-context';
import { ICON } from '@/util/icon-names';
import CommentCreate from './comment-create';
import CommentOptions from './comment-options';
import type { Comment } from './comment.types';

export default function CommentCard({
  comment,
  loadReplies,
}: {
  comment: Comment;
  loadReplies: (commentId: number) => void;
}) {
  return (
    <div
      className={`comment-card ${comment.parentId ? 'comment-card--child' : ''}`}
    >
      <CommentCreate subcomment />
      <CommentOptions />
      <p className="comment-card__content">
        <span className="comment-card__username">{comment.username}</span>
        {comment.text}
      </p>
      <CommentFooter
        parent={!comment.parentId}
        loadReplies={loadReplies}
        commentId={comment.id}
      />
    </div>
  );
}

function CommentFooter({
  parent,
  commentId,
  loadReplies,
}: {
  parent: boolean;
  commentId: number;
  loadReplies: (commentId: number) => void;
}) {
  const { openModal } = useModal();

  return (
    <div className="comment-card__footer">
      {parent ? (
        <button
          className="comment-card__replies btn--open"
          onClick={() => loadReplies(commentId)}
        >
          └─<span>VIEW REPLIES</span>
        </button>
      ) : (
        <div className="comment-card__footer-spacer" />
      )}
      <button
        className="comment-card__reply btn--open"
        onClick={() => openModal('comment reply')}
      >
        <Icon name={ICON.REPLY} />
      </button>
      <button className="comment-card__upvotes btn--open">
        <Icon name={ICON.UPARROW} />
        <p>14</p>
      </button>
      <button className="comment-card__downvotes btn--open">
        <Icon name={ICON.DOWNARROW} />
        <p>2</p>
      </button>
      <button
        className="comment-card__ellipsis btn--open"
        onClick={() => openModal('comment options')}
      >
        <Icon name={ICON.ELLIPSIS} />
      </button>
    </div>
  );
}
