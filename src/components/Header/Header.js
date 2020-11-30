import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>Logo</div>
      <div className={classes.Navigation}>
        <a href="/" className={classes.NavLink}>1</a>
        <a href="/" className={classes.NavLink}>1</a>
        <a href="/" className={classes.NavLink}>1</a>
        <a href="/" className={classes.NavLink}>1</a>
      </div>
      <div className={classes.Contacts}>
         <div>34523452345</div>
          <div>4526234563</div>
          <div>45634563456</div>
      </div>
    </div>
  );
};

export default Header;
