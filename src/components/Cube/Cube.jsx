import React from "react";
import "./Cube.css";
import { Typography } from "@mui/material";
import spaceImage from "../../Images/space.jpg"
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
            <img src={spaceImage} alt="face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFac2">
            <img src={spaceImage} alt="face2" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace3">
            <img src={spaceImage} alt="face3" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace4">
            <img src={spaceImage} alt="face4" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace5">
            <img src={spaceImage} alt="face5" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace6">
            <img src={spaceImage} alt="face6" />
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
