import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePlaylistContext } from "../../context";
import "./playlistModal.css";
function PlaylistModal({ setModal, video }) {
  const [inputVisible, setInputVisible] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { playlist, setPlaylist } = usePlaylistContext();

  const addNewPlaylist = () => {
    const newPlaylist = {
      id: uuidv4(),
      title: playlistTitle,
      videoArray: [],
    };
    setPlaylist([...playlist, newPlaylist]);
    // setModal(false);
    setPlaylistTitle("");
    // setInputVisible(false);
  };

  const addVideoToPlaylist = (playListId) => {
    const newPlaylist = playlist.find((item) => item.id === playListId);
    newPlaylist.videoArray.push(video);
    const newList = playlist.filter((item) => item.id !== playListId);
    setPlaylist([...newList, newPlaylist]);
  };

  const deleteVideoFromPlaylist = (playListId, videoID) => {
    const newPlaylist = playlist.find((item) => item.id === playListId);
    const deletedVideoList = newPlaylist.videoArray.filter(
      (item) => item.id !== videoID
    );
    newPlaylist.videoArray = deletedVideoList;
    const newList = playlist.filter((item) => item.id !== playListId);
    setPlaylist([...newList, newPlaylist]);
  };

  return (
    <div className="modal__container">
      <div className="playlist__modal">
        <div className="playlist__title_actions">
          <h2 className="playlist__title"> Save to ... </h2>
          <i
            className="fas fa-times close__modal"
            onClick={() => setModal(false)}
          ></i>
        </div>
        <div className="playlist__list">
          {playlist.length !== 0
            ? playlist.map((singlePlaylist) => (
                <li key={playlist._id}>
                  <input
                    type="checkbox"
                    checked={singlePlaylist.videoArray.some(
                      (item) => item.id === video.id
                    )}
                    onChange={(e) =>
                      e.target.checked
                        ? addVideoToPlaylist(singlePlaylist.id)
                        : deleteVideoFromPlaylist(singlePlaylist.id, video.id)
                    }
                  />
                  <span>{singlePlaylist.title}</span>
                </li>
              ))
            : null}
        </div>

        <div className="playlist__actions">
          {inputVisible ? (
            <>
              <input
                type="text"
                placeholder="enter playlist name"
                className="playlist__input"
                value={playlistTitle}
                onChange={(e) => setPlaylistTitle(e.target.value)}
              />
              <button
                className="btn btn-primary playlist__button"
                onClick={addNewPlaylist}
              >
                Create Playlist
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary playlist__button"
              onClick={() => setInputVisible(true)}
            >
              + Create New Playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { PlaylistModal };
