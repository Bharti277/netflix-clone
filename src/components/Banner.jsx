import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      console.log(res, "response");
      const randomMovie = Math.floor(
        Math.random() * res.data.results.length - 1
      );
      setMovie(res.data.results[randomMovie]);
    };
    fetchData();
  }, []);
  console.log(movie, "skfhkdf");
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("${requests.fetchPosterImg}${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        {/* title */}

        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
      {/* two buttons */}
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">{movie?.overview}</h1>
      {/* poster */}
    </header>
  );
};

export default Banner;
