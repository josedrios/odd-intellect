import { useEffect, useState } from 'react';

export default function Loader() {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [loaderIndex, setLoaderIndex] = useState<number>(0);
  const loader = ['|', '/', '-', '\\'];

  useEffect(() => {
    const delayShow = setTimeout(() => setShowLoader(true), 750);

    const interval = setInterval(() => {
      setLoaderIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 200);
    return () => {
      clearTimeout(delayShow);
      clearInterval(interval);
    };
  }, []);

  if (!showLoader) return '';
  if (showLoader) {
    return (
      <div className="loader">loading&nbsp;&nbsp;{loader[loaderIndex]}</div>
    );
  }
}
