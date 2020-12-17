import React from 'react'
import styles from './Form.mosule.css'

const Form = () => {
    return (
        <div className={FormContainer}>
        <div className={FormTitle} id="signup">
          <a className={FormTitleText} > Оставить заявку на прием</a>
        </div>
        <div className={FormSubtitle}>
          <span class="form-subtitle"> <i>Заполните форму и я пришлю Вам свободные даты и время для консультации </i></span>
        </div>
        <div class="form-main">
          <form action="formspee" method="POST">
            <legend class="form-title-mini">Связаться со мной.</legend>
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
              <label for="user_theme">Тема запроса</label>
            </div>
            <div class="form-group">
              <label for="user_text">Опишите вашу проблему</label>
              <textarea
                name="textarea"
                class="form-control"
                placeholder="Если вашей проблемы нет в списке - опишите ее тут."
              >
              </textarea>
            </div>
            <div id="container" class="form-btn">
              <button type="submit" class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Отправить</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form