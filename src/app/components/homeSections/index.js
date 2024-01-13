import Image from "next/image";
import Link from "next/link";
import React from "react";
import './style.scss'
const HomeSections = () => {
  return (
    <>
      <div className="homeSections">
        <div className="homeSectionsleft">
          <h1>Student life</h1>
          <p>
            Find out about living on our multi-cultural campus, facilities and
            more
          </p>
          <Link href={""}>Discover More</Link>
        </div>
        <div className="homeSectionsright">
          <img src={"/assets/img/Student-life.jpeg"} alt="Student-life" />
        </div>
      </div>
      <div className="homeSections2">
        <div className="homeSectionsright2">
          <img src={"/assets/img/Sorbonne-University.webp"} alt="Student-life" />
        </div>
        <div className="homeSectionsleft2">
          <h1>Sports</h1>
          <p>
          Participate in over 20 sports and integrate a sport with your degree
          </p>
          <Link href={""}>Learn More</Link>
        </div>
      </div>

      <div className="ready-now">
        <h1>Ready to join us?</h1>
        <Link href={'/e-learning'}>Apply Now</Link>
      </div>
    </>
  );
};

export default HomeSections;
