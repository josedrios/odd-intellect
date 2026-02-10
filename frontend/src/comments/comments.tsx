import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from './comment-card';
import Select from '@/components/select';
import { useModal } from '@/context/modal-context';
import CommentCreate from './comment-create';
import { useEffect, useState } from 'react';
import { getComments, getSubcomments } from './comment.api';
import type { Comment } from './comment.types';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { id: promptId } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!promptId) return;
      const data: Comment[] = await getComments(promptId);
      setComments(data);
    }
    fetchData();
  }, [promptId]);

  const loadReplies = async (commentId: number) => {
    const replies: Comment[] = await getSubcomments(commentId);
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, replies } : c)),
    );
  };

  if (comments === null) return <p>Loading...</p>;
  if (comments.length === 0) return <p>No comments :(</p>;

  return (
    <div className="comment-section">
      <CommentSectionHeader />
      {comments.map((c) => (
        <>
          {/* Parent Comment */}
          <CommentCard key={c.id} comment={c} loadReplies={loadReplies} />
          {/* Parent Comment's Replies */}
          {c.replies &&
            c.replies?.map((r) => <CommentCard key={r.id} comment={r} />)}
        </>
      ))}
    </div>
  );
}

function CommentSectionHeader() {
  const options = [
    { value: 'relevant', label: 'RELEVANT' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'popular', label: 'POPULAR' },
  ];

  const { openModal } = useModal();

  return (
    <div className="comment-section__header">
      <CommentCreate />
      <Select options={options} defaultValue={options[0]} size={'xs'} />
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
