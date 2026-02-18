import type { Comment, CommentApi } from '@/comments/comment.types';
import { apiFetch } from '@/util/api-fetch';

function mapComment(comment: CommentApi): Comment {
  return {
    id: comment.id,
    username: comment.username,
    userId: comment.user_id,
    parentId: comment.parent_id,
    text: comment.text,
    createdAt: new Date(comment.created_at),
    replies: [],
    replyCount: Number(comment.reply_count ?? '0'),
    showReplies: false,
  };
}

export async function getComments(postId: string): Promise<Comment[]> {
  const fetchedComments: CommentApi[] = await apiFetch<CommentApi[]>(
    `/posts/${postId}/comments`,
    { method: 'GET' },
  );
  const comments: Comment[] = fetchedComments.map(mapComment);
  console.log('Fetched Comments:');
  console.log(comments);
  return comments;
}

export async function getSubcomments(commentId: number): Promise<Comment[]> {
  const fetchedComments: CommentApi[] = await apiFetch<CommentApi[]>(
    `/comments/${commentId}/subcomments`,
    { method: 'GET' },
  );
  const comments: Comment[] = fetchedComments.map(mapComment);
  console.log('Fetched Subcomments:');
  console.log(comments);
  return comments;
}
