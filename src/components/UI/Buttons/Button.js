import React from "react"
import classes from "./Button.module.css"


const Button = (props) => {
return (
<span className={classes.glitchBtn} href=" " type={props.type}>
  <div className={classes.text}>{props.name}</div>
  <div className={classes.mask}><span>{props.name}</span></div>
 </span>
)
}

export default Button