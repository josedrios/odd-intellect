import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from './comment-card';
import Select from 'react-select';

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

  return (
    <div className="comment-section__header">
      <Select
        options={options}
        classNamePrefix={'react-select'}
        unstyled
        isClearable={false}
        isSearchable={false}
        defaultValue={options[0]}
      />
      <button className="comment-section__create-comment btn--minimal">
        <p>CREATE COMMENT</p>
      </button>
      <button className="btn--minimal">
        <Icon name={ICON.SHARE} />
      </button>
    </div>
  );
}
