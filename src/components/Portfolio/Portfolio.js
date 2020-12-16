import React from "react"
import classes from "./Portfolio.module.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image1 from "../../svg/1.jpeg"
import Image2 from "../../svg/2.jpeg"
import Image3 from "../../svg/3.jpeg"
import Image4 from "../../svg/4.jpeg"
import Image5 from "../../svg/5.jpeg"



const Slider = () => {
    return (
    <AwesomeSlider >
    <div className={classes.Slide}><img src={Image1} alt="$"/>
    <span className={classes.SlideText}> text text tex tex textextextext</span>
    </div>
    
    <div className={classes.Slide}><img src={Image2} alt="$"/></div>
    <div className={classes.Slide}><img src={Image3} alt="$"/></div>
    <div className={classes.Slide}><img src={Image4} alt="$"/></div>
    <div className={classes.Slide}><img src={Image5} alt="$"/></div>
  </AwesomeSlider>
    )
}

export default Slider