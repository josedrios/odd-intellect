export type Comment = {
  id: number;
  userId: number;
  parentId: number;
  text: string;
  createdAt: Date;
};
