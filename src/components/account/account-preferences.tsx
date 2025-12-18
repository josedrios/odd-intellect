import React from 'react';
import Modal from '../modal';
import Icon from '../icons';
import { ICON } from '@/util/icon-names';
import type { AttributeListProps, AttributeProps } from '@/app/pages/account';

export function AccountPreferences({ attributes }: AttributeListProps) {
  return (
    <Modal title="preferences">
      <form className="account-edit-form">
        {attributes.map((item) => (
          <React.Fragment key={item.label}>
            <AttributeEdit attribute={item} />
          </React.Fragment>
        ))}
        {attributes.map((item) => (
          <React.Fragment key={item.label}>
            <AttributeEdit attribute={item} />
          </React.Fragment>
        ))}
        <button className="account-edit__submit btn--bordered">SAVE</button>
      </form>
    </Modal>
  );
}

function AttributeEdit({ attribute }: AttributeProps) {
  if (!attribute.editable) return;
  return (
    <>
      <label>
        {attribute.label.charAt(0).toUpperCase() +
          attribute.label.slice(1).toLowerCase()}
      </label>
      <div className="account-edit__input">
        <input
          placeholder={attribute.value}
          value={attribute.value}
          disabled={!attribute.editable}
        />
        <button className="btn--bordered">
          {attribute.hidden ? (
            <Icon name={ICON.EYECLOSE} />
          ) : (
            <Icon name={ICON.EYEOPEN} />
          )}
        </button>
      </div>
    </>
  );
}
