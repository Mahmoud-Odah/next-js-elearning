
import React from "react";
import axios from "axios";
import "./style.scss";
import PlayList from "@/app/components/playList";
import MoreCourses from "@/app/components/more-courses";
const Courses = async ({ params }) => {
  const { id } = params;

  const res = await axios.get(
    `http://127.0.0.1:1338/api/play-lists/${id}?populate[0]=videos&populate[1]=videos.video&populate[2]=videos.files&populate[3]=files`
  );
  const data = res?.data;
  // console.log('data my  :>> ', data.videos[0].files);
  const morePlayList = await axios.get('http://127.0.0.1:1338/api/play-lists?filters[more][$eq]=true&populate[0]=image')
    const morePlayListData =  morePlayList?.data
  return (
    <div className="playList-container">
      <div className="playList-img"><h1>{data?.title}</h1></div>
        <PlayList data={data}/>
        <MoreCourses data={morePlayListData} isHome={true}/>

    </div>
  );
};

export default Courses;
