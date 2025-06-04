import { useEffect, useState } from 'preact/hooks';

interface AnimatedWordProps {
  words: string[];
  interval?: number;
  typingSpeed?: number;
  highlightColor?: string; // fallback, not used for random
}

const importedFonts = [
  "'Roboto', sans-serif",
  "'Nunito', sans-serif",
  "'Pacifico', cursive",
  "'Fascinate', cursive",
  "'Delius', cursive",
];

function getRandomMarkerColor() {
  // Slightly darker pastel colors for better visibility on white
  const colors = [
    '#ffe066', // vivid yellow
    '#ffd18c', // deeper orange
    '#a3e7c3', // deeper mint
    '#b0b8f2', // deeper lavender
    '#f7b2d9', // deeper pink
    '#b8e986', // light green
    '#ffb385', // peach
    '#b7e4c7', // pale green
    '#b5aee4', // purple
    '#e9e07a', // yellow-green
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomFontFamily() {
  return importedFonts[Math.floor(Math.random() * importedFonts.length)];
}

export function AnimatedWord({
  words,
  interval = 1500,
  typingSpeed = 80,
  highlightColor = '#ffe066',
}: AnimatedWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [bgColor, setBgColor] = useState(highlightColor);
  const [fontFamily, setFontFamily] = useState(importedFonts[0]);

  useEffect(() => {
    let timeout: number;

    if (typing) {
      if (displayed.length < words[wordIndex].length) {
        timeout = window.setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeout = window.setTimeout(() => setTyping(false), interval);
      }
    } else {
      if (displayed.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length - 1));
        }, typingSpeed);
      } else {
        setTyping(true);
        setWordIndex((prev) => {
          const next = (prev + 1) % words.length;
          setBgColor(getRandomMarkerColor());
          setFontFamily(getRandomFontFamily());
          return next;
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex, words, interval, typingSpeed]);

  // Set a minimum width in ch units (characters)
  const minChWidth = 8; // Adjust as needed

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        minWidth: `${minChWidth}ch`,
        width: `${Math.max(displayed.length, minChWidth)}ch`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fontFamily,
        letterSpacing: '0.01em',
        textAlign: 'center',
        transition: 'width 0.3s',
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '30%',
          height: '0.8em',
          width: '100%',
          background: bgColor,
          opacity: 0.7,
          zIndex: 0,
          borderRadius: '0.15em',
          filter: 'blur(1px)',
          pointerEvents: 'none',
          transition: 'background 0.3s, width 0.3s',
        }}
      />
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '0 0.1em',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {displayed || '\u00A0'}
      </span>
    </span>
  );
}