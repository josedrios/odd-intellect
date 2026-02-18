import TextPanel from '@/components/text-panel';

export default function RequestPage() {
  return (
    <div>
      <TextPanel text={'post request'} />
      <p>
        Send an email to oddintellect@mail.com with the subject ONLY containing
        the words "Post Request". If we use your post you will be given a badge
        of honor of sorts.
      </p>
    </div>
  );
}
