import React from "react"
import classes from "./Portfolio.module.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const Slider = () => {
    return (
    <AwesomeSlider >
    <div className={classes.Slide}>1</div>
    <div className={classes.Slide}>2</div>
    <div className={classes.Slide}>3</div>
    <div className={classes.Slide}>4</div>
  </AwesomeSlider>
    )
}

export default Slider