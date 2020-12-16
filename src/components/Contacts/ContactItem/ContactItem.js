import React from "react";
import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  return (
    <div className={classes.ContactItem}>
      <div className={classes.ContactName}>
        <img className={classes.ContactImage} src={props.img} alt="#"></img>
        <div className={classes.ContactText}>{props.name}</div>
      </div>
    </div>
  );
};

export default ContactItem;
