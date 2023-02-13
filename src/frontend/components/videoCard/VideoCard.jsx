import React, { useState } from "react";
import "./videoCard.css";
import { PlaylistModal } from "../index";

function VideoCard({ video }) {
  const [videoActions, setVideoActions] = useState(false);
  const [modal, setModal] = useState(false);

  const { Title, Poster, Year, Type } = video;

  return (
    <>
      <div className="video__card">
        <img className="video__card-image" alt={Title} src={Poster} />
        <h4 className="video_title">{Title}</h4>
        <span className="more-action-icon">
          <i
            className="fas fa-ellipsis-v"
            onClick={(e) => {
              e.stopPropagation();
              setVideoActions(!videoActions);
            }}
          ></i>
        </span>
        <div>
          <div className="video_extra_info">
            <span className="video__views"> Type : {Type}</span>
            <span className="video__views"> Release in : {Year}</span>
          </div>
          {videoActions ? (
            <div className="video_actions_container">
              <div
                className="video__card__button"
                onClick={(e) => {
                  e.stopPropagation();
                  setModal(true);
                }}
              >
                <i className="fas fa-play-circle "></i>
                <p>Add to Playlist</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {modal ? <PlaylistModal setModal={setModal} video={video} /> : null}
    </>
  );
}

export { VideoCard };
