import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { usePlayer } from "../../context/PlayerContext";

const VolumeControl = () => {
  const { state, setVolume } = usePlayer();
  const [open, setOpen] = useState(false);

  const handleVolumeChange = (event) => {
    const volumen = event.target.value;
    setVolume(volumen);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center space-x-3 w-full justify-center relative">
      <FaVolumeUp
        className="sm:block md:hidden text-lg cursor-pointer"
        onClick={handleOpen}
      />
      <FaVolumeUp className="hidden md:block text-2xl cursor-pointer" />
      {open && (
        <input
          type="range"
          min="0"
          max="100"
          value={state.volumen}
          onChange={handleVolumeChange}
          className="absolute md:hidden block bottom-full mb-2 w-20 transform -rotate-90 origin-bottom-left bg-transparent cursor-pointer appearance-none focus:outline-none left-0
        [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-purple-heart-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:shadow-md dark:[&::-webkit-slider-thumb]:bg-purple-heart-400
        [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-purple-heart-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-moz-range-thumb]:shadow-md dark:[&::-moz-range-thumb]:bg-purple-heart-400
        [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-purple-heart-200 [&::-webkit-slider-runnable-track]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-white
        [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-gray-200 [&::-moz-range-track]:rounded-full dark:[&::-moz-range-track]:bg-gray-700"
        />
      )}
      <input
        type="range"
        min="0"
        max="100"
        value={state.volumen}
        onChange={handleVolumeChange}
        className="w-full hidden md:block bg-transparent cursor-pointer appearance-none focus:outline-none
      [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-purple-heart-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:shadow-md dark:[&::-webkit-slider-thumb]:bg-purple-heart-400
      [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-purple-heart-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-moz-range-thumb]:shadow-md dark:[&::-moz-range-thumb]:bg-purple-heart-400
      [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-purple-heart-200 [&::-webkit-slider-runnable-track]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-white 
      [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-gray-200 [&::-moz-range-track]:rounded-full dark:[&::-moz-range-track]:bg-gray-700"
      />
    </div>
  );
};

export default VolumeControl;
