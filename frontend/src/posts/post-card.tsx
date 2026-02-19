import { Link } from 'react-router-dom';
import type { Post } from '@/posts/post.types';
import { postDateFormatter } from '@/util/date-formatter';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <h2 className="post-card__post">
        {post.id}. {post.text.toUpperCase()}
      </h2>
      <p className="post-card__info">└─ {post.commentCount} COMMENTS</p>
      <p className="post-card__info">└─ {postDateFormatter(post.createdAt)}</p>
    </Link>
  );
}
