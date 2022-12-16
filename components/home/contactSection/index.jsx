import React from "react";
import style from "./style.module.scss";
import { socialData } from "../../../utils/data";
import { IoIosCall } from "react-icons/io";
const ContactSection = () => {
  return (
    <section className={style.contact_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>Contact{" "}
        </div>
      </div>
      <div className={style.body}>
        <div className={style.context}>
          <div className={style.desc}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={style.box_container}>
          <div className={style.box}>
            <div className={style.title}>Message me </div>
            <div className={style.desc_box}>
              {socialData.map((val, ind) => {
                return val.title != "Mail" ? (
                  <a href={val.url} key={ind}>
                    <div className={style.desc}>
                      {val.logo()}
                      {val.title}
                    </div>
                  </a>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
          <div className={style.box}>
            <div className={style.title}>Contact me </div>
            <div className={style.desc_box}>
              {socialData.map((val, ind) => {
                return val.title === "Mail" ? (
                  <a href={`mailto:${val.url}`} key={ind} target="_">
                    <div className={style.desc}>
                      {val.logo()}
                      {val.title}
                    </div>
                  </a>
                ) : (
                  ""
                );
              })}
              <a href="tel:+917879009792">
                <div className={style.desc}>
                  <IoIosCall />
                  +91 7879009792
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
