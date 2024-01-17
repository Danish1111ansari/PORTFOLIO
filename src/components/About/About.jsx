import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import Danish from "../../Images/Danish.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          I am currently a B-Tech student (2024 grad) pursuing Computer science
          and engineering at National Institute of Technology Patna. I am self
          motivated, hard working ,Team player, goal oriented and very keen and
          ambitious to learn new technologies and explore it. I am efficient in
          web developement and data structure and algorithm.
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
          <Typography
            variant="h6"
            style={{ margin: "0.2vmax 0", padding: "0 0", color: "black" }}
          >
            Full Stack Web Developer
          </Typography>
          <Typography
            variant="h6"
            style={{ margin: "0.2vmax 0", color: "black" }}
          >
            Competitive Programmer
          </Typography>
          <Typography
            variant="h6"
            style={{ margin: "0.2vmax 0", color: "black" }}
          >
            Freelancer
          </Typography>
          <Typography
            variant="h6"
            style={{ margin: "0.2vmax 0", color: "black" }}
          >
            Subject Matter Expert
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About
