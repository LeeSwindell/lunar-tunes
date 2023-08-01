import React, { useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

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
    <div>
      <audio ref={audioPlayerRef} controls />
    </div>
  );
};

export default AudioPlayer;
