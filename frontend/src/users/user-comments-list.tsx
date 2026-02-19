import { useEffect, useState } from 'react';
import type { PostComment } from '@/comments/comment.types';
import Loader from '@/components/loader';

export default function UserCommentList() {
  const [postComments, setPostComments] = useState<PostComment[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);
      // attempt to fetch post comments
      // setPostComments();
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
  }, []);
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (postComments.length === 0) return <p>This user has no comments :(</p>;
  return {};
}
