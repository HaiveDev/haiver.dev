import React, { useEffect } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

const ScrollToTopButton: React.FC = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollToTopBtn?.classList.remove("hidden");
      } else {
        scrollToTopBtn?.classList.add("hidden");
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      id="scrollToTopBtn"
      className="fixed bottom-4 right-4 hidden backdrop-blur bg-white/20 text-white px-2.5 py-2.5 rounded-md transition-all ease-in-out hover:opacity-80"
      onClick={scrollToTop}
    >
      <IconChevronUp  />
    </button>
  );
};

export default ScrollToTopButton;
