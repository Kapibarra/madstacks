import React from "react";
import Button from "../UI/Buttons/Button";
import classes from "./Service.module.css";
import serviceImg from '../../svg/Service.png'
import listStyleImg from '../../svg/listyleimg.png'

const Service = () => {
  return (
    <div className={classes.ServiceWrapper}>
      <div className={classes.ServiceText}>
        <h1 className={classes.ServiceTitle}>Разработка сайтов любой сложности под ключ</h1>
        <ul>
          <li className={classes.ServiceText}> Лендинг от </li>
          <li className={classes.ServiceText}> Сайт-визитка от </li>
          <li className={classes.ServiceText}> Сайт-каталог от </li>
          <li className={classes.ServiceText}> Интернет магазин от </li>
        </ul>
        <Button name="Заказать" link="/" />
      </div>
      <div className={classes.ServiceImage}>
      <img src={serviceImg} alt="" className={classes.ServiceImage}/>
      </div>
    </div>
  );
};

export default Service;
