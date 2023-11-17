import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password-page.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const onChangePassword = (e) => {
    setPassword( e.target.value);
  };

  const onChangeCode = (e) => {
    setCode( e.target.value);
  };

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          value={password}
          onChange={onChangePassword}
        />
        <Input type={"text"} placeholder={"Введите код из письма"} value={code}
        onChange={onChangeCode}/>
        <Button htmlType="button" type="primary" size="medium" >
          Сохранить
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

export default ResetPasswordPage;
