import Icon from '@/components/icons';
import { useModal } from '@/context/modal-context';
import { ICON } from '@/util/icon-names';
import type { Comment } from './comment.types';
import { useState } from 'react';
import Loader from '@/components/loader';

export function CommentFooter({
  comment,
  fetchReplies,
  toggleReplies,
}: {
  comment: Comment;
  fetchReplies?: (commentId: number) => void;
  toggleReplies?: (commentId: number) => void;
}) {
  const { openModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  return (
    <div className="comment-card__footer">
      <ShowReplies
        comment={comment}
        fetchReplies={fetchReplies}
        toggleReplies={toggleReplies}
        setLoading={setLoading}
        loading={loading}
        setError={setError}
        error={error}
      />
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

function ShowReplies({
  comment,
  fetchReplies,
  toggleReplies,
  setLoading,
  loading,
  setError,
  error,
}: {
  comment: Comment;
  fetchReplies?: (commentId: number) => void;
  toggleReplies?: (commentId: number) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}) {
  return (
    <>
      {comment.replyCount > 0 && !loading ? (
        <button
          className="comment-card__replies btn--open"
          onClick={async () => {
            if (toggleReplies && comment.showReplies) {
              toggleReplies(comment.id);
              return;
            } else if (toggleReplies && !comment.showReplies) {
              toggleReplies(comment.id);
            }
            try {
              setLoading(true);
              setError('');
              await fetchReplies?.(comment.id);
            } catch (err) {
              console.log(err);
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
    </>
  );
}
