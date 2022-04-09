import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { VideoCard } from "../../components";
function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [videos, setVideos] = useState([]);
  const fetchData = async () => {
    const {
      data: { Title, Plot, Poster, Year },
    } = await axios.get(
      `https://www.omdbapi.com/?t=${searchInput}&apikey=3dd1056c`
    );
    setVideos([{ Title, Plot, Poster, Year }]);
  };
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
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Home };