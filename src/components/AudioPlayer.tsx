
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Use a direct audio file URL instead of YouTube embed
    // This is the audio file for "Little Dark Age" by MGMT
    const audio = new Audio("https://audio.jukehost.co.uk/JEA4mBcFinDJnwcDuqLIiKNlEqDJ1bfK");
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.3; // Set initial volume to 30%
    
    // Try to play audio automatically (might be blocked by browser policies)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          toast({
            title: "Music started",
            description: "Background music is now playing"
          });
        })
        .catch(error => {
          console.log("Auto-play was prevented by the browser:", error);
          setIsPlaying(false);
          toast({
            variant: "destructive",
            title: "Audio couldn't play automatically",
            description: "Click the sound button to start the music"
          });
        });
    }
    
    // Cleanup function
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Play was prevented:", error);
          toast({
            variant: "destructive",
            title: "Couldn't play audio",
            description: "There was an issue playing the audio file"
          });
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
      
      toast({
        description: isMuted ? "Sound turned on" : "Sound muted"
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button 
        onClick={togglePlayPause}
        className="bg-story-primary text-white p-3 rounded-full shadow-lg hover:bg-story-button-hover transition-all"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
