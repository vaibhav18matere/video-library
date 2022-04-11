import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { VideoCard } from "../../components";
import { useDataContext } from "../../context";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const { videos, setVideos } = useDataContext();
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchInput}&apikey=3dd1056c`
    );

    setVideos(data.Search);
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
