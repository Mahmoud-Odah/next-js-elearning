import React from "react";
import "./style.scss";
import Link from "next/link";
const Categories = ({ categories }) => {
  function hexToRgba(hex, alpha) {
    // Remove the '#' character if it exists
    hex = hex.replace(/^#/, "");

    // Convert hex to decimal
    const bigint = parseInt(hex, 16);

    // Extract red, green, and blue components
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Calculate RGBA values
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    return rgba;
  }
  return (
    <div className="categories-section container m-auto max-w-screen-xl">
      <h1>Browse all sections</h1>
      <div className="categories-section-boxs">
        {categories.map((el, index) => (
          <Link
            key={index}
            href={'e-learning' + el?.link}
            className="categories-section-box"
            style={{
              backgroundColor: hexToRgba(el?.background_color, 0.3),
            }}
          >
            <div className="img-cont" style={{ backgroundColor: el?.background_color }}>
              <img
                src={`http://127.0.0.1:1338${el?.icons[0].url}`}
                alt="1"
              />
            </div>
            <h2 style={{ color: el?.text_color }}>
              {el?.title}
            </h2>
            <p>{el?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
