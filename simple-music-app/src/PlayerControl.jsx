import React from 'react';

import useMusicPlayer from './Components/useMusicPlayer';

const PlayerControl = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <>
      <div className='box controls'>
        <div className='current-track'>{currentTrackName}</div>
        <div>
          <button onClick={playPreviousTrack} disabled={!currentTrackName}>
            {isPlaying ? '✖' : '👉'}
          </button>
          <button onClick={playNextTrack} disabled={!currentTrackName}>
            '👉👉'
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerControl;
