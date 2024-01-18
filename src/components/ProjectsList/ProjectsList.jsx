import * as React from "react";
import Typography from "@mui/material/Typography";
import "./ProjectsList.css"

const ProjectsList = ({ url, title, image, isAdmin = false, id = "123" }) => {
  return (
    <>
      <div className="homeProjectsList">
        <Typography variant="h3"> PROJECTS</Typography>

        <div className="homeWrapper">
          <div className="ProjectsCard">
            <a href={url} target="blank">
              <img src={image} alt="demo" />
              <Typography>{title}</Typography>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
