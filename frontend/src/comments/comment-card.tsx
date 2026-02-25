import CommentCreate from '@/comments/comment-create';
import CommentOptions from '@/comments/comment-options';
import type { Comment } from '@/comments/comment.types';
import { commentDateFormatter } from '@/util/date-formatter';
import { CommentFooter } from '@/comments/comment-card-footer';
import { useNavigate } from 'react-router-dom';

export default function CommentCard({
  comment,
  loadReplies,
  toggleReplies,
}: {
  comment: Comment;
  loadReplies?: (commentId: number) => void;
  toggleReplies?: (commentId: number) => void;
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`comment-card ${comment.parentId ? 'comment-card--child' : ''}`}
    >
      {/* This is a modal pop up component btw, just a placeholder for right now*/}
      <CommentCreate subcomment />
      {/* Modal pop up component for comment options, really need to better place/name these types of things i WILL do later */}
      <CommentOptions />
      <div className="comment-card__header">
        <span
          className="comment-card__username"
          onClick={() => navigate(`/users/${comment.username}`)}
        >
          {comment.username}
        </span>
        <span className="comment-card__date">
          {commentDateFormatter(comment.createdAt)}
        </span>
      </div>
      <p className="comment-card__content">{comment.text}</p>
      <CommentFooter
        comment={comment}
        fetchReplies={loadReplies}
        toggleReplies={toggleReplies}
      />
    </div>
  );
}
