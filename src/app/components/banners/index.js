import Link from "next/link";
import React from "react";
import "./style.scss";
const Banners = () => {
  return (
    <div className="banner-home">
      <div className="banner-container">
        <div className="overlay-img"></div>
        <div className="banner-content">
          <h1>Expolre Our Marketing Instructions</h1>
          <p>activities a company undertakes to promote the buying or selling of a product or service  Marketing includes advertising, selling, and delivering products to consumers or other businesses. Some marketing is done by affiliates on behalf of a company.</p>
          <Link href={"/e-learning/category/marketing"}>Go Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banners;
