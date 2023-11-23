import styles from "./registration-page.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { fetchRegister } from "../../services/thunks/user-thunk";
import {
  getErrorMessageRegister,
  getErrorRegister,
  getIsLoadingRegister,
} from "../../services/selectors/user-selector";

function RegistrationPage() {
  const isLoading = useSelector(getIsLoadingRegister);
  const isError = useSelector(getErrorRegister);
  const errorMessage = useSelector(getErrorMessageRegister);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRegister({ email, password, name }));
  };

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Регистрация</h1>
        <Input
          value={name}
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
        />
        <EmailInput
          name={"email"}
          placeholder={"E-mail"}
          value={email}
          onChange={onChangeEmail}
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={password}
          onChange={onChangePassword}
        />
        {isError && (
          <p
            className={` text text_type_main-small text_color_error ${styles.fetch_error}`}
          >
            При обработке запроса произошла ошибка:
            <br />
            {`"${errorMessage}"`}
            <br />
            Пожалуйста, попробуйте еще раз.
          </p>
        )}
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!email || !password || !name}
        >
          {!isLoading ? "Зарегистрироваться" : "Регистрация..."}
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы?{" "}
        <Link to="/login" className={`text_color_accent ${styles.link}`}>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default RegistrationPage;
