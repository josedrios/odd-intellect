import { useEffect, useState } from 'react';

export default function Loader() {
  const [periods, setPeriods] = useState<string>('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setPeriods((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 750);
    return () => clearInterval(interval);
  }, []);
  return <span className="loader">loading{periods}</span>;
}
