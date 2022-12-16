import React from "react";
import style from "./style.module.scss";
const FooterComponent = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.context}>
          <div className={style.heading}>
            <div className={style.title}>Pranjal Tiwari</div>
            <div className={style.mail}>pranjaltiwari515@gmail</div>
          </div>
          <div className={style.desc}>
            Web designer and front-end developer based in Chhattishgarh, India.
          </div>
        </div>
      </div>
      <div className={style.copy_right}>© Copyright 2022. Made by Pranjal Tiwari</div>
    </footer>
  );
};

export default FooterComponent;
