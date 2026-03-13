import { useEffect } from 'react';

function Reviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        className="tagembed-widget" 
        style={{ width: '100%', height: '600px', overflow: 'auto' }} 
        data-widget-id="319685" 
        data-website="1"
      >
      </div>
    </div>
  );
}

export default Reviews;