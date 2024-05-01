import Image from "next/image";
import Hero from "./components/hero-section/Hero";
import Categories from "./components/categories/Categories";
import axios from "axios";
import Courses from "./components/courses";
import SwiperComp from "./components/swiper";
import OurValues from "./components/our-values";
import OurValues2 from "./components/our-values2";
import HomeSections from "./components/homeSections";

export default async function Home() {
  return (
    <div>
      <SwiperComp />
      <OurValues />
      <OurValues2 />
      <HomeSections/>
    </div>
  );
}
