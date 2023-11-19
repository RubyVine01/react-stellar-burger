import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-page.module.css";
import { useState } from "react";

function UserProfile() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("8923u198");
  const [name, setName] = useState("Valeriia");

  return (
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
  );
}

export default UserProfile;
