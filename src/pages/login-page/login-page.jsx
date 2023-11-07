import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useRef, useState } from "react";

function LoginPage() {

  return (
    <main className={styles.content}>
      <form className={styles.login_form}>
        <h1 className={`text text_type_main-medium`}>Вход</h1>
        <Input type={'email'} placeholder={'E-mail'}/>
        <Input type={'password'} placeholder={'Пароль'} icon={'ShowIcon'}/>
        <Button htmlType="button" type="primary" size="medium" >
          Войти
        </Button>
      </form>
      <p  className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вы — новый пользователь? <a href="#" className="text_color_accent">Зарегистрироваться</a>
      </p>
      <p className={`pt-4 text text_type_main-default text_color_inactive`}>
        Забыли пароль? <a href="#" className="text_color_accent">Восстановить пароль</a>
      </p>
    </main>
  );
}

export default LoginPage;
