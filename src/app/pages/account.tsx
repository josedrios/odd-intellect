import TextPanel from '@/components/text-panel';
import AccountStatList from '@/components/account/account-stats';
import { useState } from 'react';
import PromptList from '@/prompts/prompt-list';

export default function AccountPage() {
  const [viewComments, setViewComments] = useState(false);

  return (
    <>
      <TextPanel text="somedude" />
      <AccountStatList />
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
