export const initialStates = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  currentIndex: 0,
};

export const actionTypes = {
  PLAY: "PLAY",
  PAUSE: "PAUSE",
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
  SET_TRACK: "SET_TRACK",
  SET_PLAYLIST: "SET_PLAYLIST",
  SET_VOLUME: "SET_VOLUME",
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PLAY:
      return { ...state, isPlaying: true };

    case actionTypes.PAUSE:
      return { ...state, isPlaying: false };

    case actionTypes.NEXT:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.playlist.length,
        currentTrack:
          state.playlist[(state.currentIndex + 1) % state.playlist.length],
      };
    case actionTypes.PREVIOUS:
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.playlist.length) %
          state.playlist.length,
        currentTrack:
          state.playlist[
            (state.currentIndex - 1 + state.playlist.length) %
              state.playlist.length
          ],
      };
    case actionTypes.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
        currentIndex: 0,
        currentTrack: action.payload[0],
      };
    case actionTypes.SET_TRACK:
      return { ...state, currentTrack: action.payload };
    case actionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
