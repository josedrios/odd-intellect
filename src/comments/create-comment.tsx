import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

export default function CreateComment() {
  return (
    <form className="comment-form">
      <h2 className="comment-form__prompt">
        TELL ME ABOUT SOMEONE YOU DEEPLY LOVE.
      </h2>
      <p className="comment-form__count">217/800</p>
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
