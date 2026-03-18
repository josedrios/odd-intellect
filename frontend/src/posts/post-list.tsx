import { useEffect, useState } from 'react';
import { Select } from '@/components/select';
import { searchSorts } from '@/components/select-options';
import PostCard from '@/posts/post-card';
import { getPosts } from '@/posts/post.api';
import type { Post } from '@/posts/post.types';
import Loader from '@/components/loader';
import type { Option } from '@/components/select';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortType, setSortType] = useState<Option>(searchSorts[0]);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);

        const data: Post[] = await getPosts(sortType.value);
        setPosts(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load post list');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [sortType]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (posts.length === 0) return <p>No posts :(</p>;

  return (
    <div className="post-list">
      <div className="post-list__sort">
        <p>POST LIST:</p>
        <Select
          options={searchSorts}
          defaultValue={searchSorts[0]}
          size={'xs'}
          value={sortType}
          setValue={setSortType}
        />
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
