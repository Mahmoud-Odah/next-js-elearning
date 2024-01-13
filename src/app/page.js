import Image from "next/image";
import Hero from "./components/hero-section/Hero";
import Categories from "./components/categories/Categories";
import axios from "axios";
import Courses from "./components/courses";
import SwiperComp from "./components/swiper";
import OurValues from "./components/our-values";
import HomeSections from "./components/homeSections";

export default async function Home() {
  return (
    <div>
      <SwiperComp />
      <OurValues />
      <HomeSections/>
    </div>
  );
}
