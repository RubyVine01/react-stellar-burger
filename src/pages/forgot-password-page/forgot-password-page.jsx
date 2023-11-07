import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password-page.module.css";
import { useState } from "react";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          name={"email"}
          placeholder={"Укажите e-mail"}
          value={email}
        />
        <Button htmlType="button" type="primary" size="medium">
          Восстановить
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

export default ForgotPasswordPage;
