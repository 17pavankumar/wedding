import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = ({ isPlaying, setIsPlaying, audioTriggered }) => {
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setHasInteracted(true);
            })
            .catch((err) => {
              console.log('Audio autoplay prevented, awaiting user interaction:', err);
              setIsPlaying(false);
            });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(err => {
        console.error('Audio play error:', err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/wedding_music.mp3"
        loop
        preload="auto"
      />

      <div className="audio-player-fixed" style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 9999
      }}>
        <button
          onClick={togglePlay}
          className={`audio-btn ${isPlaying ? 'playing' : ''}`}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          title={isPlaying ? 'Mute Music' : 'Play Music'}
        >
          {/* Animated sound wave bars when playing */}
          {isPlaying ? (
            <div className="sound-wave-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
              <span className="bar bar-4"></span>
            </div>
          ) : (
            <VolumeX size={18} color="#D4AF62" />
          )}
          <span className="audio-label">{isPlaying ? 'Sound On' : 'Play Music'}</span>
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;

