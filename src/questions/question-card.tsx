interface QuestionCardProps {
  comment?: boolean;
}

export default function QuestionCard({ comment = false }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2 className="question-card__question">
        3. TELL ME ABOUT SOMEONE YOU DEEPLY LOVE.
      </h2>
      {comment ? (
        <p className="question-card__info question-card__comment">
          This is test comment to see how the UI under a question card would
          look like. I am writing gibberish to see how it will fill up the card
          and how it would look like. I will continue typing to fill this up
          even more because I the current amount of words I have here is not
          enough.
        </p>
      ) : (
        <>
          <p className="question-card__info">└─ 2.4k COMMENTS</p>
        </>
      )}
      <p className="question-card__info">└─ NOV 16, 2025 </p>
    </div>
  );
}
