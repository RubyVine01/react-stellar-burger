import styles from "./profile-page.module.css";

import { FC, FormEvent, useEffect, useRef, useState } from "react";

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  getErrorUpdateUser,
  getIsLoadingUpdateUser,
  getUser,
} from "../../../services/selectors/user-selector";
import { fetchUpdateUser } from "../../../services/thunks/user-thunk";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const UserProfile: FC = () => {
  const dispatch = useAppDispatch();

  const isError = useAppSelector(getErrorUpdateUser);
  const isLoading = useAppSelector(getIsLoadingUpdateUser);
  const user = useAppSelector(getUser);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  // Логика отображения Input в неактивном состоянии
  const [fieldDisabled, setDisabled] = useState(true);

  const onBlur = () => {
    setDisabled(true);
  };

  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => nameInputRef.current?.focus(), 0);
  };
  //

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(fetchUpdateUser({ name: values.name, email: values.email }));
  };

  const handleCancel = () => {
    if (user) {
      setValues({ ...values, name: user.name, email: user.email });
    }
  };

  useEffect(() => {
    if (user) {
      setValues({ ...values, name: user.name, email: user.email });
    }
  }, [user]); //  All dependencies declared

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        name={"name"}
        ref={nameInputRef}
        type={"text"}
        placeholder={"Имя"}
        value={values.name}
        icon="EditIcon"
        onChange={handleChange}
        size="default"
        disabled={fieldDisabled}
        onBlur={onBlur}
        onIconClick={onIconClick}
      />
      <EmailInput
        isIcon={true}
        name={"email"}
        placeholder={"E-mail"}
        value={values.email}
        onChange={handleChange}
        size="default"
      />
      <PasswordInput
        name={"password"}
        placeholder={"Пароль"}
        value={values.password}
        icon="EditIcon"
        onChange={handleChange}
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

      {values.email !== user?.email || values.name !== user?.name ? (
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
};

export default UserProfile;
