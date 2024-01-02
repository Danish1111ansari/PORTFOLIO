import React, { useEffect } from "react";
import "./Cube.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.jpg";
import spaceImage from "../../Images/space.jpg";
import venusImage from "../../Images/venus.jpg";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import TimeLine from "../TimeLine/TimeLine";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
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
  FaDatabase,
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

        <div className="cubeShadow"></div>

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
      </div>
    </>
  );
};

export default Cube;
