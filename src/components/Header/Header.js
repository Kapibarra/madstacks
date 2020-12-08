import React, { Fragment } from "react";
import MenuToggle from "../UI/MenuToggle";
import classes from "./Header.module.css";
import logo from "../../svg/logo.svg"


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
