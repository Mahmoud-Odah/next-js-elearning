"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
const PlayList = ({ data }) => {
  console.log("data ss ", data);

  const [path, setPath] = useState(
    `http://127.0.0.1:1338${data?.videos[0]?.video}`
  );
  const [list, setList] = useState(data?.videos);
  const [active, setActive] = useState(0);

  const changePath = (el, index) => {
    console.log("change el >> ", el);
    setPath(`http://127.0.0.1:1338${el?.video}`);
    setActive(index);
  };

  useEffect(() => {
    const myVideo = document.querySelector("#videoPlayer");
    const mySource = document.querySelector("#source");
    if (mySource && myVideo) {
      mySource.setAttribute("src", path);
      myVideo.load();
    }
  }, [path]);

  return (
    <>
      <div className="playList-content container m-auto max-w-screen-xl">
        <div className="playList-content-left">
          <div className="start-now-playList">
            <h1>Start Now !</h1>
          </div>
          <div className="playList-content-left-sub">
            {list.map((el, index) => (
              <div className="playList-content-list">
                <div
                  className={`playList-box ${active === index ? "active" : ""}`}
                  onClick={() => changePath(el, index)}
                >
                  <h1>{el.Title}</h1>
                  <p>{el.Duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="playList-content-right">
          <video width="640" height="360" controls id="videoPlayer">
            <source src={`${path}`} type="video/mp4" id="source" />
          </video>
        </div>
      </div>
      {data.description && (
        <div className="playList-content-text container m-auto max-w-screen-xl">
          <h1>About the Course</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      )}
    </>
  );
};

export default PlayList;
