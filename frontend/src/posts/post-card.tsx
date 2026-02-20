import { Link } from 'react-router-dom';
import type { Post } from '@/posts/post.types';
import { postDateFormatter } from '@/util/date-formatter';
import type { PostComment } from '@/comments/comment.types';

export default function PostCard({
  post,
  postComment,
}: {
  post?: Post;
  postComment?: PostComment;
}) {
  let card;
  if (post) {
    card = {
      id: post.id,
      post: post.id + '. ' + post.text,
      info: post.commentCount,
      createdAt: post.createdAt,
    };
  } else if (postComment) {
    card = {
      id: postComment.postId,
      post: postComment.postId + '. ' + postComment.postText,
      info: postComment.commentText,
      createdAt: postComment.createdAt,
    };
  }

  if (!card) return null;

  if (post)
    return (
      <Link to={`/post/${card.id}`} className="post-card">
        <h2 className="post-card__post">{card.post.toUpperCase()}</h2>
        <p className={`post-card__info`}>└─ {card.info} COMMENTS</p>
        <p className="post-card__info">
          └─ {postDateFormatter(card.createdAt)}
        </p>
      </Link>
    );
  if (postComment)
    return (
      <Link to={`/post/${card.id}`} className="post-card">
        <p className={`post-card__info`}>┌─ {card.post}</p>
        <h3 className="post-card__post">{card.info}</h3>
      </Link>
    );
}
