export default function TextPanel({ text }: { text: string }) {
  return (
    <div className="text-panel">
      <h2 className="text-panel__text">{text.toUpperCase()}</h2>
    </div>
  );
}
