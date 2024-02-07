import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
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

        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>
      {/* two buttons */}
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      {/* poster */}
      <div className="fade__bottom"></div>
    </header>
  );
};

export default Banner;
