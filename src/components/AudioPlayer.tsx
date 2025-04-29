
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("https://www.youtube.com/embed/0GwZvyT5pKc?autoplay=1");
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.3; // Set initial volume to 30%
    
    // Try to play audio automatically (might be blocked by browser policies)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.log("Auto-play was prevented by the browser:", error);
          setIsPlaying(false);
        });
    }
    
    // Cleanup function
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleMute}
        className="bg-story-primary text-white p-3 rounded-full shadow-lg hover:bg-story-button-hover transition-all"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
