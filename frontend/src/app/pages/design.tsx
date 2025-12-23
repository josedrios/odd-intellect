import Icon from '@/components/icons.tsx';
import { ICON } from '@/util/icon-names';

export default function Desgin() {
  return (
    <div>
      <Icons />
    </div>
  );
}

function Icons() {
  return (
    <div>
      <h3>Icons</h3>
      <p>
        These are the included icons:
        <Icon name={ICON.SEND} />
        <Icon name={ICON.ELLIPSIS} />
        <Icon name={ICON.USER} />
        <Icon name={ICON.COMMENT} />
        <Icon name={ICON.SORT} />
        <Icon name={ICON.ASCENDING} />
        <Icon name={ICON.DESCENDING} />
        <Icon name={ICON.CLOCK} />
      </p>
    </div>
  );
}
