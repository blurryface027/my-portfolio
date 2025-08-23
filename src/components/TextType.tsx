"use client";

import { useEffect, useState } from "react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

export default function TextType({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[index % text.length];

    let timer: ReturnType<typeof setTimeout> | null = null;

    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing
      timer = setTimeout(
        () => setDisplayedText(currentText.slice(0, displayedText.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timer = setTimeout(
        () => setDisplayedText(currentText.slice(0, displayedText.length - 1)),
        deletingSpeed
      );
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
}
