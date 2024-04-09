import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Upcoming.scss";
import { useGlobalContext } from "../../context/global";

function Upcoming() {
  const { upcomingAnime, isSearch, loading } = useGlobalContext();

  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    function handleResize() {
      const newSlidesPerView = window.innerWidth >= 768 ? 3 : 2;
      setSlidesPerView(newSlidesPerView);

      if (window.innerWidth > 1200) {
        setSlidesPerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once during mounting
  return (
    <div className="upcoming-main-container">
      <div className="upcoming-title">Upcoming Anime</div>
      <div className="swiper-container-upcoming">
        {window.innerWidth >= 300 ? (
          <Swiper
            spaceBetween={15}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            style={{ userSelect: "none" }}
            className="upcoming-swiper"
          >
            {!isSearch &&
              upcomingAnime.map((anime) => (
                <SwiperSlide key={anime.id} className="swiper-card-container">
                  <div className="swiper-card">
                    <div className="overlay-upcoming"></div>
                    <img
                      className="img-swiper"
                      src={anime.images.jpg.large_image_url}
                      alt=""
                    />
                  </div>
                  <div className="swiper-card-title">
                    <span style={{ color: "#f0c244" }}>
                      {anime.title.slice(0, 1)}
                    </span>

                    {anime.title.length > 40
                      ? anime.title.slice(1, 40) + "..."
                      : anime.title.slice(1)}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <Swiper
            spaceBetween={15}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            style={{ userSelect: "none" }}
            className="upcoming-swiper"
          >
            {!isSearch &&
              upcomingAnime.map((anime) => (
                <SwiperSlide key={anime.id} className="swiper-card-container">
                  <div className="swiper-card">
                    <img
                      className="img-swiper"
                      src={anime.images.jpg.large_image_url}
                      alt=""
                    />
                  </div>
                  <div className="swiper-card-title">
                    <span style={{ color: "#f0c244" }}>
                      {anime.title.slice(0, 1)}
                    </span>
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "#fc0244",
                        paddingLeft: "3px", // Adjust as needed for spacing
                      }}
                    >
                      {anime.title.split(" ")[0].slice(1)}
                    </span>
                    {anime.title.length > 25
                      ? anime.title.slice(1, 25) + "..."
                      : anime.title.slice(1)}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Upcoming;
