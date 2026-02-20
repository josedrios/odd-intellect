import { useEffect, useState } from 'react';
import type { PostComment } from '@/comments/comment.types';
import Loader from '@/components/loader';
import { getUserComments } from './user.api';
import PostCard from '@/posts/post-card';

export default function UserCommentList({ username }: { username: string }) {
  const [postComments, setPostComments] = useState<PostComment[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadComments() {
      try {
        setLoading(true);
        setError(null);
        const data: PostComment[] = await getUserComments(username);
        setPostComments(data);
      } catch (err) {
        console.log(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    }
    loadComments();
  }, [username]);
  if (!username) return null;
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!postComments) return null;
  if (postComments.length === 0) return <p>This user has no comments :(</p>;
  return (
    <div className="post-list">
      <h3>{username.toUpperCase()}'S THOUGHTS:</h3>
      {postComments.map((card) => (
        <PostCard key={card.commentId} postComment={card} />
      ))}
    </div>
  );
}
