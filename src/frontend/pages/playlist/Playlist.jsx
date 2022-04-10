import React from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context";
import empty from "../../assets/empty.png";
import "./playlist.css";

function Playlist() {
  const { playlist } = usePlaylistContext();
  console.log(playlist);

  return (
    <div>
      {playlist.length !== 0 ? (
        <div className="playlist__container">
          {playlist.map((item) => (
            <div key={item.id} className="playlist__card">
              <Link to={`/playlist/${item.id}`}>
                {item.videoArray.length === 0 ? (
                  <img
                    src={empty}
                    className="playlist__card__image"
                    alt="Empty_playlist"
                  />
                ) : (
                  <img
                    src={item.videoArray[0].Poster}
                    className="playlist__card__image"
                    alt={item.Title}
                  />
                )}
              </Link>
              <div className="playlist__description">
                <h2 className="playlist__card__title">{playlist.Title}</h2>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="empty__page">
          you have No Playlist Created
          <Link className="link" to="/">
            Explore Videos
          </Link>
        </h3>
      )}
    </div>
  );
}

export { Playlist };
