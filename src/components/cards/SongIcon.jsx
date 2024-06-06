function SongIcon({ song }) {
  return (
    <div className="w-full h-1/2 rounded-full object-cover animate-spin">
      <img
        src={song.item.header_image_thumbnail_url}
        alt=""
        className=" object-cover"
      />
    </div>
  );
}

export default SongIcon;
