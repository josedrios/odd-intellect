import type { AttributeProps, AttributeListProps } from '@/app/pages/account';
import { useModal } from '@/context/modal-context';

export default function AccountList({ attributes }: AttributeListProps) {
  return (
    <div className="account-list">
      {attributes.map((item) => (
        <AccountAttribute attribute={item} key={item.label} />
      ))}
    </div>
  );
}

function AccountAttribute({ attribute }: AttributeProps) {
  const { open } = useModal();
  return (
    <div className="account-attribute">
      {attribute.label.toLowerCase() === 'edit preferences' ? (
        <a className="account-attribute__key" onClick={() => open()}>
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
