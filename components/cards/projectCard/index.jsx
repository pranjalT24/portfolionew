import React from "react";
import style from "./style.module.scss";
import ButtonCustom from "../../button";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Link from "next/link";
const ProjectCard = ({ name, img, stack, desc, live, github, id }) => {
  return (
    <div className={style.card}>
      <div className={style.img_container}>
        {" "}
        <img src={img} alt="" />{" "}
      </div>
      <div className={style.tec_stack}>{stack}</div>
      <div className={style.context}>
        <div className={style.title}>{name}</div>
        <div className={style.desc}>
          Click to on details to know more about this project
        </div>
        <div className={style.btn_container}>
          <a href={live} target="_">
            <ButtonCustom title={"Live"} icon={<HiOutlineStatusOnline />} />
          </a>
          <Link href={`/project/${id}`}>
            <ButtonCustom title={"Details"} icon={<HiOutlineStatusOnline />} />
          </Link>
          {github && (
            <a href={github} className={style.icons}>
              <IoLogoGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
