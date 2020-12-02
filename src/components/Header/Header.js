import React, { Fragment } from "react";
import MenuToggle from "../UI/MenuToggle";
import classes from "./Header.module.css";
import logo from "../../svg/orig.svg"
import Button from "../UI/Buttons/Button";


const Header = () => {
  return (
    <Fragment>
    <div className={classes.Header}>
    <img src={logo} alt="My logo" className={classes.Logo}></img>
    </div>
    <MenuToggle />
    </Fragment>
  );
};

export default Header;
