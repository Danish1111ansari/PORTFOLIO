import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Danish Ansari. I am a Full-Stack Developer and
          Programmer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Danish1111ansari" target="black">
          <BsGithub />
        </a>
        <a href="0402danishansari.com" target="black">
          <IoIosMail/>
        </a>
        <a
          href="https://www.linkedin.com/in/mohd-danish-ansari-50496622a/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
