import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    let loadingTime = 0;
    const loadingInterval = 2000; // 2 seconds
    const loadingStep = 10;
    const interval = 50; // update progress every 50ms
    
    // Play loading sound
    const playSound = () => {
      const audio = new Audio('/sounds/loading-sound.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        // Audio play failed - likely due to user not interacting with page yet
        // This is expected and can be safely ignored
      });
      setSoundPlayed(true);
    };

    // Try to play sound if not already played
    if (!soundPlayed) {
      playSound();
    }

    // Simulate loading progress
    const timer = setInterval(() => {
      loadingTime += interval;
      
      // Calculate progress percentage (0-100)
      const newProgress = Math.min(100, Math.floor((loadingTime / loadingInterval) * 100));
      setProgress(newProgress);
      
      // When loading is complete
      if (loadingTime >= loadingInterval) {
        clearInterval(timer);
        setTimeout(() => {
          onLoaded();
        }, 500); // Short delay before calling onLoaded
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [onLoaded, soundPlayed]);

  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Greens & Grain</h1>
        <div className="flex items-center justify-center mb-4">
          <Loader2 className="animate-spin mr-2" size={30} />
          <span className="text-xl">Loading...</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-sm">{progress}%</div>
      </div>
    </div>
  );
}