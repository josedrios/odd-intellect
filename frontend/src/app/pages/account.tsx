import TextPanel from '@/components/text-panel';
import { useEffect, useState } from 'react';
import PostList from '@/posts/post-list';
import AccountList from '@/users/account-list';
import { getUser } from '@/users/user.api';
import type { User } from '@/users/user.types';
import { useParams } from 'react-router-dom';

export type AccountAttribute = {
  label: string;
  value: string;
};

export default function AccountPage({ isMe = false }: { isMe?: boolean }) {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewComments, setViewComments] = useState(false);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        if (isMe) {
          const data: User = await getUser('alex_writes');
          setUser(data);
        } else {
          if (!username) return;
          const data: User = await getUser(username);
          setUser(data);
        }
      } catch (error) {
        console.log(error);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [isMe, username]);

  return (
    <>
      <TextPanel text="somedude" />
      {user ? <AccountList user={user} isMe={isMe} /> : ''}
      {viewComments && user ? (
        <>
          <PostList id={user.id} />
        </>
      ) : (
        <button
          className="account-view-comments btn--bordered"
          onClick={(e) => {
            e.preventDefault();
            setViewComments(true);
          }}
        >
          PEEK INSIDE THEIR MIND
        </button>
      )}
    </>
  );
}
