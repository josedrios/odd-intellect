import Modal from '@/components/modal';

export default function CommentOptions() {
  return (
    <Modal id="comment options" title="comment options">
      <div className="comment-options">
        <button className="btn--text">SAVE</button>
        <button className="btn--text">INSPECT</button>
        <button className="btn--text comment-options__report">REPORT</button>
      </div>
    </Modal>
  );
}
