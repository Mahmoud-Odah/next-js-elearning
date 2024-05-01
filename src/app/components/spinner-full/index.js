'use client'
import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import './style.css'
const SpinnerFull = () => {

  useEffect(() => {
    
  
    return () => {
      window.scrollTo(0, 0);
    }
  }, [])
  
  return (
    <div className="centered-wrapper-full">
    <div className="spinner-wrapper-full">
      <img src={'/assets/img/loadpng.png'} alt="Sewara logo" className="img-card-full" />
      <ColorRing
        visible={true}
        height="110"
        width="110"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e53c2e", "#B104A0", "#7008F1", "#AB04A7", "#9606C2"]}
      />
    </div>
    </div>
  );
};

export default SpinnerFull;