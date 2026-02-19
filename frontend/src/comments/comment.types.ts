export type CommentApi = {
  id: number;
  username: string;
  user_id: number;
  parent_id?: number;
  text: string;
  reply_count: number;
  created_at: Date;
};

export type Comment = {
  id: number;
  username: string;
  userId: number;
  parentId?: number;
  text: string;
  replies: Comment[];
  replyCount: number;
  showReplies?: boolean;
  createdAt: Date;
};

// Used for cards that show a users response to a specific post
// These cards are used when viewing a users account/profile
export type PostCommentApi = {
  id: number;
  text: string;
  created_at: Date;
  post_id: number;
  post_text: string;
};

export type PostComment = {
  commentId: number;
  commentText: string;
  createdAt: Date;
  postId: number;
  postText: string;
};
