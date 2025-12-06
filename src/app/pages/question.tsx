import CommentSection from '@/comments/comment-section';
import TextPanel from '@/components/text-panel';

export default function QuestionPage() {
  return (
    <>
      <TextPanel text="tell me about someone you deeply love." />
      <CommentSection />
    </>
  );
}
