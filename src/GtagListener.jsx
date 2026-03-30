import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GtagListener() {
  const location = useLocation();

  useEffect(() => {
    // Only send events in production and when gtag is available
    if (import.meta.env.PROD && typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
        });
      } catch (e) {
        // swallow any errors in non-critical analytics code
        // console.debug('gtag page_view error', e);
      }
    }
  }, [location]);

  return null;
}