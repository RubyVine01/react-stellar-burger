import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration-page.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Регистрация</h1>
        <Input type={"text"} placeholder={"Имя"} />
        <EmailInput name={"email"} placeholder={"E-mail"} value={email} />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={password}
        />
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы?{" "}
        <Link to="/login" className={`text_color_accent ${styles.link}`}>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default RegistrationPage;
