import React, { useEffect, useState } from "react";

const letters = "01"; 

type AnimatedTextProps = {
  text: string;
  speed: number;
};
const AnimatedText:React.FC<AnimatedTextProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayedText(() =>
        text
          .split("")
          .map((char, i) => {
            if (i < iterations) return char;
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 2; 
    }, speed);

    return () => clearInterval(interval);
  }, [text,speed]);

  return <span className="nokia-style">{displayedText}</span>;
};

export default AnimatedText;
