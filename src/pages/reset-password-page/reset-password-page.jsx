import styles from "./reset-password-page.module.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { fetchСonfirmNewPassword } from "../../services/thunks/reset-password-thunk";
import {
  getStatusRes,
  getError,
  getIsLoading,
} from "../../services/selectors/reset-password-selector";
import { setResetPasswordAllowed } from "../../services/slices/reset-password-slice";
import { validatePassword } from "../../utils/validate";
import { useForm } from "../../hooks/useForm";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resStatus = useSelector(getStatusRes);
  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const { values, handleChange } = useForm({ password: "", token: "" });

  // проверка валидности вводимых данных
  const isPasswordValid = validatePassword(values.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.token && isPasswordValid) {
      dispatch(
        fetchСonfirmNewPassword({
          password: values.password,
          token: values.token,
        })
      );
    }
  };

  useEffect(() => {
    if (resStatus && !isError) {
      dispatch(setResetPasswordAllowed(false));
      navigate("/login");
    }
  }, [resStatus, isError, navigate, dispatch]);

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          value={values.password}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          value={values.token}
          name={"token"}
          onChange={handleChange}
        />
        {isError && (
          <p
            className={` text text_type_main-small text_color_error ${styles.fetch_error}`}
          >
            При обработке запроса произошла ошибка.
            <br /> Пожалуйста, попробуйте еще раз.
          </p>
        )}
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!isPasswordValid || !values.token}
        >
          {!isLoading ? "Сохранить" : "Сохранение..."}
        </Button>
      </form>
      <p className={`pt-20 text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?{" "}
        <Link to="/login" className={`text_color_accent ${styles.link}`}>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default ResetPasswordPage;
