import Comments from '@/comments/comments';
import { getPrompt } from '@/prompts/prompt.api';
import type { Prompt } from '@/prompts/prompt.types';
import TextPanel from '@/components/text-panel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PromptPage() {
  const { id } = useParams<{ id: string }>();
  const [prompt, setPrompt] = useState<Prompt>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPrompt() {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const data: Prompt = await getPrompt(id);
        setPrompt(data);
      } catch (error) {
        setError('Failed to get prompt info');
      } finally {
        setLoading(false);
      }
    }
    loadPrompt();
  }, [id]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;
  if (!prompt) return <p>No prompt found :(</p>;

  return (
    <>
      <TextPanel text={prompt.text} />
      <Comments />
    </>
  );
}
