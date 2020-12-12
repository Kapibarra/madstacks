import React, { Fragment } from "react";
import Button from "../UI/Buttons/Button";
import classes from "./Card.module.css";
import CardItem from "./Card/CardItem";

const Card = () => {
  return (
    <Fragment>
      <div className={classes.CardWrapper}>
        <CardItem title="Услуга" price="от 5000 рублей" content="text text text text text text text text text text text text" />
        <CardItem title="Услуга" price="от 5000 рублей" content="text text text text text text text text text text text text" />
        </div>
        <div className={classes.CardWrapper}>
        <CardItem title="Услуга" price="от 5000 рублей" content="text text text text text text text text text text text text" />
        <CardItem title="Услуга" price="от 5000 рублей" content="text text text text text text text text text text text text" />
        </div>
      <div className={classes.Wrapper}>
        <Button name="Заказать" link="/" />
      </div>
    </Fragment>
  );
};

export default Card;
