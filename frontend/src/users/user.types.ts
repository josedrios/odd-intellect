export type UserApi = {
  id: number;
  username: string;
  bio?: string;
  email?: string;
  current_streak?: number;
  longest_streak?: number;
  name?: string;
  country?: string;
  age?: number;
  gender?: string;
  comment_count: number;
  // private: boolean;
};

export type User = {
  id: number;
  username: string;
  bio?: string;
  email?: string;
  currentStreak?: number;
  longestStreak?: number;
  name?: string;
  country?: string;
  age?: number;
  gender?: string;
  commentCount: number;
};
