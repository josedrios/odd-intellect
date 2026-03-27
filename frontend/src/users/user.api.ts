import type { User, UserApi } from '@/users/user.types';
import type { PostComment, PostCommentApi } from '@/comments/comment.types';
import { apiFetch } from '@/util/api-fetch';

function mapUser(user: UserApi): User {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    // bio: user.bio,
    // email: user.email,
    // currentStreak: user.current_streak,
    // longestStreak: user.longest_streak,
    // name: user.name,
    // country: user.country,
    // age: user.age,
    // gender: user.gender,
    // commentCount: user.comment_count,
  };
}

export async function createUser(user: {
  email: string;
  username: string;
  password: string;
}) {
  const createdUser: boolean = await apiFetch<boolean>('/users', {
    method: 'POST',
    body: JSON.stringify(user),
  });
  console.log('USER CREATION STATUS: ', createdUser);
}

export async function getUser(username: string): Promise<User> {
  const fetchedUser: UserApi = await apiFetch<UserApi>(`/users/${username}`, {
    method: 'GET',
  });
  const user: User = mapUser(fetchedUser);
  return user;
}

function mapPostComments(comment: PostCommentApi): PostComment {
  return {
    commentId: comment.id,
    commentText: comment.text,
    createdAt: new Date(comment.created_at),
    postId: comment.post_id,
    postText: comment.post_text,
  };
}

export async function getUserComments(
  username: string,
): Promise<PostComment[]> {
  const fetchedComments: PostCommentApi[] = await apiFetch<PostCommentApi[]>(
    `/users/${username}/comments`,
    { method: 'GET' },
  );
  const comments: PostComment[] = fetchedComments.map(mapPostComments);
  return comments;
}

export async function searchUsers(query: string): Promise<User[]> {
  console.log(query);
  const fetchedUsers: UserApi[] = await apiFetch<UserApi[]>(
    `/users/search/${query}`,
    {
      method: 'GET',
    },
  );
  const users: User[] = fetchedUsers.map(mapUser);
  console.log(users);
  return users;
}
