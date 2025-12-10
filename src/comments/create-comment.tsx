import Icon from '@/components/icons';
import TextPanel from '@/components/text-panel';
import { ICON } from '@/util/icon-names';

export default function CreateComment() {
  return (
    <form className="comment-form">
      <h2 className="comment-form__prompt">
        TELL ME ABOUT SOMEONE YOU DEEPLY LOVE.
      </h2>
      <textarea
        className="comment-form__textarea"
        placeholder="What's on your mind..."
      />
      <button className="comment-form__submit">
        <Icon name={ICON.SEND} />{' '}
      </button>
    </form>
  );
}
