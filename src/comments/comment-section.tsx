import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from './comment-card';
import Select from '@/components/select';
import { useModal } from '@/context/modal-context';
import Modal from '@/components/modal';

export default function CommentSection() {
  return (
    <div className="comment-section">
      <CommentSectionHeader />
      <CommentCard username="Some Dude" parent />
      <CommentCard username="Some Dude" parent />
      <CommentCard username="Some Dude" parent />
      <CommentCard username="Some Dude" />
      <CommentCard username="Some Dude" />
    </div>
  );
}

function CommentSectionHeader() {
  const options = [
    { value: 'relevant', label: 'RELEVANT' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'popular', label: 'POPULAR' },
  ];

  const { open, close } = useModal();

  return (
    <div className="comment-section__header">
      <Modal>
        <p>This is the create comment modal</p>
        <button onClick={() => close()}>CLOSE</button>
      </Modal>
      <Select options={options} defaultValue={options[0]} size={'xs'} />
      <button
        className="comment-section__create-comment btn--minimal"
        onClick={() => open()}
      >
        <p>CREATE COMMENT</p>
      </button>
      <button className="btn--minimal">
        <Icon name={ICON.SHARE} />
      </button>
    </div>
  );
}
