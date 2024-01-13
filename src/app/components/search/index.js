"use client";
import React, { useState } from "react";
import "./style.scss";
import { GoSearch } from "react-icons/go";
import SearchCourses from "../search-courses";
import Image from "next/image";

const Search = ({ data }) => {
  const [value, setValue] = useState("");
  const [dataList, setDataList] = useState(data);
  const closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
    setValue("");
  };
  const onSearch = (e) => {
    setValue(e.target.value);
    const filterData = data.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataList(filterData);
  };

  return (
    <div id="myOverlay" className="overlay-search">
      <span className="closebtn" onClick={closeSearch} title="Close Overlay">
        ×
      </span>
      <div className="overlay-search-content">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={(e) => onSearch(e)}
          value={value}
        />
        {/* <div>
          sdakldkadklaskdl
        </div> */}

        {value.length > 0 && (
          <div className="box-search-result">
            <SearchCourses data={dataList} closeSearch={closeSearch} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
