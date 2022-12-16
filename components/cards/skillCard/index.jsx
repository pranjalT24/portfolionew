import React from "react";
import style from "./style.module.scss";
const SkillCard = ({ data }) => {
  const skillArray = [
    "Typescript",
    "Javascript",
    "Java",
    "Typescript",
    "Javascript",
    "Java",
  ];
  return (
    <div className={style.card_container}>
      <div className={style.main_title}>{data.title}</div>
      <div className={style.desc}>
        {data.skills.map((val, ind) => {
          return <span key={ind}>{val}</span>;
        })}
      </div>
    </div>
  );
};

export default SkillCard;
