interface TextPanelProps {
  text: string;
}

export default function TextPanel({ text }: TextPanelProps) {
  return (
    <div className="text-panel">
      <h2 className="text-panel__text">{text.toUpperCase()}</h2>
    </div>
  );
}
