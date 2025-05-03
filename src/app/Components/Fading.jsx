import React, { useEffect, useRef, useState } from "react";

function FadingComponent({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""} `}>
        {children}
      </div>
    </>
  );
}

export default FadingComponent;
