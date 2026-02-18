import type { Post, PostApi } from '@/posts/post.types';
import { apiFetch } from '@/util/api-fetch';

function mapPost(post: PostApi): Post {
  return {
    id: post.id,
    text: post.text,
    createdAt: new Date(post.created_at),
    commentCount: post.comment_count,
  };
}

export async function getPosts(): Promise<Post[]> {
  const fetchedPosts: PostApi[] = await apiFetch<PostApi[]>('/posts', {
    method: 'GET',
  });
  const posts: Post[] = fetchedPosts.map(mapPost);
  console.log('Fetched Posts:');
  console.log(posts);
  return posts;
}

export async function getPost(postId: string): Promise<Post> {
  const fetchedPost: PostApi = await apiFetch<PostApi>(`/posts/${postId}`, {
    method: 'GET',
  });
  const post: Post = mapPost(fetchedPost);
  console.log('Fetched Post:');
  console.log(post);
  return post;
}
