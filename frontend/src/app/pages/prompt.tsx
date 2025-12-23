import Comments from '@/comments/comments';
import TextPanel from '@/components/text-panel';

export default function PromptPage() {
  return (
    <>
      <TextPanel text="tell me about someone you deeply love." />
      <Comments />
    </>
  );
}
