import { Link } from 'react-router-dom';

interface PromptCardProps {
  comment?: boolean;
}

export default function PromptCard({ comment = false }: PromptCardProps) {
  return (
    <Link to="/prompt" className="prompt-card">
      <h2 className="prompt-card__prompt">
        3. TELL ME ABOUT SOMEONE YOU DEEPLY LOVE.
      </h2>
      {comment ? (
        <p className="prompt-card__info prompt-card__comment">
          This is test comment to see how the UI under a prompt card would look
          like. I am writing gibberish to see how it will fill up the card and
          how it would look like. I will continue typing to fill this up even
          more because I the current amount of words I have here is not enough.
        </p>
      ) : (
        <>
          <p className="prompt-card__info">└─ 2.4K COMMENTS</p>
        </>
      )}
      <p className="prompt-card__info">└─ NOV 16, 2025 </p>
    </Link>
  );
}
