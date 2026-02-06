import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import Modal from '@/components/modal';

export default function CommentCreate({
  subcomment = false,
}: {
  subcomment?: boolean;
}) {
  return (
    <Modal id={subcomment ? 'comment reply' : 'comment create'}>
      <form className="comment-form">
        {subcomment ? (
          <div className="comment-form-subcomment">
            <h3 className="comment-form__user">SOMEDUDE</h3>
            <p className="comment-form__text">
              This is a random comment, this is where you will see the comment
              you are going to respond to or add on to.
            </p>
          </div>
        ) : (
          <h2 className="comment-form__prompt">
            TELL ME ABOUT SOMEONE YOU DEEPLY LOVE.
          </h2>
        )}
        <p className="comment-form__count">217/800</p>
        <textarea
          className="comment-form__textarea"
          placeholder="What's on your mind..."
        />
        <button className="comment-form__submit">
          <Icon name={ICON.SEND} />{' '}
        </button>
      </form>
    </Modal>
  );
}
