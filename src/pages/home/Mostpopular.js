import React, { useState } from "react";
import "./Mostpopular.scss";
import { useGlobalContext } from "../../context/global";

function Mostpopular() {
  const { popularAnime, isSearch, loading } = useGlobalContext();
  const [showAllPopular, setShowAllPopular] = useState(false);

  const handleViewMore = () => {
    setShowAllPopular(!showAllPopular);
  };

  return (
    <div style={{ maxWidth: "1920px", height: "100vh" }}>
      <div className="most-popular-title">Most Popular</div>
      <div className="mostpopular-line"></div>
      {!loading && !isSearch && (
        <div className="most-popular-container">
          <div className="card-container">
            {!isSearch &&
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
    </div>
  );
}

export default Mostpopular;
