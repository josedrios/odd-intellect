import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination';
import PostCard from '@/posts/post-card';
import SearchBar from '@/components/search';
import { getPosts } from '@/posts/post.api';
import type { Post } from '@/posts/post.types';
import Loader from '@/components/loader';

export default function PostList({ account = false }: { account?: boolean }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);

        const data: Post[] = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load post list');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="post-list">
      <SearchBar />
      {!account && posts.map((post) => <PostCard key={post.id} post={post} />)}
      {/* These are below are used to show comments on specifc posts when vieing a profile */}
      {/* {account ? <PostCard comment /> : <PostCard />} */}
      {/* {account ? <PostCard comment /> : <PostCard />} */}
      {/* {account ? <PostCard comment /> : <PostCard />} */}
      <Pagination />
    </div>
  );
}
