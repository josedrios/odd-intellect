import React from 'react';
import { useModal } from '@/context/modal-context';
import Modal from '../modal';

interface StatProps {
  label: string;
  value: string;
  edit?: boolean;
  onClick?: () => void;
}

interface Stat {
  label: string;
  value: string;
  editable: boolean;
}

interface EditStatProps {
  stats: Stat[];
}

export default function AccountStatList() {
  const info = [
    {
      label: 'bio',
      value:
        'This is my bio for my account on this platform called odd intellect. I am writing nonsense to make this biography longer.',
      editable: true,
    },
    { label: 'email', value: 'johndoe@mail.com', editable: true },
    { label: 'current streak', value: '2 weeks', editable: false },
    { label: 'longest streak', value: '17 weeks', editable: false },
    { label: 'user since', value: '4/20/2025', editable: false },
    { label: 'comments', value: '87', editable: false },
    { label: 'upvotes', value: '1273', editable: false },
    { label: 'downvotes', value: '106', editable: false },
    { label: 'real name', value: 'John Doe', editable: true },
    { label: 'country', value: 'USA', editable: true },
    { label: 'age', value: '23', editable: true },
    { label: 'gender', value: 'male', editable: true },
  ];

  const { open } = useModal();

  return (
    <div className="account-stat-list">
      <AccountStatEdit stats={info} />
      <AccountStat
        label={'EDIT PROFILE'}
        value={''}
        edit
        onClick={() => open()}
      />
      {info.map((stat) => (
        <AccountStat label={stat.label} value={stat.value} key={stat.label} />
      ))}
    </div>
  );
}

function AccountStat({ label, value, edit = false, onClick }: StatProps) {
  return (
    <div className="account-stat" onClick={onClick}>
      {edit ? (
        <a className="account-stat__key">{label.toUpperCase()}</a>
      ) : (
        <p className="account-stat__key">{label.toUpperCase()}</p>
      )}
      <p className="account-stat__value">{value.toUpperCase()}</p>
    </div>
  );
}

function AccountStatEdit({ stats }: EditStatProps) {
  return (
    <Modal>
      <form className="account-edit-form">
        <h3 className="account-edit__title">EDIT PROFILE</h3>
        {stats.map((stat) =>
          stat.editable ? (
            <React.Fragment key={stat.label}>
              <label>
                {stat.label.charAt(0).toUpperCase() +
                  stat.label.slice(1).toLowerCase()}
              </label>
              <input placeholder={stat.value} value={stat.value} />
            </React.Fragment>
          ) : (
            ''
          ),
        )}
        <button className="account-edit__submit btn--bordered">SAVE</button>
      </form>
    </Modal>
  );
}
