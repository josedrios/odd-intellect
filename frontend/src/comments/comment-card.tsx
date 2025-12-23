import Icon from '@/components/icons';
import { useModal } from '@/context/modal-context';
import { ICON } from '@/util/icon-names';
import CommentCreate from './comment-create';
import CommentOptions from './comment-options';

interface CardProps {
  username: string;
  parent?: boolean;
}

interface FooterProps {
  parent: boolean;
}

export default function CommentCard({ username, parent = false }: CardProps) {
  const content =
    "This is a comment that is suppose to hold real words and real meaning. A comment that will make an individual completely forget about their surroundings and only conscious in the state of the pondering. I don't know what I am talking about, but it made sense in my head a while ago.";

  return (
    <div className={`comment-card ${!parent ? 'comment-card--child' : ''}`}>
      <CommentCreate subcomment />
      <CommentOptions />
      <p className="comment-card__content">
        <span className="comment-card__username">{username}</span>
        {content}
      </p>
      <CommentFooter parent={parent} />
    </div>
  );
}

function CommentFooter({ parent = false }: FooterProps) {
  const { openModal } = useModal();

  return (
    <div className="comment-card__footer">
      {parent ? (
        <button className="comment-card__replies btn--open">
          └─<span>62 REPLIES</span>
        </button>
      ) : (
        <div className="comment-card__footer-spacer" />
      )}
      <button
        className="comment-card__reply btn--open"
        onClick={() => openModal('comment reply')}
      >
        <Icon name={ICON.REPLY} />
      </button>
      <button className="comment-card__upvotes btn--open">
        <Icon name={ICON.UPARROW} />
        <p>14</p>
      </button>
      <button className="comment-card__downvotes btn--open">
        <Icon name={ICON.DOWNARROW} />
        <p>2</p>
      </button>
      <button
        className="comment-card__ellipsis btn--open"
        onClick={() => openModal('comment options')}
      >
        <Icon name={ICON.ELLIPSIS} />
      </button>
    </div>
  );
}
