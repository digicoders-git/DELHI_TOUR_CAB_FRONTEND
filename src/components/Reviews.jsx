import { useEffect } from 'react';

function Reviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?d5f8e0c3e3f8a0e3f8a0e3f8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="trustindex-widget" data-type="slider" data-layout="slider-1" data-width="100%"></div>
    </div>
  );
}

export default Reviews;