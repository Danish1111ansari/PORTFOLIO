import React from "react";
// import ProjectsList from "../ProjectsList/ProjectsList";
import "./Projects.css"
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from 'react-icons/ai';
import { FaRegSmileWink } from "react-icons/fa";
import venus from "../../Images/space.jpg";
import { Delete } from "@mui/icons-material";
// import { ProjectCard } from './../../../../mernPortfolio/frontend/src/components/Projects/Projects';

export const ProjectCard = (
  url="https://github.com/Danish1111ansari",
  projectImage={venus},
  projectTitle="MERN",
  description="This is MERN projects",
  technologies="NodeJs, ReactJs ,ExpressJs,MongoDb",
  isAdmin = false,
  id
) => {
    return (
      <>
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={venus} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
          </div>
        </a>

          <Button
            style={{ color: "rgba(40,40,40,0.7)" }}
            // onClick={() => deleteHandler(id)}
          >
            <Delete />
          </Button>
        
      </>
    );
};

const Projects = () => {
  return (
    <div className="projects">
          <Typography variant="h3">
              Projects <AiOutlineProject/>
          </Typography>
          <div className="projectWrapper">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
          </div>
          <Typography variant="h3"  className="projectlasth3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
              All the projects shown above are made by me <FaRegSmileWink/>
          </Typography>
    </div>
  );
};

export default Projects;
