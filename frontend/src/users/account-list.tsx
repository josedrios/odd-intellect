import type { AccountAttribute } from '@/app/pages/account';
import { useModal } from '@/context/modal-context';

export default function AccountList({
  attributes,
}: {
  attributes: AccountAttribute[];
}) {
  return (
    <div className="account-list">
      {attributes.map((item) => (
        <AccountAttribute attribute={item} key={item.label} />
      ))}
    </div>
  );
}

function AccountAttribute({ attribute }: { attribute: AccountAttribute }) {
  const { openModal } = useModal();
  return (
    <div className="account-attribute">
      {attribute.label.toLowerCase() === 'edit preferences' ? (
        <a
          className="account-attribute__key"
          onClick={() => openModal('account preferences')}
        >
          {attribute.label.toUpperCase()}
        </a>
      ) : (
        <p className="account-attribute__key">
          {attribute.label.toUpperCase()}
        </p>
      )}
      <p className="account-attribute__value">
        {attribute.value.toUpperCase()}
      </p>
    </div>
  );
}
