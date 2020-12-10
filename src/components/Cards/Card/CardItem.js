import React from "react";
import classes from "./CardItem.module.css";


const CardItem = (props) => {
    return (
<div className={classes.Card}>
          <h2 className={classes.CardTitle}>{props.title}</h2>
          <h1 className={classes.CardSubTitle}>{props.price} </h1>
          <span className={classes.CardText}>
            {props.content}
          </span>
        </div>
    )
}
export default CardItem