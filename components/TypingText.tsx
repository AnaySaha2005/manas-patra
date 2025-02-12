"use client";

import { useEffect, useState } from "react";

const TypingText = ({name}:{
    name:String
}) => {
    const text = "W elcome "+name+"!!";
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
  
    useEffect(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < text.length-1) {
          setDisplayText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150);
  
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 500);
  
      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }, []);
  
    return (
      <div className="text-xl font-mono p-4 border border-none w-fit rounded-lg shadow-lg bg-none">
        {displayText}
        {cursorVisible && <span className="animate-blink">|</span>}
      </div>
    );
  };
  export default TypingText;