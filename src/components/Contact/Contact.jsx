import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const contactFormHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lih1dbq",
        "template_o8n0lre",
        form.current,
        "KUIZLm6-1sZB0DzYv"
      )
      .then(
        (result) => {
          alert("message send.")
          setEmail('');
          setMessage('');
          setName('');
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form
          className="contactContainerForm"
          ref={form}
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Conatact Us</Typography>
          <input type="text" name="user_name" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" name="user_email" placeholder="Email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <textarea name="message" placeholder="Message" required value={message} onChange={(e)=>setMessage(e.target.value)}/>

          <Button variant="contained" type="submit">
            Send
          </Button>
          
        </form>
      </div>
    </div>
  );
}

export default Contact
