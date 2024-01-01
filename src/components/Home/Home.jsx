import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.jpg";
import spaceImage from "../../Images/space.jpg";
import venusImage from "../../Images/venus.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseOutlined } from '@mui/icons-material';
import TimeLine from "../TimeLine/TimeLine";
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
  FaDatabase
} from "react-icons/si";

const Home = ({timelines,skills}) => {
  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(1.7, 64, 64);
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moon.position.set(1, 3, 0);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(9, 7, 5);

    // const pointLight = new THREE.PointLight(0xffffff, 100);
    // const pointLight2 = new THREE.PointLight(0xffffff, 20);

    // pointLight.position.set(9, 7, 5);
    // pointLight2.position.set(1,3,0);

    scene.add(moon);
    scene.add(venus);
    // scene.add(pointLight);
    // scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    // return window.addEventListener("scroll", () => {
    //   camera.rotation.z = window.scrollY * 0.001;
    //   camera.rotation.y = window.scrollY * 0.003;

    //   const skillsBox = document.getElementById("homeskillsBox");

    //   if (window.scrollY > 1500) {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOn";
    //   } else {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOff";
    //   }
    // });
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>D</p>
          <p>A</p>
          <p>N</p>
          <p>I</p>
          <p>S</p>
          <p>H</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">CODER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined/>
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFace homeCubeSkillsFace1">
            <img src="" alt="face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFac2">
            <img src="" alt="face2" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace3">
            <img src="" alt="face3" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace4">
            <img src="" alt="face4" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace5">
            <img src="" alt="face5" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace6">
            <img src="" alt="face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiJavascript />
          <SiPython/>
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




    </div>
  );
};

export default Home;
