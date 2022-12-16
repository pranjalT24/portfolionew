import React from "react";
import style from "./style.module.scss";
import ButtonCustom from "../../button";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
const ProjectCard = ({ name, img, stack, desc, live, github }) => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem?
        </div>
        <div className={style.btn_container}>
          <a href={live} target="_">
            <ButtonCustom title={"Live"} icon={<HiOutlineStatusOnline />} />
          </a>
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
