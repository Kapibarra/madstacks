import React from 'react'
import classes from './Form.module.css'

const Form = () => {
    return (
        <div className={classes.FormContainer}>
        <div className={classes.FormTitle} id="signup">
          <a className={classes.FormTitleText} > Оставить заявку на звонок</a>
        </div>
        <div className={classes.FormSubtitle}>
          <span className={classes.FormSubtitle}> <i>Заполните форму и Мы свяжемся с Вами. </i></span>
        </div>
        <div className={classes.FormMain}>
          <form action="formspee" method="POST">
            <legend className={classes.FormTitleMini}>Связаться с нами.</legend>
            <div className={classes.FormGroup}>
              <label for="user_name" >Введите ваше имя</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id=""
                placeholder="Ваше имя"
                required
              />
            </div>
            <div className={classes.FormGroup}>
              <label for="user_phone">Введите ваш телефон</label>
              <input
                name="phone"
                type="text"
                class="form-control"
                id=""
                placeholder="+7 999 999 99 99"
                required
              />
            </div>
            <div className={classes.FormGroup}>
              <label for="user_email">Введите ваше @email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                id=""
                placeholder="Ваш @email"
                required
              />
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form