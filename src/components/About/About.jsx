import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import Danish from "../../Images/Danish.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          This is Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus harum consectetur minus facilis asperiores ea rem
          nobis sunt porro natus.
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={Danish} alt="Danish" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Mohd Danish Ansari
          </Typography>
          <Typography>Full Stack Developer and Coder</Typography>
        </div>
      </div>
    </div>
  );
}

export default About
