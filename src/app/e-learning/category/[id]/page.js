import Courses from "@/app/components/courses";
import axios from "axios";
import React from "react";
import "./style.scss";
import Image from "next/image";
const Category = async ({ params }) => {
  const categorySlug = `/category/${params.id}`;

  const res = await axios.get(
    `http://127.0.0.1:1338/api/play-lists?filters[categories][link][$eq]=${categorySlug}&populate=*`
  );
  const data = res.data;
  if (data.length === 0) {
    return (
      <div className="category-not-found">
        <div className="">
          <Image
            width={600}
            height={600}
            src="/assets/img/not-found.png"
            alt=""
          />
        </div>
        <h1>Unfortunately, there are no courses for this section currently</h1>
      </div>
    );
  }
  return (
    <div>
      <Courses data={res.data} isHome={false} />
    </div>
  );
};

export default Category;
