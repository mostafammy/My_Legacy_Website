"use client";
import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface BackgroundMusicProps {
  audioUrl: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.addEventListener('canplaythrough', () => setIsLoaded(true));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => setIsLoaded(true));
      }
    };
  }, [audioUrl]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Playback prevented:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Button
      color="secondary"
      startContent={<Icon icon={isPlaying ? "lucide:pause" : "lucide:play"} />}
      onPress={toggleMusic}
      isDisabled={!isLoaded}
    >
      {isPlaying ? "Pause Music" : "Play Music"}
    </Button>
  );
};

export default BackgroundMusic;