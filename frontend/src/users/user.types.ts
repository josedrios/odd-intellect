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
};
