import { useEffect, useState } from "react";

export const useScrollThumb = () => {
  const [thumbTop, setThumbTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = scrollTop / scrollHeight;
      setThumbTop(scrollRatio * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return thumbTop; // returns 0–100 for percentage
};
