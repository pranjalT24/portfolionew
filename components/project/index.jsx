import React from "react";
import style from "./style.module.scss";
import ProjectCard from "../cards/projectCard";
import { projectData } from "../../utils/data";
const ProjectSection = () => {
  return (
    <section className={style.project_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">/</span>Projects{" "}
        </div>
        <div className={style.card_container}>
          {projectData.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                id={ind}
                stack={val.stack}
                name={val.name}
                github={val.github}
                img={val.img}
                live={val.live}
                desc={val.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
