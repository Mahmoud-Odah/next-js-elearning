import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero-container container m-auto max-w-screen-xl">
      <div className="hero-container-right">
        <h1>The educational platform of Sorbonne University Abu Dhabi</h1>
        <p>All courses are customized to meet your needs</p>
        <div className="hero-group-btn">
          <Link href={"/"} className="hero-btn-1">subscribe now</Link>
          <Link href={"/"} className="hero-btn-2">Browse courses</Link>
        </div>
      </div>
      <div className="hero-container-left">
        <Image src={"/assets/img/1233.png"} alt="hero-img" width={400} height={400} />        
      </div>
    </div>
  );
};

export default Hero;
