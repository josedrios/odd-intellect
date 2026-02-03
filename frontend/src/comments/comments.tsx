import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import CommentCard from './comment-card';
import Select from '@/components/select';
import { useModal } from '@/context/modal-context';
import CommentCreate from './comment-create';
import { useEffect, useState } from 'react';
import { getComments } from './comment.api';
import type { Comment } from './comment.types';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const data: Comment[] = await getComments(id);
      setComments(data);
    }
    fetchData();
  }, [id]);

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

  const { openModal } = useModal();

  return (
    <div className="comment-section__header">
      <CommentCreate />
      <Select options={options} defaultValue={options[0]} size={'xs'} />
      <button
        className="comment-section__create-comment btn--text"
        onClick={() => openModal('comment create')}
      >
        CREATE COMMENT
      </button>
      <button className="btn--text">
        <Icon name={ICON.SHARE} />
      </button>
    </div>
  );
}
