import React from "react";
import style from "./style.module.scss";
import { skillLogos } from "../../../utils/data";
// import SkillCard from "../../cards/skillCard";
const SkillSection = () => {
  return (
    <section className={style.skill_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>skills{" "}
        </div>
      </div>
      <div className={style.body}>
        <div className={style.card_container}>
          {/* <SkillCard />
          <SkillCard />
          <SkillCard /> */}
          {skillLogos.map((val, ind) => {
            return (
              <div className={style.img_box} key={ind}>
                <img src={val} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
