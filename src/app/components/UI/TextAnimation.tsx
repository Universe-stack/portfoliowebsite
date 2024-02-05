import React, { useEffect, useRef, useState } from "react";

interface FadeInTextAnimationProps {
  text: string;
}

const FadeInTextAnimation: React.FC<FadeInTextAnimationProps> = ({ text }) => {
  const [letters, setLetters] = useState<string[]>([]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (text) {
      setLetters(text.split(""));
    }
  }, [text]);

  return (
    <div className="text-container">
      <p ref={paragraphRef} className="fade-in-text">
        {letters.map((letter, index) => (
          <span key={index} style={{ animation: `fadeIn 1s ${index * 0.1}s ease-in-out` }}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default FadeInTextAnimation;
