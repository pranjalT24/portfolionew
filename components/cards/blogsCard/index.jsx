import React from "react";
import style from "./style.module.scss";
import ButtonCustom from "../../button";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Link from "next/link";
const BlogsCard = ({ title, thumbnail, link }) => {
  return (
    <div className={style.card}>
      <div className={style.img_container}>
        {" "}
        <img src={thumbnail} alt="" />{" "}
      </div>
      <div className={style.context}>
        <div className={style.title}>{title}</div>

        <div className={style.btn_container}>
          <a href={link} target="_">
            <ButtonCustom title={"Opem"} icon={<HiOutlineStatusOnline />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
