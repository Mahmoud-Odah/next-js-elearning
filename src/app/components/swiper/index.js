"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import Menu from "../menu";
const SwiperComp = () => {
  return (
    <>
      <div className="top-nav">
        <div className="header-img">
          <Image
            className="img-swiper"
            src={"/assets/img/Screenshot 2024-01-08 234338.png"}
            width={100}
            height={100}
          />
          <h2>Sorbonne</h2>
          <p>E-Learning</p>
        </div>
        <Menu />

        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          // modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-content-main"
        >
          <SwiperSlide>
            <div className="swiper-content">
              <Image
                className="img-swiper"
                src={
                  "/assets/img/Cultura-Scientific-Programmes-slider-desktop.jpg"
                }
                width={1920}
                height={800}
              />
              <div className="overlay">
                <div className="text-container">
                  <h1>Cultural & Scientific Programmes 2023/24</h1>
                  <Link href={"/"}>Learn More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <Image
                className="img-swiper"
                src={"/assets/img/campus-life.jpg"}
                width={1920}
                height={800}
              />
              <div className="overlay">
                <div className="text-container">
                  <h1>Explore our campus</h1>
                  <p>Sorbonne Abu Dhabi is home to students from over 90 countries, and is centrally located in one of the world’s most diverse cities. Learn more about our facilities and life on campus</p>
                  <Link href={"/"}>Learn More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <Image
                className="img-swiper"
                src={"/assets/img/apply-now.jpg"}
                width={1920}
                height={800}
              />
              <div className="overlay">
                <div className="text-container">
                  <h1>Apply now!</h1>
                  <Link href={"/"}>Learn More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <Image
                className="img-swiper"
                src={"/assets/img/go-green-3.jpg"}
                width={1920}
                height={800}
              />
              <div className="overlay">
                <div className="text-container">
                  <p>Visit SUAD’s website dedicated to sustainable initiatives & projects</p>
                  <Link href={"/"}>Learn More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComp;
