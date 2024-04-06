import React from "react";
import { useGlobalContext } from "../context/global";

function Home() {
  const { popularAnime, isSearch } = useGlobalContext();
  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        console.log("xd", anime);
      });
    }
  };
  return (
    <>
      <div className="home-container">{conditionalRender()}</div>
    </>
  );
}

export default Home;
