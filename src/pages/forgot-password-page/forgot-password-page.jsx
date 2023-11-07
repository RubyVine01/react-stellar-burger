import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password-page.module.css";

function ForgotPasswordPage() {
  return (
    <main className={styles.content}>
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <Input type={"email"} placeholder={"Укажите e-mail"} />
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
