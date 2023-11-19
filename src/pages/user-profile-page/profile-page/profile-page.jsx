import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-page.module.css";
import { useRef, useState } from "react";

function UserProfile() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("8923u198");
  const [name, setName] = useState("Valeriia");
  const [fieldDisabled, setDisabled] = useState(true);
  const nameInputRef = useRef();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onBlur = () => {
    setDisabled(true);
  };

  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => nameInputRef.current?.focus(), 0);
  };

  return (
    <form className={styles.form}>
      <Input
        ref={nameInputRef}
        type={"text"}
        placeholder={"Имя"}
        value={name}
        icon="EditIcon"
        onChange={onChangeName}
        size="default"
        disabled={fieldDisabled}
        onBlur={onBlur}
        onIconClick={onIconClick}
      />
      <EmailInput
        isIcon={true}
        name={"email"}
        placeholder={"E-mail"}
        value={email}
        onChange={onChangeEmail}
        size="default"
      />
      <PasswordInput
        name={"password"}
        placeholder={"Пароль"}
        value={password}
        icon="EditIcon"
        onChange={onChangePassword}
        size="default"
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
