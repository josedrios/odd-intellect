import TextPanel from '@/components/text-panel';

export default function RequestPage() {
  return (
    <div>
      <TextPanel text={'prompt request'} />
      <p>
        Send an email to oddintellect@mail.com with the subject ONLY containing
        the words "Prompt Request". If we use your prompt you will be given a
        badge of honor of sorts.
      </p>
    </div>
  );
}
