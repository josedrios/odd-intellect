import Icon from '@/components/icons';
import { useModal } from '@/context/modal-context';
import { ICON } from '@/util/icon-names';
import CommentCreate from './comment-create';
import CommentOptions from './comment-options';
import type { Comment } from './comment.types';
import { commentDateFormatter } from '@/util/date-formatter';
import { useState } from 'react';
import Loader from '@/components/loader';

export default function CommentCard({
  comment,
  loadReplies,
  showReplies,
}: {
  comment: Comment;
  loadReplies?: (commentId: number) => void;
  showReplies?: (commentId: number) => void;
}) {
  return (
    <div
      className={`comment-card ${comment.parentId ? 'comment-card--child' : ''}`}
    >
      {/* This is a modal pop up component btw, just a placeholder for right now*/}
      <CommentCreate subcomment />
      {/* Modal pop up component for comment options, really need to better place/name these types of things i WILL do later */}
      <CommentOptions />
      <span className="comment-card__username">{comment.username}</span>
      {/* CHANGED USERNAME TO BE ON TOP, TEMPORARILY SHOWING CREATION DATE */}
      <span>{commentDateFormatter(comment.createdAt)}</span>
      <p className="comment-card__content">{comment.text}</p>
      <CommentFooter
        comment={comment}
        fetchReplies={loadReplies}
        showReplies={showReplies}
      />
    </div>
  );
}

function CommentFooter({
  comment,
  fetchReplies,
  showReplies,
}: {
  comment: Comment;
  fetchReplies?: (commentId: number) => void;
  showReplies?: (commentId: number) => void;
}) {
  const { openModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  return (
    <div className="comment-card__footer">
      {comment.replyCount > 0 && !loading ? (
        <button
          className="comment-card__replies btn--open"
          onClick={async () => {
            try {
              if (showReplies) {
                showReplies(comment.id);
              }
              setLoading(true);
              setError('');
              await fetchReplies?.(comment.id);
            } catch (error) {
              console.log(error);
              setError('Failed to load replies');
            } finally {
              setLoading(false);
            }
          }}
        >
          └─
          <span>
            {comment.showReplies ? (
              'HIDE REPLIES'
            ) : (
              <>
                {comment.replyCount}&nbsp;&nbsp;
                {comment.replyCount === 1 ? 'REPLY' : 'REPLIES'}
              </>
            )}
          </span>
        </button>
      ) : comment.replyCount > 0 && loading ? (
        <Loader />
      ) : (
        ''
      )}
      <div className="comment-card__controls">
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
    </div>
  );
}
