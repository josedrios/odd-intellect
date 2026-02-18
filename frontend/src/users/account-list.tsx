import type { AccountAttribute } from '@/app/pages/account';
import type { User } from './user.types';

export default function AccountList({
  user,
  isMe = false,
}: {
  user: User;
  isMe?: boolean;
}) {
  console.log(isMe + 'from list');
  return (
    <div className="account-list">
      {isMe && (
        <div className="account-attribute">
          <a className="account-attribute__key">EDIT PREFERENCES</a>
          <p className="account-attribute__value"></p>
        </div>
      )}
      {Object.entries(user).map(([label, value]) => (
        <AccountAttribute
          attribute={{ label, value: String(value ?? 'UNKNOWN') }}
          key={label}
        />
      ))}
    </div>
  );
}

function AccountAttribute({ attribute }: { attribute: AccountAttribute }) {
  return (
    <div className="account-attribute">
      <p className="account-attribute__key">{attribute.label.toUpperCase()}</p>
      <p className="account-attribute__value">{attribute.value}</p>
    </div>
  );
}
