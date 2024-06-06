import { usePlayer } from "../../context/PlayerContext";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import VolumeControl from "./VolumenControl";

function ControlsBar() {
  const { play, pause, next, state, previous } = usePlayer();
  return (
    <section className="sticky bottom-0 left-0 right-0 z-50 w-screen">
      <div className="backdrop-blur-lg bg-white/5 p-4 rounded-t-lg shadow-2xl w-screen">
        <ul className="flex justify-between px-10 md:px-20 dark:text-white text-purple-heart-800/80">
          <div>{state.isPlaying ? "hay musica" : "xd"}</div>
          <div className="flex items-center justify-center gap-3 md:gap-10">
            <GiPreviousButton
              className="md:text-2xl text-xl cursor-pointer"
              onClick={previous}
            />
            {state.isPlaying ? (
              <FaPauseCircle
                className="md:text-2xl text-xl cursor-pointer"
                onClick={pause}
              />
            ) : (
              <FaPlayCircle
                className="md:text-2xl text-xl cursor-pointer"
                onClick={play}
              />
            )}
            <GiNextButton
              className="md:text-2xl text-xl cursor-pointer"
              onClick={next}
            />
          </div>
          <div className="flex items-center justify-center">
            <VolumeControl />
          </div>
        </ul>
      </div>
    </section>
  );
}

export default ControlsBar;
