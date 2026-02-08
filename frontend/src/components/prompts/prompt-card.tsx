import { Link } from 'react-router-dom';
import type { Prompt } from './prompt.types';
import dateFormatter from '@/util/date-formatter';

export default function PromptCard({
  prompt,
  comment = false,
}: {
  prompt: Prompt;
  comment?: boolean;
}) {
  return (
    <Link to={`/prompt/${prompt.id}`} className="prompt-card">
      <h2 className="prompt-card__prompt">{prompt.text.toUpperCase()}</h2>
      {comment ? (
        <p className="prompt-card__info prompt-card__comment">
          This is test comment to see how the UI under a prompt card would look
          like. I am writing gibberish to see how it will fill up the card and
          how it would look like. I will continue typing to fill this up even
          more because I the current amount of words I have here is not enough.
        </p>
      ) : (
        <>
          <p className="prompt-card__info">└─ {prompt.commentCount} COMMENTS</p>
        </>
      )}
      <p className="prompt-card__info">└─ {dateFormatter(prompt.createdAt)}</p>
    </Link>
  );
}
