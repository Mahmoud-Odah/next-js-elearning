import React from "react";
import "./style.scss";
import Link from "next/link";
import textLight from "../textLight";
const Menu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-items">
        <Link href={""} className="side-menu-item">
          Undergraduate study
        </Link>
        <Link href={""} className="side-menu-item">
          Postgraduate study
        </Link>
        <Link href={""} className="side-menu-item">
          Executive education
        </Link>
        <Link href={""} className="side-menu-item">
          The research institute
        </Link>
        <Link href={""} className="side-menu-item">
          Fees and scholarships
        </Link>
        <Link href={""} className="side-menu-item">
          Apply now
        </Link>
        <Link href={""} className="side-menu-item">
          Student and campus life
        </Link>
        <Link href={""} className="side-menu-item">
          News & events
        </Link>
        <Link href={""} className="side-menu-item">
          Covid-19 Updates
        </Link>
        <Link href={"/e-learning"} className="side-menu-item learning-ment">
          E - Learning
          <div class="light-toggle">
            <p class="text">New</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
