import Comments from '@/comments/comments';
import { getPrompt } from '@/prompts/prompt.api';
import type { Prompt } from '@/prompts/prompt.types';
import TextPanel from '@/components/text-panel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PromptPage() {
  const { id } = useParams<{ id: string }>();
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const data: Prompt = await getPrompt(id);
      setPrompt(data);
    }
    fetchData();
  }, [id]);

  if (prompt === null) return <p>loading...</p>;
  if (!id) return <p>No ID provided :(</p>;

  return (
    <>
      <TextPanel text={prompt.text} />
      <Comments />
    </>
  );
}
