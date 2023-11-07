import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useState } from "react";

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
        <a href="#" className="text_color_accent">
          Зарегистрироваться
        </a>
      </p>
      <p className={`pt-4 text text_type_main-default text_color_inactive`}>
        Забыли пароль?{" "}
        <a href="#" className="text_color_accent">
          Восстановить пароль
        </a>
      </p>
    </main>
  );
}

export default LoginPage;
