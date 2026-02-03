export type CommentApi = {
  id: number;
  user_id: number;
  parent_id: number;
  text: string;
  created_at: Date;
};

export type Comment = {
  id: number;
  userId: number;
  parentId: number;
  text: string;
  createdAt: Date;
};
