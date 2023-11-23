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

function ResetPasswordPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const resStatus = useSelector(getStatusRes);
  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeToken = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchСonfirmNewPassword({ password, token }));
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
          value={password}
          onChange={onChangePassword}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          value={token}
          name={"token"}
          onChange={onChangeToken}
        />
        {isError && (
          <p
            className={` text text_type_main-small text_color_error ${styles.fetch_error}`}
          >
            При обработке запроса произошла ошибка.
            <br /> Пожалуйста, попробуйте еще раз.
          </p>
        )}
        <Button htmlType="submit" type="primary" size="medium">
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
