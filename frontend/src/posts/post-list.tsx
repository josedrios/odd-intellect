import { useEffect, useState } from 'react';
import { Select } from '@/components/select';
import { postSorts } from '@/components/select-options';
import PostCard from '@/posts/post-card';
import { getPostCount, getPosts } from '@/posts/post.api';
import type { Post } from '@/posts/post.types';
import Loader from '@/components/loader';
import type { Option } from '@/components/select';
import { Pagination, type Paginator } from '@/components/pagination';

export default function PostList() {
  const [paginator, setPaginator] = useState<Paginator>({
    totalPages: 1,
    currentPage: 1,
    initialized: false,
  });
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortType, setSortType] = useState<Option>(postSorts[0]);

  useEffect(() => {
    async function initPaginator() {
      try {
        const postCount = await getPostCount();
        setPaginator((prev) => ({
          ...prev,
          initialized: true,
          totalPages: postCount,
        }));
      } catch (err) {
        console.log(err);
        setError('Failed to fetch post count');
      }
    }
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);

        const data: Post[] = await getPosts(sortType.value);
        setPosts(data);
      } catch (err) {
        console.log(err);
        setError('Failed to load post list');
      } finally {
        setLoading(false);
      }
    }
    if (!paginator.initialized) {
      initPaginator();
    }
    loadPosts();
  }, [paginator, sortType]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (posts.length === 0) return <p>No posts :(</p>;

  return (
    <div className="post-list">
      <div className="post-list__sort">
        <p>POST LIST:</p>
        <Select
          options={postSorts}
          defaultValue={postSorts[0]}
          size={'xs'}
          value={sortType}
          setValue={setSortType}
        />
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {paginator.initialized && (
        <Pagination paginator={paginator} setPaginator={setPaginator} />
      )}
    </div>
  );
}
