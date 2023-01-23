import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import BlogsCard from "../../cards/blogsCard";
import Link from "next/link";
import { blogData } from "../../../services/api";

const BlogsSection = () => {
  const [data, setData] = useState([]);
  const getBlogData = async () => {
    let res = await blogData();
    console.log("res.data.data.items", res.data.items);
    setData(res.data.items);
  };

  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <section className={style.project_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>Blogs{" "}
        </div>
        <Link href={"/project"}>
          {" "}
          {/* <div className={style.view_all_btn}>View all</div> */}
        </Link>
      </div>
      <div className={style.card_container}>
        {data.map((val, ind) => {
          return (
            <BlogsCard
              key={ind}
              title={val.title}
              thumbnail={val.thumbnail}
              link={val.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogsSection;
