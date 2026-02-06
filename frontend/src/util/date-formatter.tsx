export default function dateFormatter(date: string): string {
  return new Date(date).toLocaleDateString('en-US');
}
