"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full">
      <button
        className="p-2 bg-green-500/80 rounded-full hover:bg-green-600 transition"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <audio ref={audioRef} src="/music.mp3" />
    </div>
  );
}
