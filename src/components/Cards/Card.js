import React from "react";
import Button from "../UI/Buttons/Button";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <React.Fragment>
      <div className={classes.CardWrapper}>
        <div className={classes.Card}>
          <h2 className={classes.CardTitle}>Услуга</h2>
          <h1 className={classes.CardSubTitle}>от 5000RUB </h1>
          <span className={classes.CardText}>
            text text text text text text text text text text text text text
            text text text text text
          </span>
        </div>
        <div className={classes.Card}>
          <h2 className={classes.CardTitle}>Услуга</h2>
          <h1 className={classes.CardSubTitle}>от 5000RUB </h1>
          <span className={classes.CardText}>
            text text text text text text text text text text text text text
            text text text text text
          </span>
        </div>
      </div>
      <div className={classes.CardWrapper}>
        <div className={classes.Card}>
          <h2 className={classes.CardTitle}>Услуга</h2>
          <h1 className={classes.CardSubTitle}>от 5000RUB </h1>
          <span className={classes.CardText}>
            text text text text text text text text text text text text text
            text text text text text
          </span>
        </div>
        <div className={classes.Card}>
          <h2 className={classes.CardTitle}>Услуга</h2>
          <h1 className={classes.CardSubTitle}>от 5000RUB </h1>
          <span className={classes.CardText}>
            text text text text text text text text text text text text text
            text text text text text
          </span>
        </div>
      </div>
      <div className={classes.Wrapper}>
      <Button name="Заказать" link="/"/>
      </div>
    </React.Fragment>
  );
};

export default Card;
