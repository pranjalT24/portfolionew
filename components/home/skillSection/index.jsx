import React from "react";
import style from "./style.module.scss";
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
        <div className={style.side_img_box}>
          <img src="/images/background.png" alt="" />
        </div>
        <div className={style.card_container}>
          {/* <SkillCard />
          <SkillCard />
          <SkillCard /> */}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
