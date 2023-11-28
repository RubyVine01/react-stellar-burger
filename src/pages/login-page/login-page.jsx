import styles from "./login-page.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchLogin } from "../../services/thunks/user-thunk";
import {
  getErrorLogin,
  getErrorMessageLogin,
  getIsLoadingLogin,
} from "../../services/selectors/user-selector";
import { useForm } from "../../hooks/useForm";
import { validateEmail } from "../../utils/validate-email";
import { clearErrorLogin } from "../../services/slices/user-slice";
import { useEffect } from "react";

function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingLogin);
  const isError = useSelector(getErrorLogin);
  const errorMessage = useSelector(getErrorMessageLogin);

  const { values, handleChange } = useForm({ email: "", password: "" });

  // проверка валидности вводимых данных
  const isEmailValid = validateEmail(values.email);
  const isPasswordValid = values.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      dispatch(fetchLogin({ email: values.email, password: values.password }));
    }
  };

  // обнуляет ошибку, при изменении Input
  useEffect(() => {
    if (isError) {
      dispatch(clearErrorLogin());
    }
  }, [values.email, values.password, dispatch]);

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Вход</h1>
        <EmailInput
          name={"email"}
          placeholder={"E-mail"}
          value={values.email}
          onChange={handleChange}
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={values.password}
          onChange={handleChange}
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
          disabled={!isEmailValid || !isPasswordValid}
        >
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
