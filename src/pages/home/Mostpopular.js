import React, { useState } from "react";
import "./Mostpopular.scss";
import { useGlobalContext } from "../../context/global";
import Upcoming from "./Upcoming";

function Mostpopular() {
  const { popularAnime, isSearch, loading, upcomingAnime, popularManga } =
    useGlobalContext();
  const [showAllPopular, setShowAllPopular] = useState(false);
  console.log(upcomingAnime, "upcoming");
  const handleViewMore = () => {
    setShowAllPopular(!showAllPopular);
  };

  const [animeTabPress, setAnimeTabPress] = useState(true);
  const handleClickTab = () => {
    setAnimeTabPress(!animeTabPress);
    setShowAllPopular(false);
  };
  return (
    <div style={{ maxWidth: "1920px", height: "100vh", width: "100%" }}>
      <div className="most-popular-title">Most Popular</div>
      <div className="mostpopular-line"></div>
      <div className="button-nav">
        <div
          className="anime-tab btn-tab-most"
          onClick={handleClickTab}
          style={{ backgroundColor: animeTabPress ? "#f0c244" : "transparent" }}
        >
          <div
            className="label-tab"
            style={{
              color: animeTabPress ? "black" : "white",
              fontWeight: animeTabPress ? "bold" : "400",
            }}
          >
            ANIME
          </div>
          {!animeTabPress && (
            <>
              <div className="line-tab-1"></div>
            </>
          )}
        </div>
        <div
          className="manga-tab btn-tab-most"
          onClick={handleClickTab}
          style={{
            backgroundColor: !animeTabPress ? "#f0c244" : "transparent",
          }}
        >
          <div
            className="label-tab"
            style={{
              color: !animeTabPress ? "black" : "white",
              fontWeight: !animeTabPress ? "bold" : "400",
            }}
          >
            MANGA
          </div>
          {animeTabPress && (
            <>
              <div className="line-tab-2"></div>
            </>
          )}
        </div>
      </div>
      {!loading && !isSearch && (
        <div className="most-popular-container">
          <div className="card-container">
            {!isSearch &&
              animeTabPress &&
              (showAllPopular ? popularAnime : popularAnime.slice(0, 8)).map(
                (anime) => (
                  <div className="card-box" key={anime.id}>
                    <div className="card-overlay"></div>
                    <div className="show-data-most-popular">
                      <div className="overlay-ranking-hover"></div>
                      <div className="title-popular">{anime.title}</div>
                      <div className="line-popular"></div>
                      <div className="ranking-most-popular">
                        <div className="rank">{anime.score}</div>
                        <div className="sypnosis-most-popular">
                          {anime.synopsis.substring(0, 140) + "..."}
                        </div>
                      </div>
                    </div>
                    <div className="img-container">
                      <img
                        className="card-img"
                        src={anime.images.jpg.large_image_url}
                        alt=""
                      />
                    </div>
                    <div className="card-title">{anime.title}</div>
                  </div>
                )
              )}

            {!isSearch &&
              !animeTabPress &&
              (showAllPopular ? popularManga : popularManga.slice(0, 8)).map(
                (anime) => (
                  <div className="card-box" key={anime.id}>
                    <div className="card-overlay"></div>
                    <div className="show-data-most-popular">
                      <div className="overlay-ranking-hover"></div>
                      <div className="title-popular">{anime.title}</div>
                      <div className="line-popular"></div>
                      <div className="ranking-most-popular">
                        <div className="rank">{anime.score}</div>
                        <div className="sypnosis-most-popular">
                          {anime.synopsis.substring(0, 140) + "..."}
                        </div>
                      </div>
                    </div>
                    <div className="img-container">
                      <img
                        className="card-img"
                        src={anime.images.jpg.large_image_url}
                        alt=""
                      />
                    </div>
                    <div className="card-title">{anime.title}</div>
                  </div>
                )
              )}
          </div>
        </div>
      )}
      {!showAllPopular && (
        <div className="view-more-popular">
          <button className="view-more" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
      {showAllPopular && (
        <div className="show-less-popular">
          <button className="show-less" onClick={handleViewMore}>
            Show Less
          </button>
        </div>
      )}
      <Upcoming />
    </div>
  );
}

export default Mostpopular;
