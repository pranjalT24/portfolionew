import React from "react";
import style from "./style.module.scss";
const ButtonCustom = ({ title, icon }) => {
  return (
    <div className={style.button}>
      {title} <span>{icon ? icon : ""}</span>{" "}
    </div>
  );
};

export default ButtonCustom;
