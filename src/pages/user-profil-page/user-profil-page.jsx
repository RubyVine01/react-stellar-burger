import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profil-page.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function UserProfilPage() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("8923u198");
  const [name, setName] = useState("Valeriia");

  return (
    <main className={styles.content}>
      <div className={styles.navigation_part}>
        <nav className={styles.nav}>
          <NavLink
            to="profile"
            className={`text text_type_main-medium text_color_primary pt-8 ${styles.link}`}
          >
            Профиль
          </NavLink>
          <NavLink
            to="order-history"
            className={`text text_type_main-medium text_color_inactive pt-8 ${styles.link}`}
          >
            История заказов
          </NavLink>
          <NavLink
            to="logout"
            className={`text text_type_main-medium text_color_inactive pt-8 ${styles.link}`}
          >
            Выход
          </NavLink>
        </nav>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.description}`}
        >
          В этом разделе вы можете
          <br /> изменить свои персональные данные
        </p>
      </div>

      <form className={styles.form}>
        <Input type={"text"} placeholder={"Имя"} value={name} icon="EditIcon" />
        <EmailInput
          isIcon={true}
          name={"email"}
          placeholder={"E-mail"}
          value={email}
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={password}
          icon="EditIcon"
        />
        <div className={styles.btn_place}>
          <Button htmlType="button" type="secondary" size="medium">
            Отмена
          </Button>

          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </main>
  );
}

export default UserProfilPage;
