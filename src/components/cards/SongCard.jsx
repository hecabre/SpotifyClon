import { usePlayer } from "../../context/PlayerContext";
function SongCard({ song }) {
  const { playing } = usePlayer();
  return (
    <div
      className="flex items-center flex-col justify-center p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideUp cursor-pointer rounded-lg"
      key={song.item.id}
    >
      <img
        src={song.item.header_image_thumbnail_url}
        alt=""
        className=" object-cover"
      />
    </div>
  );
}

export default SongCard;
