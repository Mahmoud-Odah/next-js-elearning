"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import MyCourses from "@/app/components/my-courses";
import axios from "axios";
const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function getRandomObjects(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const getData = async () => {
    const popularPlayList = await axios.get(
      "http://127.0.0.1:1338/api/play-lists?populate[0]=image"
    );
    const popularPlayListData = popularPlayList?.data;
    console.log("popularPlayListData :>> ", popularPlayListData);
    setLoading(false);
    const randomObjects = getRandomObjects(popularPlayListData, 4);
    setData(randomObjects);
  };
  useEffect(() => {
    if (!userData) {
      window.location.href = "/e-learning";
    }
  }, [userData]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-profile-container">
      <div className="image-banner">
        <h1>My Profile</h1>
      </div>
      <div className="user-profile-content container m-auto max-w-screen-xl">
        <div className="user-profile-banner">
          <div className="user-profile-data">
            <img
              src={`data:image/png;base64,${userData.personalPhoto}`}
              alt="user-image"
            />
            <div className="user-profile-info">
              <h1>
                {userData.firstName} {userData.lastName}
              </h1>
              <p>{userData.email}</p>
            </div>
          </div>
          <div className="user-profile-specialist">{userData.specialist}</div>
        </div>
      </div>
      <MyCourses data={data}/>
    </div>
  );
};

export default Profile;
