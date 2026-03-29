import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from '@/comments/comment-card';
import { Select, type Option } from '@/components/select';
import { useModal } from '@/context/modal-context';
import CommentCreate from '@/comments/comment-create';
import { useEffect, useState } from 'react';
import { getComments, getSubcomments } from '@/comments/comment.api';
import type { Comment } from '@/comments/comment.types';
import { useParams } from 'react-router-dom';
import Loader from '@/components/loader';
import { commentSorts } from '@/components/select-options';

export default function Comments() {
  const { id: postId } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortType, setSortType] = useState<Option>(commentSorts[0]);

  // Load parent comments on load
  useEffect(() => {
    async function loadComments() {
      if (!postId) return;
      try {
        setLoading(true);
        setError(null);
        const data: Comment[] = await getComments(postId, sortType.value);
        setComments(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load comments');
      } finally {
        setLoading(false);
      }
    }
    loadComments();
  }, [postId, sortType]);

  // Load parent comments function
  const loadReplies = async (commentId: number) => {
    const replies: Comment[] = await getSubcomments(commentId);
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, replies } : c)),
    );
  };

  const toggleReplies = async (commentId: number) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId ? { ...c, showReplies: !c.showReplies } : c,
      ),
    );
  };
  let body;
  if (loading) body = <Loader />;
  else if (error) body = <p>{error}</p>;
  else if (comments.length === 0) body = <p>No comments :(</p>;
  else
    body = (
      <>
        {comments.map((c) => (
          <>
            {/* Parent Comment */}
            <CommentCard
              key={c.id}
              comment={c}
              loadReplies={loadReplies}
              toggleReplies={toggleReplies}
            />
            {/* Parent Comment's Replies */}
            {c.showReplies &&
              c.replies?.map((r) => <CommentCard key={r.id} comment={r} />)}
          </>
        ))}
      </>
    );
  return (
    <div className="comment-section">
      <CommentSectionHeader sortType={sortType} setSortType={setSortType} />
      {body}
    </div>
  );
}

function CommentSectionHeader({
  sortType,
  setSortType,
}: {
  sortType: Option;
  setSortType: React.Dispatch<React.SetStateAction<Option>>;
}) {
  const { openModal } = useModal();

  return (
    <div className="comment-section__header">
      <CommentCreate />
      <Select
        options={commentSorts}
        defaultValue={commentSorts[0]}
        size={'xs'}
        value={sortType}
        setValue={setSortType}
      />
      <button
        className="comment-section__create-comment btn--text"
        onClick={() => openModal('comment create')}
      >
        CREATE COMMENT
      </button>
      <button className="btn--text">
        <Icon name={ICON.SHARE} />
      </button>
    </div>
  );
}
