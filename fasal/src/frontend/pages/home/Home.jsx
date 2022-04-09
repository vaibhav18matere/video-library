import React from "react";
import "./home.css";
import { useState } from "react";
import axios from "axios";
function Home() {
	const [searchInput, setSearchInput] = useState("");
	const fetchData = async () => {
		const resp = await axios.get(`https://www.omdbapi.com/?t=${searchInput}&apikey=3dd1056c`);
		// const resp = await axios.get("https://www.omdbapi.com/?t=spiderman&apikey=3dd1056c");
		console.log(resp.data);
	}

	return (
		<div>
			<div className="nav__search">
				<i
					className="fa fa-search search__icon"
					onClick={() => {
						fetchData();
					}}
				></i>
				<input
					className="input"
					placeholder="Search"
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
			</div>

			<div className="home__container">
				<div className="videos__container">
					{/* show video here */}
				</div>
			</div>
		</div>

	);
}

export { Home };