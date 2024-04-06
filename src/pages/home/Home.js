import React from "react";
import MainBanner from "./MainBanner";
import Navigation from "../../Components/navigation/Navigation";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Navigation />
      <MainBanner />
      <SearchBar />
    </div>
  );
}

export default Home;
