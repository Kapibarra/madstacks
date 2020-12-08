import React from "react"
import classes from "./Button.module.css"


const Button = (props) => {
return (
<a className={classes.glitchBtn} href="{props.link}" >
  <div className={classes.text}>{props.name}</div>
  <div className={classes.mask}><span>{props.name}</span></div>
 </a>
)
}

export default Button