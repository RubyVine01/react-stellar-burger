import {
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profil-page.module.css";
import { useState } from "react";

function UserProfilPage() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("8923u198");
  const [name, setName] = useState("Valeriia");

  return (
    <main className={styles.content}>
      <div className={styles.navigation_part}>
        <nav className={styles.nav}>
          <a
            href="profile"
            className={`text text_type_main-medium text_color_primary ${styles.link}`}
          >
            Профиль
          </a>
          <a
            href="order-history"
            className={`text text_type_main-medium text_color_inactive ${styles.link}`}
          >
            История заказов
          </a>
          <a
            href="logout"
            className={`text text_type_main-medium text_color_inactive ${styles.link}`}
          >
            Выход
          </a>
        </nav>
        <p className={`text text_type_main-default text_color_inactive ${styles.description}`}>
          В этом разделе вы можете<br/> изменить свои персональные данные
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
      </form>
    </main>
  );
}

export default UserProfilPage;
