import React from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context";

function Playlist() {
  const { playlist } = usePlaylistContext();
  return (
    <div>
      {playlist.length !== 0 ? (
        <div className="playlist__container">
          {/* {playlist.map((playlist) =>)} */}
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
