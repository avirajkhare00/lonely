"use client";

import { useState, useEffect } from 'react';

const quotes = [
  "\"The night is darkest just before the dawn. And I promise you, the dawn is coming.\" — The Dark Knight (2008)",
  "\"If you're feeling lonely, know that somewhere, someone is looking at the same sky as you.\"",
  "\"One day, someone is going to hug you so tight that all your broken pieces will stick back together.\"",
  "\"If the stars can shine alone in the vast darkness, so can you.\"",
  "\"You may feel invisible today, but one day, someone will see you like you hung the stars.\"",
  "\"The moon is alone, but it still lights up the night.\"",
  "\"One day, you'll look back and see that your loneliness led you somewhere beautiful.\"",
  "\"You will outgrow this pain. One day, it won't even fit you anymore.\"",
  "\"Everything you're feeling is valid, but it is not final.\"",
  "\"The trees stand alone but never stop growing.\"",
  "\"Someone you haven't met yet is wondering what it's like to meet someone like you.\"",
  "\"If you're feeling lost, remember: even the moon disappears for a while, but it always comes back.\"",
  "\"One day, you'll realize that you were never truly alone—your future self was always waiting for you.\"",
  "\"Even the ocean sings to itself. Perhaps loneliness is just the music of the soul.\"",
  "\"Life will surprise you with love when you least expect it.\"",
  "\"You are stronger than your sadness.\"",
  "\"Every lonely night brings you one step closer to a moment that will make it all worth it.\"",
  "\"Don't be afraid of the quiet; it's where you'll find yourself.\"",
  "\"One day, you will be someone's favorite part of the world.\"",
  "\"You were born to be loved. Hold on, love is coming.\""
];

export default function QuoteBox() {
  const [quote, setQuote] = useState<string>("");
  
  useEffect(() => {
    // Get a random quote when the component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);
  
  return (
    <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in">
      <div className="relative">
        <div className="absolute -top-4 -left-2 text-4xl text-blue-500/30">&ldquo;</div>
        <p className="text-base italic text-foreground/80 leading-relaxed">
          {quote}
        </p>
        <div className="absolute -bottom-4 -right-2 text-4xl text-blue-500/30">&rdquo;</div>
      </div>
    </div>
  );
}
