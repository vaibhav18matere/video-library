import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePlaylistContext } from "../../context";

function PlaylistFolder() {
  const { playlistId } = useParams();
  const { playlist, setPlaylist } = usePlaylistContext();

  const singlePlaylist = playlist.find((item) => item.id === playlistId);

  const deleteVideoFromPlaylist = (playListId, videoID) => {
    const newPlaylist = playlist.find((item) => item.id === playListId);
    const deletedVideoList = newPlaylist.videoArray.filter(
      (item) => item.imdbID !== videoID
    );
    newPlaylist.videoArray = deletedVideoList;
    const newList = playlist.filter((item) => item.id !== playListId);
    setPlaylist([...newList, newPlaylist]);
  };
  return singlePlaylist && singlePlaylist.videoArray.length > 0 ? (
    <div className="playlist__container">
      {singlePlaylist.videoArray.map((item) => (
        <div className="playlist__card" key={item.id}>
          <img src={item.Poster} className="playlist__card__image" alt="on" />
          <div className="playlist__description">
            <h2 className="playlist__card__title">{item.Title}</h2>
            <small>{item.Plot}</small>
            <p className="video__views"> Year : {item.Year}</p>
            <button
              className="btn btn-primary"
              onClick={() => deleteVideoFromPlaylist(playlistId, item.imdbID)}
            >
              Delete Video
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="child">
      <h3 className="empty__page">You have not created any playlist</h3>
      <Link className="link btn btn-primary" to="/">
        Explore Videos
      </Link>
    </div>
  );
}

export { PlaylistFolder };
