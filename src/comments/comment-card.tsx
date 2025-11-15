import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

interface CardProps {
  username: string;
  parent?: boolean;
}

interface HeaderProps {
  username: string;
}

interface FooterProps {
  parent: boolean;
}

export default function CommentCard({ username, parent = false }: CardProps) {
  return (
    <div className={`comment-card ${!parent ? 'comment-card--child' : ''}`}>
      <CommentHeader username={username} />
      <p className="comment-card__content">
        This is a comment that is suppose to hold real words and real meaning. A
        comment that will make an individual completely forget about their
        surroundings and only conscious in the state of the pondering. I don't
        know what I am talking about, but it made sense in my head a while ago.
      </p>
      <CommentFooter parent={parent} />
    </div>
  );
}

function CommentHeader({ username }: HeaderProps) {
  return (
    <div className="comment-card__header">
      <p className="comment-card__username">{username}</p>
      <p className="comment-card__timestamp">17h ago</p>
      <button className="comment-card__ellipsis btn-open">
        <Icon name={ICON.ELLIPSIS} />
      </button>
    </div>
  );
}

function CommentFooter({ parent = false }: FooterProps) {
  return (
    <div className="comment-card__footer">
      {parent ? (
        <button className="comment-card__replies btn-open">
          └── 62 Replies
        </button>
      ) : (
        <div className="comment-card__footer-spacer" />
      )}
      <button className="comment-card__reply btn-open">
        <Icon name={ICON.COMMENT} />
      </button>
      <button className="comment-card__upvotes btn-open">
        <Icon name={ICON.UPARROW} />
        14
      </button>
      <button className="comment-card__downvotes btn-open">
        <Icon name={ICON.DOWNARROW} />2
      </button>
    </div>
  );
}
