import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';

interface Props {
  username: string;
  parent?: boolean;
}

export default function CommentCard({ username, parent = false }: Props) {
  return (
    <div className={`comment-card ${parent ? 'comment-card--parent' : ''}`}>
      <CommentHeader username={username} />
      <p className="comment-card__content">
        This is a comment that is suppose to hold real words and real meaning. A
        comment that will make an individual completely forget about their
        surroundings and only conscious in the state of the pondering. I don't
        know what I am talking about, but it made sense in my head a while ago.
      </p>
      <CommentFooter />
    </div>
  );
}

function CommentHeader({ username }: Props) {
  return (
    <div className="comment-card__header">
      <p className="comment-card__username">{username}</p>
      <p className="comment-card__timestamp">17h ago</p>
      <p className="comment-card__ellipsis">
        <Icon name={ICON.ELLIPSIS} />
      </p>
    </div>
  );
}

function CommentFooter() {
  return (
    <div className="comment-card__footer">
      <button className="comment-card__replies">└── 62 Replies</button>
      <button className="comment-card__reply">
        <Icon name={ICON.COMMENT} />
      </button>
      <button className="comment-card__upvotes">
        <Icon name={ICON.UPARROW} />
        14
      </button>
      <button className="comment-card__downvotes">
        <Icon name={ICON.DOWNARROW} />2
      </button>
    </div>
  );
}
