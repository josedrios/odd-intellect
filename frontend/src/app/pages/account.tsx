import TextPanel from '@/components/text-panel';
import { useEffect, useState } from 'react';
import PromptList from '@/prompts/prompt-list';
import AccountList from '@/users/account-list';
import { AccountPreferences } from '@/users/account-preferences';
import { getUser } from '@/users/user.api';
import type { User } from '@/users/user.types';

export type AccountAttribute = {
  label: string;
  value: string;
  editable: boolean;
  hidden: boolean;
};

export default function AccountPage() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        const data: User = await getUser('alice_writer');
        setUser(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const [viewComments, setViewComments] = useState(false);
  const attributes: AccountAttribute[] = [
    { label: 'edit preferences', value: '', editable: false, hidden: true },
    {
      label: 'bio',
      value:
        'This is my bio for my account on this platform called odd intellect. I am writing nonsense to make this biography longer.',
      editable: true,
      hidden: false,
    },
    {
      label: 'email',
      value: 'johndoe@mail.com',
      editable: true,
      hidden: false,
    },
    {
      label: 'current streak',
      value: '2 weeks',
      editable: false,
      hidden: false,
    },
    {
      label: 'longest streak',
      value: '17 weeks',
      editable: false,
      hidden: false,
    },
    { label: 'user since', value: '4/20/2025', editable: false, hidden: false },
    { label: 'comments', value: '87', editable: false, hidden: false },
    { label: 'upvotes', value: '1273', editable: false, hidden: false },
    { label: 'downvotes', value: '106', editable: false, hidden: false },
    { label: 'name', value: 'John Doe', editable: true, hidden: true },
    { label: 'country', value: 'USA', editable: true, hidden: true },
    { label: 'age', value: '23', editable: true, hidden: false },
    { label: 'gender', value: 'male', editable: true, hidden: false },
  ];

  return (
    <>
      <AccountPreferences attributes={attributes} />
      <TextPanel text="somedude" />
      <AccountList attributes={attributes} />
      {viewComments ? (
        <>
          <PromptList account />
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
