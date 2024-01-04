import React from "react";
import "./Cube.css";
import { Typography } from "@mui/material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiPython,
} from "react-icons/si";

const Cube = () => {
  return (
    <>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFace homeCubeSkillsFace1">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFac2">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face2"
            />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace3">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face3"
            />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace4">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face4"
            />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace5">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face5"
            />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace6">
            <img
              src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png"
              alt="face6"
            />
          </div>
        </div>


        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiJavascript />
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiReact />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiThreedotjs />
          {/* <FaDatabase /> */}
        </div>
        <div className="cubeShadow"></div>
      </div>
    </>
  );
};

export default Cube;
