import React from "react";
import style from "./style.module.scss";
import ProjectCard from "../../cards/projectCard";
const ProjectSection = () => {
  const data = [
    {
      name: "CGHELP+",
      img: "https://pranjaltiwari.netlify.app/static/media/cghelp.60524acaa536c99c9ac7.png",
      desc: "",
      stack: "React Firebase Bootstrap",
      live: "https://covidresource-624e8.firebaseapp.com/",
      github: "https://github.com/pranjalT24/covidresource",
    },
    {
      name: "JUST CHAT",
      img: "https://pranjaltiwari.netlify.app/static/media/justchat.cd7576fe293149fb4ab8.png",
      desc: "",
      stack: "React Express Socket.io Bootstrap",
      live: "https://justchatappbypranjal.netlify.app/",
      github: "https://github.com/pranjalT24/justchatapp",
    },
    {
      name: "NoTODO",
      img: "/images/notodo.png",
      desc: "",
      stack: "Next.js Ant-Desgin Sass",
      live: "https://notodo.netlify.app/",
      github: "https://github.com/pranjalT24/NoteTodoApp",
    },
    {
      name: "WEATHER APP",
      img: "https://pranjaltiwari.netlify.app/static/media/weatherapp.dfd208b33ea66bbd8606.png",
      desc: "",
      stack: "React Bootstrap",
      live: "https://weatherappbypranjal.netlify.app/",
      github: "https://github.com/pranjalT24/WeatheraAppByPranjal",
    },
    {
      name: "Neurastats",
      img: "/images/neurastats.png",
      desc: "",
      stack: "React Bootstrap Scss",
      live: "https://neurastats.com/home",
      github: "",
    },
    {
      name: "Voice Website",
      img: "https://pranjaltiwari.netlify.app/static/media/voiceapp.617e02ccb1e68b66f84b.png",
      desc: "",
      stack: "React Bootstrap Speech-Recognization",
      live: "https://voicewebsite.netlify.app/",
      github: "https://github.com/pranjalT24/Voice-Control-Nevigation",
    },
    {
      name: "SaveMeds",
      img: "/images/savemeds.png",
      desc: "Work Under Progess",
      stack: "React Ant-Design Firebase",
      live: "https://savemedstest.netlify.app/home",
      github: "",
    },
    {
      name: "HolidayHacks",
      img: "/images/holidays.png",
      desc: "",
      stack: "HTML CSS JAVASCRIPT",
      live: "https://holidayhack.netlify.app/",
      github: "",
    },
  ];
  return (
    <section className={style.project_section}>
      <div className={style.heading}>
        <div className={style.title}>
          <span className="highlight">#</span>projects{" "}
        </div>
        <div className={style.card_container}>
          {data.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                stack={val.stack}
                name={val.name}
                github={val.github}
                img={val.img}
                live={val.live}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
