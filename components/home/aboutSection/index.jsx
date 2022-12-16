import React from "react";
import style from "./style.module.scss";
const AboutSection = () => {
  return (
    <section className={style.about_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>about me{" "}
        </div>
      </div>
      <div className={style.body}>
        <div className={style.context_container}>
          <div className={style.desc}>
            Hi, I am <b>Pranjal Tiwari</b> 
          </div>
          <div className={style.desc}>
            I’m a self-taught front-end developer based in Chhattishgarh, India. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </div>
          <div className={style.desc}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </div>
        </div>
        <div className={style.img_box}></div>
      </div>
    </section>
  );
};

export default AboutSection;
