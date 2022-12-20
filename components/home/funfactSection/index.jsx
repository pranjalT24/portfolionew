import React from "react";
import style from "./style.module.scss";
const FunFactSection = () => {
  const factData = [
    "I like winter more than summer",
    "I like Chicken",
    "I like to play Video Games",
    "I like to learn about Technologies",
  ];
  return (
    <section className={style.fun_fact_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>Fun Fact{" "}
        </div>
      </div>
      <div className={style.body}>
        <div className={style.fact_container}>
          {factData.map((val, ind) => {
            return (
              <div className={style.box} key={ind}>
                {val}
              </div>
            );
          })}
        </div>
        <div className={style.img_container}>
          <img src="/images/shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
