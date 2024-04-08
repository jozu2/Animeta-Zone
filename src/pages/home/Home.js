import React from "react";
import MainBanner from "./MainBanner";
import Navigation from "../../Components/navigation/Navigation";
import SearchBar from "./SearchBar";
import Mostpopular from "./Mostpopular";

function Home() {
  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Navigation />
      <SearchBar />
      <MainBanner />
      <Mostpopular />
    </div>
  );
}

export default Home;
