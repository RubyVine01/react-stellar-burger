import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Вход</h1>
        <EmailInput name={"email"} placeholder={"E-mail"} value={email} />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={password}
        />
        <Button htmlType="button" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вы — новый пользователь?{" "}
        <Link to="/register" className={`text_color_accent ${styles.link}`}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={`pt-4 text text_type_main-default text_color_inactive`}>
        Забыли пароль?{" "}
        <Link
          to="/forgot-password"
          className={`text_color_accent ${styles.link}`}
        >
          Восстановить пароль
        </Link>
      </p>
    </main>
  );
}

export default LoginPage;
