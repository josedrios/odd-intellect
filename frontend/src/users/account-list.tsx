import type { AccountAttribute } from '@/app/pages/account';
import type { User } from './user.types';

export default function AccountList({ user }: { user: User }) {
  return (
    <div className="account-list">
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
      {attribute.label.toLowerCase() === 'edit preferences' ? (
        <a className="account-attribute__key">
          {attribute.label.toUpperCase()}
        </a>
      ) : (
        <p className="account-attribute__key">
          {attribute.label.toUpperCase()}
        </p>
      )}
      <p className="account-attribute__value">{attribute.value}</p>
    </div>
  );
}
