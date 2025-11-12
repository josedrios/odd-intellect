import { useState } from 'react';
export default function ThoughtsInput() {
  const [text, setText] = useState('');

  return (
    <form className="thoughts-form">
      <textarea
        className="thoughts-form__input"
        placeholder="Share your thoughts..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        type=""
        name=""
      />
      {text ? (
        <button className="thoughts-form__button" type="">
          SEND
        </button>
      ) : (
        ''
      )}
    </form>
  );
}
