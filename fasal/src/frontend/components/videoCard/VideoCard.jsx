import React, { useState } from "react";
import "./videoCard.css";
import { PlaylistModal } from "../index";

function VideoCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const [modal, setModal] = useState(false);
	return (
		<>
			<div
				className="video__card"
			>
					<img
						alt={video.title}
						src={video.staticImg}
						className="video__card-image"
					/>

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
					<p className="video__views">{video.views} views</p>
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
