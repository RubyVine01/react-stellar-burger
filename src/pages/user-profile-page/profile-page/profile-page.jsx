import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-page.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getErrorUpdateUser,
  getIsLoadingUpdateUser,
  getUser,
} from "../../../services/selectors/user-selector";
import { fetchUpdateUser } from "../../../services/thunks/user-thunk";

function UserProfile() {
  const dispatch = useDispatch();

  const isError = useSelector(getErrorUpdateUser);
  const isLoading = useSelector(getIsLoadingUpdateUser);
  const user = useSelector(getUser);
  const nameInputRef = useRef();

  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(user.name || "");
  const [fieldDisabled, setDisabled] = useState(true);

  // Логика отображения Input в неактивном состоянии
  const onBlur = () => {
    setDisabled(true);
  };

  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => nameInputRef.current?.focus(), 0);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUpdateUser({ name, email }));
  };

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

      {isError && (
        <p
          className={` text text_type_main-small text_color_error ${styles.fetch_error}`}
        >
          При обработке запроса произошла ошибка.
          <br /> Пожалуйста, попробуйте еще раз.
        </p>
      )}

      {email !== user.email || name !== user.name ? (
        <div className={styles.btn_place}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={() => handleCancel()}
          >
            Отмена
          </Button>

          <Button htmlType="submit" type="primary" size="medium">
            {!isLoading ? "Сохранить" : "Сохранение..."}
          </Button>
        </div>
      ) : null}
    </form>
  );
}

export default UserProfile;
