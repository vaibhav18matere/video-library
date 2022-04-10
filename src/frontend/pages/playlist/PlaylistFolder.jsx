import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePlaylistContext } from "../../context";

function PlaylistFolder() {
  const { playlistId } = useParams();
  const { playlist } = usePlaylistContext();


  const singlePlaylist = playlist.find((item) => item.id === playlistId);

  return singlePlaylist && singlePlaylist.videoArray.length > 0 ? (
    <div className="playlist__container">
      {singlePlaylist.videoArray.map((item) => (
        <div className="playlist__card" key={item.id}>
          <img src={item.Poster} className="playlist__card__image" alt="on" />
          <div className="playlist__description">
            <h2 className="playlist__card__title">{item.Title}</h2>
            <small>{item.Plot}</small>
            <p className="video__views"> Year : {item.Year}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h3 className="empty__page">
      you have No videos in this Playlist
      <Link className="link" to="/">
        Explore Videos
      </Link>
    </h3>
  );
}

export { PlaylistFolder };
