import React from "react";
import style from "./style.module.scss";
import ProjectCard from "../../cards/projectCard";
import Link from "next/link";
import { projectData } from "../../../utils/data";
const ProjectSection = () => {
  return (
    <section className={style.project_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>projects{" "}
        </div>
        <Link href={"/project"}>
          {" "}
          <div className={style.view_all_btn}>View all</div>
        </Link>
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
    </section>
  );
};

export default ProjectSection;
