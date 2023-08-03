import React, { useEffect, useRef, useState } from 'react';

interface SongProps {
  currentSong: string;
  setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
}

const AudioPlayer: React.FC<SongProps> = ({ currentSong, setCurrentSong }) => {
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [paused, setPaused] = useState(true);

  const handlePlay = () => {
    if(audioPlayerRef.current){
      audioPlayerRef.current.play();
      setPaused(false);
      setCurrentSong('Clair de Lune')
      const etch1 = document.getElementById("etching1")
      if (etch1) {
        const running = etch1.style.animationPlayState === 'running';
        etch1.style.animationPlayState = running ? 'paused' : 'running';
      }
      const etch2 = document.getElementById("etching2")
      if (etch2) {
        const running = etch2.style.animationPlayState === 'running';
        etch2.style.animationPlayState = running ? 'paused' : 'running';
      }
    }
  };

  const handlePause = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      setPaused(true);
      const ele = document.getElementById("etching1")
      if (ele) {
        const running = ele.style.animationPlayState === 'running';
        ele.style.animationPlayState = running ? 'paused' : 'running';
      }
      const etch2 = document.getElementById("etching2")
      if (etch2) {
        const running = etch2.style.animationPlayState === 'running';
        etch2.style.animationPlayState = running ? 'paused' : 'running';
      }
    }
  };

  useEffect(() => {
    const audioStreamUrl = 'http://localhost:8080/audio-stream';

    // Fetch the audio stream and play it using the HTML5 audio element
    fetch(audioStreamUrl)
      .then((response) => response.blob())
      .then((audioBlob) => {
        if (audioPlayerRef.current) {
          const audioUrl = URL.createObjectURL(audioBlob);
          audioPlayerRef.current.src = audioUrl;
        }
      })
      .catch((error) => {
        console.error('Error fetching audio stream:', error);
      });
  }, []);

  return (
    <div className="flex flex-row">
      <audio ref={audioPlayerRef}/>
      {
        paused &&
        <button className='w-12 h-12 rounded-full pr-16 pt-4' onClick={handlePlay}>
          <svg className='w-12 h-12 m-0 p-0 overflow-visible' viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180 120L90 171.962L90 68.0385L180 120Z" fill="#F0F9FF"/>
          <circle cx="120" cy="120" r="118" stroke="#F0F9FF" stroke-width="16"/>
          </svg>
        </button>
      }
      {
        !paused &&
        <button className='w-12 h-12 rounded-full pr-16 pt-4' onClick={handlePause}>
          <svg className='w-12 h-12 m-0 p-0 overflow-visible' viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="118" stroke="#F0F9FF" stroke-width="16"/>
            <line x1="86" y1="180" x2="86" y2="60" stroke="#F0F9FF" stroke-width="16"/>
            <line x1="146" y1="180" x2="146" y2="60" stroke="#F0F9FF" stroke-width="16"/>
            </svg>
        </button> 
      }
    </div>
  );
};

export default AudioPlayer;
