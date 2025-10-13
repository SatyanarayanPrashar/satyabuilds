import { useEffect, RefObject } from "react";

export const useScrollThumb = (thumbRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (!thumbRef.current) return;
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollRatio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        const thumbTopPercent = scrollRatio * 100;
        thumbRef.current.style.top = `${thumbTopPercent}%`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [thumbRef]);
};