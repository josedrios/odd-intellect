import { useState } from 'react';

export default function CheckBox() {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const toggle = () => setIsFilled(!isFilled);

  return (
    <div className="checkbox" onClick={() => toggle()}>
      {isFilled ? <div className="checkbox__center" /> : ''}
    </div>
  );
}
