"use client";

import { useEffect, useState } from "react";

const useScrollingFinder = () => {
  const [scrollingDirection, setScrollingDirection] = useState(null);

  let previousScrollY = typeof window !== "undefined" ? window.scrollY : 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > previousScrollY) {
      setScrollingDirection("down");
    } else if (currentScrollY < previousScrollY) {
      setScrollingDirection("up");
    }
    previousScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollingDirection];
};

export default useScrollingFinder;
