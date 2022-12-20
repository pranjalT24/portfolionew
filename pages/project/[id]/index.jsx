import { useRouter } from "next/router";
import React from "react";
import style from "./style.module.scss";
import { projectData } from "../../../utils/data";
import ButtonCustom from "../../../components/button";
import Link from "next/link";
import FooterComponent from "../../../components/footer";
import { IoLogoGithub, IoIosConstruct } from "react-icons/io";
const ProjectDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const data = projectData[Number(id)];
  return (
    <>
      <section className={style.about_section}>
        <div className={style.heading}>
          <div className={style.title}>
            <span className="highlight">/</span>
            <Link href={"/project"}>Projects</Link>
            <span className="highlight">/</span>
            {data?.name}{" "}
          </div>
        </div>
        <div className={style.body}>
          <div className={style.img_box}>
            <img src={data?.img} alt="" />
          </div>
          <div className={style.context_container}>
            {data?.desc ? (
              <div
                className={style.desc}
                dangerouslySetInnerHTML={{ __html: data?.desc }}
              ></div>
            ) : (
              <>
                <div className={style.under_construction}>
                  PROJECT IS UNDER CONSTRUCTION
                  <div className={style.icon}>
                    <IoIosConstruct />
                  </div>
                </div>
              </>
            )}
            <div className={style.tech_stack}>{data?.stack}</div>
          </div>
          <div className={style.social_media}>
            {data?.live && (
              <Link href={data?.live}>
                <ButtonCustom title={"Live"} />
              </Link>
            )}
            {data?.github && (
              <a href={data?.github} className={style.icon}>
                <IoLogoGithub />
              </a>
            )}
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default ProjectDetails;
