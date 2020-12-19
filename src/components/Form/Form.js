import React from 'react'
import Button from '../UI/Buttons/Button'
import classes from './Form.module.css'

const Form = () => {
    return (
        <div className={classes.FormContainer}>
        <div className={classes.FormTitle} id="signup">
          <span className={classes.FormTitleText} > Оставить заявку на звонок</span>
        </div>
        <div className={classes.FormSubtitle}>
          <span className={classes.FormSubtitle}> <i>Заполните форму и Мы свяжемся с Вами. </i></span>
        </div>
        <div className={classes.FormMain}>
          <form action="formspee" method="POST">
            <legend className={classes.FormTitleMini}>Связаться с нами.</legend>
            <div className={classes.FormGroup}>
              <label htmlFor="user_name" >Введите ваше имя</label>
              <input
                type="text"
                name="name"
                className={classes.FormControl}
                id=""
                placeholder="Ваше имя"
                required
              />
            </div>
            <div className={classes.FormGroup}>
              <label htmlFor="user_phone">Введите ваш телефон</label>
              <input
                name="phone"
                type="text"
                className={classes.FormControl}
                id=""
                placeholder="+7 999 999 99 99"
                required
              />
            </div>
            <div className={classes.FormGroup}>
              <label htmlFor="user_email">Введите ваше @email</label>
              <input
                type="text"
                name="email"
                className={classes.FormControl}
                id=""
                placeholder="Ваш @email"
                required
              />
            </div>
            <div className={classes.FormButton} >
            <Button name="Отправить" type="submit"/>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form