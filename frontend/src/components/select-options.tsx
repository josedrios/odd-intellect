import type { Option } from '@/components/select';

export const searchFilters: Option[] = [
  { value: 'posts', label: 'POSTS' },
  { value: 'users', label: 'USERS' },
];

export const postSorts: Option[] = [
  { value: 'newest', label: 'NEWEST' },
  { value: 'popular', label: 'POPULAR' },
];

export const commentSorts: Option[] = [
  // ADD THIS BACK WHEN I FIND A FORMULA
  // { value: 'relevant', label: 'RELEVANT' },
  { value: 'newest', label: 'NEWEST' },
  { value: 'popular', label: 'POPULAR' },
];
