import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./new-password-page.module.css";
import { useState } from "react";

function NewPasswordPage() {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          value={password}
        />
        <Input type={"text"} placeholder={"Введите код из письма"} value={code}/>
        <Button htmlType="button" type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?{" "}
        <a href="#" className="text_color_accent">
          Войти
        </a>
      </p>
    </main>
  );
}

export default NewPasswordPage;
