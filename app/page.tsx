"use client";

import { useState } from "react";
import PwaInstall from "./components/PwaInstall";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleLonelyClick = async () => {
    setLoading(true);
    setHasClicked(true);
    
    try {
      const response = await fetch('/api/connect');
      const data = await response.json();
      setRandomNumber(data.number);
    } catch (error) {
      console.error('Error fetching random number:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-background to-background/80 text-foreground">
      <PwaInstall />
      <main className="flex flex-col items-center justify-center gap-12 w-full max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          lonely
        </h1>
        
        <p className="text-lg text-foreground/80 max-w-xs">
          Sometimes we all feel a little lonely. You&apos;re not alone.
        </p>
        
        <button
          onClick={handleLonelyClick}
          disabled={loading}
          className="relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium transition-all
                    bg-blue-600 text-white hover:bg-blue-700 active:scale-95
                    shadow-lg hover:shadow-xl
                    disabled:opacity-70 disabled:cursor-not-allowed
                    w-full max-w-xs border-2 border-blue-500"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              Connecting...
            </span>
          ) : (
            "I am feeling lonely"
          )}
        </button>
        
        {hasClicked && !loading && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <p className="text-lg">
              {randomNumber !== null ? (
                <>
                  <span className="block mb-2 text-foreground/70">Right now, there are</span>
                  <span className="text-4xl font-bold">{randomNumber}</span>
                  <span className="block mt-2 text-foreground/70">people feeling just like you</span>
                </>
              ) : (
                "Could not connect right now. Please try again."
              )}
            </p>
            
            <p className="text-sm text-foreground/60 max-w-xs">
              {randomNumber !== null && "You&apos;re part of a community. None of you are truly alone in how you feel."}
            </p>
            
            {randomNumber !== null && (
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just discovered I am one of ${randomNumber} people feeling lonely right now. We are all in this together. Join us at lonely-again.vercel.app #YouAreNotAlone`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-[#1DA1F2] text-white hover:bg-[#1a94da] transition-colors
                          text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on Twitter
              </a>
            )}
          </div>
        )}
      </main>
      
      <footer className="mt-auto pt-8 pb-4 text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} lonely</p>
      </footer>
    </div>
  );
}
