import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debounceText, setDebounceText] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return debounceText;
};

const UseDebounce = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="type text"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{debouncedText}</p>
    </div>
  );
};

export default UseDebounce;
