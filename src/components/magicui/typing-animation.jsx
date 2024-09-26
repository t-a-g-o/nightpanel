"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function TypingAnimation({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 5000,
  emptyPauseDuration = 500,
  className
}) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timer;
    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(true);
      }, emptyPauseDuration);
    } else if (isTyping) {
      if (displayedText === words[currentWord]) {
        // Word fully typed, pause before deleting
        timer = setTimeout(() => setIsTyping(false), pauseDuration);
      } else {
        // Continue typing
        timer = setTimeout(() => {
          setDisplayedText(words[currentWord].slice(0, displayedText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (displayedText === "") {
        // Word fully deleted, move to next word and pause
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsPaused(true);
      } else {
        // Continue deleting
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [words, currentWord, displayedText, isTyping, isPaused, typingSpeed, deletingSpeed, pauseDuration, emptyPauseDuration]);

  return (
    <span
      className={cn(
        "inline-block",
        className
      )}
    >
      {displayedText}
    </span>
  );
}
