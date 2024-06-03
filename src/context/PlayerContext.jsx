import { useContext, createContext, useReducer } from "react";
import {
  playerReducer,
  initialStates,
  actionTypes,
} from "../reducers/PlayerReducer";

const PlayerContext = createContext();

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("Use player must be used within context");
  return context;
};

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialStates);

  const play = () => dispatch({ type: actionTypes.PLAY });
  const pause = () => dispatch({ type: actionTypes.PAUSE });
  const next = () => dispatch({ type: actionTypes.NEXT });
  const previous = () => dispatch({ type: actionTypes.PREVIOUS });
  const setPlaylist = (playlist) =>
    dispatch({ type: actionTypes.SET_PLAYLIST, payload: playlist });
  const setTrack = (track) =>
    dispatch({ type: actionTypes.SET_TRACK, payload: track });
  const setVolume = (volume) =>
    dispatch({ type: actionTypes.SET_VOLUME, payload: volume });

  return (
    <PlayerContext.Provider
      value={{
        state,
        play,
        pause,
        next,
        previous,
        setPlaylist,
        setTrack,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
