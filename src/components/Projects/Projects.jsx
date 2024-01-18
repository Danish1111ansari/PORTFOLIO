import React from "react";
// import ProjectsList from "../ProjectsList/ProjectsList";
import "./Projects.css"
import {Typography } from "@mui/material";
import { AiOutlineProject } from 'react-icons/ai';
import { FaRegSmileWink } from "react-icons/fa";
import ecommerce from "../../Images/ecommerce.png";
import BlogApp from "../../Images/BlogApp.png";


export const ProjectCard = (
 { url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin,
  id}
) => {
    return (
      <>
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
          </div>
        </a>

          {/* <Button
            style={{ color: "rgba(40,40,40,0.7)" }}
            // onClick={() => deleteHandler(id)}
          >
          </Button> */}
            {/* <Delete /> */}
        
      </>
    );
};

const Projects = () => {

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectWrapper">
        <ProjectCard
          url="https://lazy-cyan-python.cyclic.app/"
          projectImage={ecommerce}
          projectTitle="NEWBAZAR"
          description="Designed a fully responsive and dynamic full stack web application with MERN.
REACT is use to build a responsive and dynamic user interface. create a back-end API with Express and Node.js.
store data in a NoSQL database with MongoDB. user and Admin have thier different pannels.
functionality - Register, login and forgotPassword authentication, creation of the product (price, description, etc),
category of the product, status of the product (deliver, processing, etc), manage payment using Braintree payment gateway."
          technologies="React, Node.js, MongoDb express etc."
          isAdmin={true}
          id={123}
        />
        <ProjectCard
          url="https://lazy-cyan-python.cyclic.app/"
          projectImage={BlogApp}
          projectTitle="NEWBAZAR"
          description="Designed a fully responsive full stack web application with MERN.
REACT is use to build a responsive and dynamic user interface. create a back-end API with Express and Node.js.
store data in a NoSQL database with MongoDB."
          technologies="React, Node.js, MongoDb express etc."
          isAdmin={true}
          id={123}
        />
      </div>
      <Typography
        variant="h3"
        className="projectlasth3"
        style={{ font: "100 1.2rem 'Ubuntu Mono'" }}
      >
        All the projects shown above are made by me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
