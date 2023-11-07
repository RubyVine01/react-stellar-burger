import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profil-page.module.css";

function UserProfilPage() {
  return (
    <main className={styles.content}>
      
      <form className={styles.form}>
        <h1 className={`text text_type_main-medium`}>Регистрация</h1>
        <Input type={"text"} placeholder={"Имя"} />
        <Input type={"email"} placeholder={"E-mail"} />
        <Input type={"password"} placeholder={"Пароль"} icon={"ShowIcon"} />
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы?{" "}
        <a href="#" className="text_color_accent">
          Войти
        </a>
      </p>
    </main>
  );
}

export default UserProfilPage;
