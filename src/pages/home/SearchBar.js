import React from "react";
import "./SearchBar.scss";
function SearchBar() {
  return (
    <>
      <div className="main-search-container">
        <div className="overlay-bottom"></div>
        <div className="overlay-top"></div>
        <div className="overlay-left"></div>
        <div className="overlay-right"></div>
        <div className="bg-img">
          <div className="search-content-container">
            <div className="title title-1">Explore Anime and Manga</div>
            <div className="title title-2">
              Stay up-to-date with the latest releases,
            </div>
            <div className="title title-3">
              curated recommendations, and a vast library of content
            </div>
            <div className="search-container">
              <input type="text" className="searchbar" />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="season-title">Top Airing Anime</div>
      <div className="season-line"></div>
    </>
  );
}

export default SearchBar;
