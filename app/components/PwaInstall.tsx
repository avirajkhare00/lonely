"use client";

import { useState, useEffect } from 'react';

// Define the BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PwaInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Store the event so it can be triggered later
      setInstallPrompt(e as BeforeInstallPromptEvent);
    });

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // Show the install prompt
    await installPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setIsInstalled(true);
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Clear the saved prompt since it can't be used again
    setInstallPrompt(null);
  };

  if (!installPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <div className="absolute bottom-full right-0 mb-2 p-2 rounded bg-gray-800 text-white text-xs max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Install this app to use it offline and get a better experience
      </div>
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 px-4 py-3 rounded-full 
                  bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all
                  text-sm font-medium animate-pulse hover:animate-none
                  border-2 border-white/20"
        aria-label="Install lonely app"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 9l-7 7-7-7"></path>
          <path d="M12 16V4"></path>
        </svg>
        Install App
      </button>
    </div>
  );
}
