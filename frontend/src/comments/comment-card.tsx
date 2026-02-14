import CommentCreate from '@/comments/comment-create';
import CommentOptions from '@/comments/comment-options';
import type { Comment } from '@/comments/comment.types';
import { commentDateFormatter } from '@/util/date-formatter';
import { CommentFooter } from '@/comments/comment-card-footer';

export default function CommentCard({
  comment,
  loadReplies,
  toggleReplies,
}: {
  comment: Comment;
  loadReplies?: (commentId: number) => void;
  toggleReplies?: (commentId: number) => void;
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
        toggleReplies={toggleReplies}
      />
    </div>
  );
}
