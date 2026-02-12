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
