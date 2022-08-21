import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:aditi.saha.ria@g.bracu.ac.bd">
        <Button>Contact: aditi.saha.ria@g.bracu.ac.bd</Button>
      </a>
    </div>
  );
};

export default Contact;
