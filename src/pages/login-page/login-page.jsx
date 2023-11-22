import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLogin } from "../../services/thunks/user-thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  getErrorLogin,
  getErrorMessageLogin,
  getIsLoadingLogin,
} from "../../services/selectors/user-selector";

function LoginPage() {
  const isLoading = useSelector(getIsLoadingLogin);
  const isError = useSelector(getErrorLogin);
  const errorMessage = useSelector(getErrorMessageLogin);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Вход</h1>
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
        <Button htmlType="submit" type="primary" size="medium">
          {!isLoading ? "Войти" : "Вход..."}
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вы — новый пользователь?{" "}
        <Link to="/register" className={`text_color_accent ${styles.link}`}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={`pt-4 text text_type_main-default text_color_inactive`}>
        Забыли пароль?{" "}
        <Link
          to="/forgot-password"
          className={`text_color_accent ${styles.link}`}
        >
          Восстановить пароль
        </Link>
      </p>
    </main>
  );
}

export default LoginPage;
