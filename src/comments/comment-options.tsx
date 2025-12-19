import Modal from '@/components/modal';
import { useState } from 'react';

export default function CommentOptions() {
  return (
    <Modal id="comment options" title="comment options">
      <div className="comment-options">
        <button className="btn--text">SAVE</button>
        <button className="btn--text">INSPECT</button>
        <p className="comment-options__report">REPORT:</p>
        <div>
          <button className="btn--text">HARASSMENT</button>
          <button className="btn--text">SPAM</button>
          <button className="btn--text">ADVERTISING</button>
          <button className="btn--text">OTHER</button>
        </div>
      </div>
    </Modal>
  );
}
