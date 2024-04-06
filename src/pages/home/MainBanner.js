import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../../context/global";
import { Swiper, SwiperSlide, Scrollbar } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaPlayCircle } from "react-icons/fa";
import "swiper/css/effect-fade";
import "./MainBanner.scss";
import {
  Controller,
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";

import SwiperCore from "swiper";
SwiperCore.use([Controller]);
function MainBanner() {
  const { popularAnime, isSearch } = useGlobalContext();
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  useEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      const swiper1 = swiper1Ref.current.swiper;
      const swiper2 = swiper2Ref.current.swiper;
      if (swiper1 && swiper2) {
        swiper1.controller.control = swiper2;
        swiper2.controller.control = swiper1;
      }
    }
    console.log("xd", "hiii test");
    const firstTitle = popularAnime ? popularAnime[0]?.title : "";
    setTitles(firstTitle);

    const firstPlot = popularAnime ? popularAnime[0]?.synopsis : "";
    setPlot(firstPlot);
  }, [swiper1Ref.current, swiper2Ref.current, popularAnime]);

  const [plot, setPlot] = useState("");
  const [titles, setTitles] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleSlideChange = (swiper) => {
    setShowMore(false);
    const currentSlide = swiper.slides[swiper.activeIndex];
    const currentAnimeTitle = currentSlide.querySelector(".title").textContent;
    const currentPlot = currentSlide.querySelector(".plot").textContent;
    setTitles(currentAnimeTitle);
    setPlot(currentPlot);
  };
  return (
    <div className="swiper-container">
      <div className="banner-overlay"></div>
      <div className="banner-overlay-right"></div>
      <div className="banner-overlay-left"></div>
      <div className="banner-overlay-top"></div>
      <div className="swiper-navigation">
        <div className="hero-content">
          <div className="section-1 content">
            <div
              className="main-title"
              style={
                titles && titles.length > 25
                  ? { alignSelf: "center" }
                  : { alignSelf: "flex-start", marginLeft: "1em" }
              }
            >
              {titles?.substring(0, 90)}
            </div>
            <div className="line"></div>
            <div className="line-2"></div>

            <div className="plot">
              {plot && plot.length > 70 && (
                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
              )}
              {plot &&
                (plot.length <= 450
                  ? plot
                  : showMore
                  ? plot
                  : plot.substring(0, 380) + ".. ")}
              {plot && plot.length > 380 && (
                <button
                  className="btnShowMore"
                  onClick={() => setShowMore(!showMore)}
                  type="button"
                >
                  {titles !== "" && showMore ? `Show Less` : `Show More`}
                </button>
              )}
            </div>
            <div className="view-trailer-container">
              <button className="view-trailer">
                Trailer
                <FaPlayCircle size={25} style={{ marginLeft: 5 }} />
              </button>
            </div>
          </div>

          <div className="section-2 content">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              onSlideChange={handleSlideChange}
              slideToClickedSlide={true}
              spaceBetween={80}
              slidesOffsetAfter={100}
              coverflowEffect={{
                rotate: 50,
                stretch: 100,
                modifier: 1,
                depth: 100,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              ref={swiper2Ref}
              scrollbar={{ hide: true }}
              className="swiper-one"
            >
              {!isSearch &&
                popularAnime.map((anime) => (
                  <SwiperSlide key={anime.id} className="swiper-slide-2">
                    <div className="banner2-container">
                      <img src={anime.images.jpg.large_image_url} alt="" />
                    </div>

                    <div className="title">
                      {titles === "" ? setTitles(anime.title) : anime.title}
                    </div>
                    <div className="plot">
                      {plot === "" ? setPlot(anime.synopsis) : anime.synopsis}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Swiper
        ref={swiper1Ref}
        style={{ userSelect: "none" }} // Remove pointerEvents: "none"
        scrollbar={{ hide: true }}
        modules={[EffectFade]}
        effect="fade"
        delay={5000}
        className="swiper-banner"
      >
        {!isSearch &&
          popularAnime.map((anime) => (
            <SwiperSlide key={anime.id} className="swiper-slide-1">
              <div className="banner-container-1">
                <img src={anime.images.jpg.large_image_url} alt="" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MainBanner;
