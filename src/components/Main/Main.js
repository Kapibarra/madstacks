import React from "react";
import Button from "../UI/Buttons/Button";
import classes from "./Main.module.css";
import logo from "../../svg/main.png"

const Main = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.articleBlock}>
        <h3 className={classes.titleText}>MADSTACK</h3>
        <h1 className={classes.titleSubText}>ПОЧЕМУ ИМЕННО МЫ?</h1>
        <span className={classes.article}>
          Бла бла бла бла бла Бла бла бла бла бла Бла бла бла бла бла
          Бла бла бла бла бла Бла бла бла бла бла Бла бла бла бла бла
          Бла бла бла бла бла Бла бла бла бла бла Бла бла бла бла бла
          Бла бла бла бла бла Бла бла бла бла бла Бла бла бла бла бла
        </span>
        <Button name="Заказать" link="/1234" />
      </div>
      <div className={classes.Logo}>
        <img src={logo} alt="My logo" className={classes.Logo}></img>
      </div>
    </div>
  );
};

export default Main;
