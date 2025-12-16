import React from 'react';
import { useModal } from '@/context/modal-context';
import Modal from '../modal';
import Icon from '../icons';
import { ICON } from '@/util/icon-names';

interface StatProps {
  label: string;
  value: string;
  onClick?: () => void;
}

interface Stat {
  label: string;
  value: string;
  editable: boolean;
  hidden: boolean;
}

interface EditStatProps {
  stats: Stat[];
}

interface StatInputProps {
  stat: Stat;
}

export default function AccountStatList() {
  const info = [
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

  const { open } = useModal();

  return (
    <div className="account-stat-list">
      <AccountStatEdit stats={info} />
      <AccountStat label={'EDIT PROFILE'} value={''} onClick={() => open()} />
      {info.map((stat) => (
        <AccountStat label={stat.label} value={stat.value} key={stat.label} />
      ))}
    </div>
  );
}

function AccountStat({ label, value, onClick }: StatProps) {
  return (
    <div className="account-stat" onClick={onClick}>
      {label.toLowerCase() === 'edit profile' ? (
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
        {stats.map((stat) => (
          <React.Fragment key={stat.label}>
            <AccountStatInput stat={stat} />
          </React.Fragment>
        ))}
        <button className="account-edit__submit btn--bordered">SAVE</button>
      </form>
    </Modal>
  );
}

function AccountStatInput({ stat }: StatInputProps) {
  return (
    <>
      <label>
        {stat.label.charAt(0).toUpperCase() + stat.label.slice(1).toLowerCase()}
      </label>
      <div className="account-edit-input">
        <input
          placeholder={stat.value}
          value={stat.value}
          disabled={!stat.editable}
        />
        <button className="btn--bordered">
          {stat.hidden ? (
            <Icon name={ICON.EYECLOSE} />
          ) : (
            <Icon name={ICON.EYEOPEN} />
          )}
        </button>
      </div>
    </>
  );
}
