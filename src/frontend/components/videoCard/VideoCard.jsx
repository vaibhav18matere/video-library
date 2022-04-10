import React, { useState } from "react";
import "./videoCard.css";
import { PlaylistModal } from "../index";

function VideoCard({ video }) {
  const [videoActions, setVideoActions] = useState(false);
  const [modal, setModal] = useState(false);

  const { Title, Poster, Plot, Year } = video;
  return (
    <>
      <div className="video__card">
        <img alt={Title} src={Poster} className="video__card-image" />
        <div>
          <h4>{Title}</h4>
          <small>{Plot}</small>
        </div>
        <div className="video__details__container">
          <div className="video__description__container">
            <p className="video__description">{video.title}</p>
            <i
              className="fas fa-ellipsis-v"
              onClick={(e) => {
                e.stopPropagation();

                setVideoActions(!videoActions);
              }}
            ></i>
          </div>
          <p className="video__views"> Year : {Year}</p>
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
