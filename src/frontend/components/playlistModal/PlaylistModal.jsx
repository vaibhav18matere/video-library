import React, { useState } from "react";
import "./playlistModal.css";
function PlaylistModal({ setModal, video }) {
	const [inputVisible, setInputVisible] = useState(false);
	const [addPlaylist, setAddPlaylist] = useState({
		title: "",
		description: "",
	});
	return (
		<div className="modal__container">
			<div className="playlist__modal">
				<div className="playlist__title_actions">
					<h2 className="playlist__title">Save to...</h2>
					<i
						className="fas fa-times close__modal"
						onClick={() => setModal(false)}
					></i>
				</div>

				<div className="playlist__actions">
					{inputVisible ? (
						<>
							<input
								type="text"
								placeholder="Enter Playlist Name"
								className="playlist__input"
								onChange={(e) =>
									setAddPlaylist({ ...addPlaylist, title: e.target.value })
								}
							/>
							<input
								type="text"
								placeholder="Enter Playlist Description"
								className="playlist__input"
								onChange={(e) =>
									setAddPlaylist({
										...addPlaylist,
										description: e.target.value,
									})
								}
							/>
							<button
								className="btn btn-primary playlist__button"
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
