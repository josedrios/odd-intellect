import TextPanel from '@/components/text-panel';
import { useState } from 'react';
import PromptList from '@/prompts/prompt-list';
import AccountList from '@/components/account/account-list';
import { AccountPreferences } from '@/components/account/account-preferences';
import Modal from '@/components/modal';
import { useModal } from '@/context/modal-context';
import RegisterForm from '@/components/forms/register-form';

export interface Attribute {
  label: string;
  value: string;
  editable: boolean;
  hidden: boolean;
}

export interface AttributeProps {
  attribute: Attribute;
}

export interface AttributeListProps {
  attributes: Attribute[];
}

export default function AccountPage() {
  const [viewComments, setViewComments] = useState(false);
  const attributes = [
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
    { label: 'real name', value: 'John Doe', editable: true, hidden: true },
    { label: 'country', value: 'USA', editable: true, hidden: true },
    { label: 'age', value: '23', editable: true, hidden: false },
    { label: 'gender', value: 'male', editable: true, hidden: false },
  ];

  return (
    <>
      <TextPanel text="somedude" />
      <AccountPreferences attributes={attributes} />
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
