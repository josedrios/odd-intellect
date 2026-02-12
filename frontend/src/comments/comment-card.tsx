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
  loadReplies?: (commentId: number) => void;
}) {
  return (
    <div
      className={`comment-card ${comment.parentId ? 'comment-card--child' : ''}`}
    >
      {/* This is a modal pop up component btw, just a placeholder for right now*/}
      <CommentCreate subcomment />
      {/* Modal pop up component for comment options, really need to better place/name these types of things i WILL do later */}
      <CommentOptions />
      <p className="comment-card__content">
        <span className="comment-card__username">{comment.username}</span>
        {comment.text}
      </p>
      <CommentFooter comment={comment} loadReplies={loadReplies} />
    </div>
  );
}

function CommentFooter({
  comment,
  loadReplies,
}: {
  comment: Comment;
  loadReplies?: (commentId: number) => void;
}) {
  const { openModal } = useModal();
  console.log(comment.replyCount);

  return (
    <div className="comment-card__footer">
      {comment.replyCount > 0 ? (
        <button
          className="comment-card__replies btn--open"
          onClick={() => loadReplies?.(comment.id)}
        >
          └─
          <span>
            {comment.replyCount}&nbsp;
            {comment.replyCount === 1 ? 'REPLY' : 'REPLIES'}
          </span>
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
