import { Link } from 'react-router-dom';
import type { Post } from '@/posts/post.types';
import { postDateFormatter } from '@/util/date-formatter';

export default function PostCard({
  post,
  comment = false,
}: {
  post: Post;
  comment?: boolean;
}) {
  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <h2 className="post-card__post">
        {post.id}. {post.text.toUpperCase()}
      </h2>
      {comment ? (
        <p className="post-card__info post-card__comment">
          This is test comment to see how the UI under a post card would look
          like. I am writing gibberish to see how it will fill up the card and
          how it would look like. I will continue typing to fill this up even
          more because I the current amount of words I have here is not enough.
        </p>
      ) : (
        <>
          <p className="post-card__info">└─ {post.commentCount} COMMENTS</p>
        </>
      )}
      <p className="post-card__info">└─ {postDateFormatter(post.createdAt)}</p>
    </Link>
  );
}
