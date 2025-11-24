import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  prefix: string;
  phrases: string[];
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ prefix, phrases, className = "" }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    const tick = () => {
      if (isDeleting) {
        setText(prev => currentPhrase.substring(0, prev.length - 1));
        setDelta(40); // Faster when deleting
      } else {
        setText(prev => currentPhrase.substring(0, prev.length + 1));
        setDelta(120 + Math.random() * 50); // Natural typing variance
      }
    };

    const timer = setTimeout(() => {
      tick();
    }, delta);

    if (!isDeleting && text === currentPhrase) {
      // Finished typing sentence
      clearTimeout(timer);
      setTimeout(() => setIsDeleting(true), 2500); 
    } else if (isDeleting && text === '') {
      // Finished deleting
      setIsDeleting(false);
      setPhraseIndex(prev => prev + 1);
      setDelta(200);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, delta]);

  return (
    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-stone-900 font-serif ${className}`}>
      <span className="block mb-2 text-stone-400 text-2xl md:text-4xl italic font-light font-serif">{prefix}</span>
      <span className="border-b-2 border-stone-900 pb-1 font-serif">
        {text}
      </span>
      <span className="cursor-blink ml-1 font-light text-stone-300">|</span>
    </h1>
  );
};

export default Typewriter;