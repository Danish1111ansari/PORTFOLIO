import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import space from "../../Images/space.jpg";
import { Delete } from "@mui/icons-material";
import { FaTrash } from "react-icons/fa";
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
