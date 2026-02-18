import Comments from '@/comments/comments';
import { getPost } from '@/posts/post.api';
import type { Post } from '@/posts/post.types';
import TextPanel from '@/components/text-panel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '@/components/loader';

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const data: Post = await getPost(id);
        setPost(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load post info');
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!post) return <p>No post found :(</p>;

  // Formatting post text for TextPanel component
  const postText = post.id + '. ' + post.text;
  return (
    <>
      <TextPanel text={postText} />
      <Comments />
    </>
  );
}
