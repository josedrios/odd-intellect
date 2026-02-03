import type { Comment, CommentApi } from './comment.types';
import { apiFetch } from '@/util/apiFetch';

function mapComment(comment: CommentApi): Comment {
  return {
    id: comment.id,
    userId: comment.user_id,
    parentId: comment.parent_id,
    text: comment.text,
    createdAt: comment.created_at,
  };
}

export async function getComments(promptId: string): Promise<Comment[]> {
  const fetchedComments: CommentApi[] = await apiFetch<CommentApi[]>(
    `/prompts/${promptId}/comments`,
    { method: 'GET' },
  );
  const comments: Comment[] = fetchedComments.map(mapComment);
  console.log('Fetched Comments:');
  console.log(comments);
  return comments;
}
