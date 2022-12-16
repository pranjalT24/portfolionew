import React from "react";
import style from "./style.module.scss";
import ButtonCustom from "../../button";
const LandingSection = () => {
  return (
    <div className={style.landing_container}>
      <div className={style.context_part}>
        <div className={style.main_heading}>
          Pranjal is a{" "}
          <span className={style.highlight}>Computer Science Engineer</span> and
          <span className={style.highlight}> front-end developer </span>
        </div>
        <div className={style.sub_heading}>
          He crafts responsive websites where technologies meet creativity
        </div>
        <div className={style.button_container}>
          <a href="/PRANJAL_TIWARI_RESUME.pdf" target="_">
            <ButtonCustom title={" Resume"} icon={""} />
          </a>
        </div>
      </div>
      <div className={style.img_container}>
        <img src="/images/shape1.svg" className={style.shape1} alt="" />
        <img
          src="/images/profile_img.png"
          className={style.profile}
          alt="no img"
        />
        <div className={style.msg_box}>
          SDE At{" "}
          <a href="https://www.impulsiveweb.com/" className={style.highlight}>
            ImpulsiveWeb
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
