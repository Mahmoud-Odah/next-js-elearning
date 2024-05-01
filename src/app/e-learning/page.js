import React from "react";
import Hero from "../components/hero-section/Hero";
import Categories from "../components/categories/Categories";
import Courses from "../components/courses";
import axios from "axios";
import Banners from "../components/banners";
import WavesBanner from "../components/waves";

const Elearning = async () => {
  const res = await axios.get(
    "http://127.0.0.1:1338/api/categories?populate[0]=icons"
  );
  const categories = res?.data;
  const popularPlayList = await axios.get(
    "http://127.0.0.1:1338/api/play-lists?filters[is_popular][$eq]=true&populate[0]=image"
  );
  const popularPlayListData = popularPlayList?.data;
  return (
    <div>
      <Hero />
      <Banners />
      <Categories categories={categories} />
      <WavesBanner />
      <Courses data={popularPlayListData} isHome={true} />
    </div>
  );
};

export default Elearning;
