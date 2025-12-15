import TextPanel from '@/components/text-panel';

export default function TermsPage() {
  return (
    <div>
      <TextPanel text="Terms of Service + Privacy Policy" />
      <p>
        Please read the Terms of Service and Privacy Policy. Please. Pretty
        please with a cherry on top.
      </p>
      <TextPanel text="Terms of Service" />
      <p>Enter Terms of Service here.</p>
      <TextPanel text="Privacy Policy" />
      <p>Enter Privacy Policy here.</p>
    </div>
  );
}
