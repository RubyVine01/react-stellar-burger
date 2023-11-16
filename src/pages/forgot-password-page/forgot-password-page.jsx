import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password-page.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChangeEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailRegex.test(emailValue));
  };

  const resetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          name={"email"}
          placeholder={"Укажите e-mail"}
          value={email}
          onChange={onChangeEmail}
          errorText={"Email должен быть в формате user@domain.com."}
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={resetPassword}
          disabled={!isEmailValid}
        >
          Восстановить
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?{" "}
        <Link to="/login" className={`text_color_accent ${styles.link}`}>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default ForgotPasswordPage;
