import { useContext } from 'react';
import { MusicPlayerContext } from './MusicPlayerContext';

// custom reack hook을 이용하여 Context Manage하기

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  function togglePlay() {
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.playTrack.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playNextTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    isPlaying: state.isPlaying,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
  };
};

export default useMusicPlayer;
