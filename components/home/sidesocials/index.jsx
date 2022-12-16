import React from "react";
import style from "./style.module.scss";
import { socialData } from "../../../utils/data";
const SideSocialLinks = () => {
  return (
    <div className={style.side_nav_link}>
      <div className={style.container}>
        <div className={style.line}></div>
        {socialData.map((val, ind) => {
          return (
            <a href={val.url} key={ind} target="_">
              <div className={style.links}>{val.logo()}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideSocialLinks;
