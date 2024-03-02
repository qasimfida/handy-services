import React, { useEffect, useState } from "react";

const PageProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(10);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / totalHeight) * 100 + 10, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="left-0 z-10 h-[6px] bg-primary fixed"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default PageProgressBar;
