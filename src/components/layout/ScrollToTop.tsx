import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scrollToTarget = () => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return true;
      }

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) {
        return false;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'auto' });
      return true;
    };

    const frameId = window.requestAnimationFrame(() => {
      const foundTarget = scrollToTarget();

      if (hash && !foundTarget) {
        timeoutId = window.setTimeout(() => {
          if (!scrollToTarget()) {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        }, 150);
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
