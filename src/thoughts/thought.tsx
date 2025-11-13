interface ThoughtProps {
  subthought?: boolean;
  username: string;
}

export default function Thought() {
  return (
    <div className="thought">
      <ThoughtCard username="SOMEDUDE" />
      <div className="thought__subthoughts">
        <ThoughtCard username="OTHERDUDE" subthought />
      </div>
    </div>
  );
}

function ThoughtCard({ subthought = false, username }: ThoughtProps) {
  return (
    <div
      className={`thought-card ${subthought ? 'thought-card--subthought' : ''}`}
    >
      <div className="thought-card__content">
        <div className="thought-card__header">
          <p className="thought-card__username">{username}</p>
          <p className="thought-card__date">17h ago</p>
          <p>E</p>
        </div>
        <p className="thought-card__text">
          This is me writing random stuff to see how these words would look like
          in the UI. So I am going to spit a bunch of nonsense and garbage to
          get this sentence as long as possible.
        </p>
        <div className="thought-card__footer">
          {!subthought ? (
            <div className="thought-card__replies">└─── See Replies</div>
          ) : (
            <div />
          )}
          <p className="thought-card__votes">REPLY 12^ 26^</p>
        </div>
      </div>
    </div>
  );
}
