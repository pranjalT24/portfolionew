import React from "react";
import LandingSection from "./landingSection";
import style from "./style.module.scss";
import ProjectSection from "./project";
import SkillSection from "./skillSection";
import AboutSection from "./aboutSection";
import FunFactSection from "./funfactSection";
import ContactSection from "./contactSection";

import BlogsSection from "./blogs";
const HomeComponent = () => {
  return (
    <>
      <LandingSection />
      <div className={style.quote_container}>
        <div className={style.quote}>
          <img src="/images/icons/quote.svg" alt="" className={style.top} />
          <img src="/images/icons/quote.svg" alt="" className={style.bottom} />
          With great power comes great electricity bill
        </div>
        <div className={style.author}>- Dr. Who</div>
      </div>
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <FunFactSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
};

export default HomeComponent;
