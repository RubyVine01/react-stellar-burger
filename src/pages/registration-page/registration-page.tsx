import styles from "./registration-page.module.css";

import { FC, FormEvent, useEffect } from "react";
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
import { useForm } from "../../hooks/useForm";
import { validateEmail, validatePassword } from "../../utils/validate";
import { clearErrorRegister } from "../../services/slices/user-slice";

const RegistrationPage: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<boolean>(getIsLoadingRegister);
  const isError = useSelector<boolean>(getErrorRegister);
  const errorMessage = useSelector<string>(getErrorMessageRegister);

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  // проверка валидности вводимых данных
  const isEmailValid = validateEmail(values.email);
  const isPasswordValid = validatePassword(values.password);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && values.name) {
      dispatch(
        //@ts-ignore
        fetchRegister({
          email: values.email,
          password: values.password,
          name: values.name,
        })
      );
    }
  };

  // обнуляет ошибку, при изменении Input
  useEffect(() => {
    if (isError) {
      dispatch(clearErrorRegister());
    }
  }, [values.email, values.password, values.name, isError, dispatch]);

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Регистрация</h1>
        <Input
          name={"name"}
          value={values.name}
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
        />
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
          disabled={!isEmailValid || !isPasswordValid || !values.name}
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
};

export default RegistrationPage;
