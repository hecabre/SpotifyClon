import { usePlayer } from "../../context/PlayerContext";
import { FaPause, FaPlay } from "react-icons/fa";

function SongCard({ song }) {
  const { playing, isPlaying } = usePlayer();
  return (
    <div
      className="relative flex items-center flex-col justify-center p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideUp cursor-pointer rounded-lg w-[250px] max-w-full overflow-hidden group"
      key={song.item.id}
    >
      <img
        src={song.item.header_image_thumbnail_url}
        alt={song.item.title}
        className="object-contain w-full h-60 rounded-lg transition duration-300 ease-in-out group-hover:blur-sm"
      />
      <div className="flex items-start justify-center flex-col w-full ml-3">
        <p className="text-white">{song.item.title}</p>
        <p className="text-white/60 ">{song.item.artist_names}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 h-[90%]">
        {isPlaying ? (
          <FaPause className="dark:text-white text-purple-heart-600 text-4xl" />
        ) : (
          <FaPlay className="dark:text-white text-purple-heart-600 text-4xl" />
        )}
      </div>
    </div>
  );
}

export default SongCard;
