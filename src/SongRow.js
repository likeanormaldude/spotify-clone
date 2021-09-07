import React from "react";
import "./SongRow.css";

function SongRow({ track = "test", rowNumber }) {
  console.log(rowNumber);
  return (
    <div className="songRow">
      <span className="songRow__rowNumber">{rowNumber}</span>
      <img
        className="songRow__album"
        src={track.album.images[0].url}
        alt="Song pic"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
