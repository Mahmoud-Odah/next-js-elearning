import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
const Courses = ({ data, isHome }) => {
  return (
    <div className="courses-container container m-auto max-w-screen-xl">
      <h1 className="courses-container-title">
        {isHome ? "Most popular courses" : "All courses"}
      </h1>
      <div className="courses-boxs">
        {data.map((el, index) => (
          <Link href={`/e-learning/courses/${el.id}`} className="courses-box" key={index}>
            <div className="course-img">
              <img
                src={`http://127.0.0.1:1338${el?.image}`}
                alt="courses-img"
              />
            </div>
            <div className="course-footer">
              <h2>{el.title}</h2>
              <div className="course-footers-box">
                {el.is_pay ? (
                  <p className="is_pay">{el?.Price} $</p>
                ) : (
                  <p className="is_free">Free</p>
                )}
                <div className="course-footer-box">
                  <Image
                    src="/assets/img/icons-clock.gif" // Path relative to the public directory
                    alt="Animated GIF"
                    width={18} // Set the desired width
                    height={18} // Set the desired height
                  />
                  <p>{el.Duration} Houres</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
