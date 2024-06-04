function SongCard({ song }) {
  return (
    <div className="flex items-center flex-col justify-center" key={song.id}>
      <img src={song.header_image_url} alt={song.full_title} />
      <h2>{song.full_title}</h2>
    </div>
  );
}

export default SongCard;
