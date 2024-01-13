'use client'
import React from "react";
// import logo from "../../assets/imgs/logonew.png";
import { ColorRing } from "react-loader-spinner";
import './style.css'
const Spinner = () => {
  return (
    <div className="centered-wrapper">
    <div className="spinner-wrapper">
      {/* <img src={logo} alt="Sewara logo" className="img-card" /> */}
      <ColorRing
        visible={true}
        height="110"
        width="110"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#DB016A", "#B104A0", "#7008F1", "#AB04A7", "#9606C2"]}
      />
    </div>
    </div>
  );
};

export default Spinner;