import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { VideoCard } from "../../components";
import { useDataContext } from "../../context";
import { v4 as uuidv4 } from "uuid";
function Home() {
  const [searchInput, setSearchInput] = useState("");
  const { videos, setVideos } = useDataContext();
  const fetchData = async () => {
    const {
      data: { Title, Plot, Poster, Year },
    } = await axios.get(
      `https://www.omdbapi.com/?t=${searchInput}&apikey=3dd1056c`
    );
    setVideos([{ id: uuidv4(), Title, Plot, Poster, Year }]);
  };
  return (
    <div className="search-box">
      <div className="nav__search">
        <input
          className="input"
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <i
          className="fa fa-search search__icon"
          onClick={() => {
            fetchData();
          }}
        ></i>
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
