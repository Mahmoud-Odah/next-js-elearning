import Link from "next/link";
import React from "react";
import "./style.scss";
const Banners = () => {
  return (
    <div className="banner-home2">
      <div className="banner-container2">
        {/* <div className="overlay-img"></div> */}
        <div className="banner-content2">
          <h1>Expolre Our Mathematics Instructions</h1>
          <p>Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained.</p>
          <Link href={"/e-learning/category/marketing"}>Go Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banners;
