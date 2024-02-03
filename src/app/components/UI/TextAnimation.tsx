import React, { useEffect, useRef } from "react";

interface FadeInTextAnimationProps {
  text: string;
}

const FadeInTextAnimation: React.FC<FadeInTextAnimationProps> = ({ text }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const letters = text.split("");

      paragraphRef.current.innerHTML = ""; // Clear the original text

      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animation = `fadeIn 1s ${index * 0.1}s ease-in-out`; // Adjust the duration and delay as needed
        if (paragraphRef.current) {
          paragraphRef.current.appendChild(span);
        }
      });
    }
  }, [text]);

  return (
    <div className="text-container">
      <p ref={paragraphRef} className="fade-in-text"></p>
    </div>
  );
};

export default FadeInTextAnimation;
