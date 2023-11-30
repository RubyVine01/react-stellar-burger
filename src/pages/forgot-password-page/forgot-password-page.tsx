import styles from "./forgot-password-page.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { FC, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchResetCode } from "../../services/thunks/forgot-password-thunk";
import {
  getError,
  getIsLoading,
  getStatusSentCode,
} from "../../services/selectors/forgot-password-selector";
import { setResetPasswordAllowed } from "../../services/slices/reset-password-slice";
import { useForm } from "../../hooks/useForm";
import { validateEmail } from "../../utils/validate";

const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resStatus = useSelector(getStatusSentCode);
  const isError = useSelector<boolean>(getError);
  const isLoading = useSelector<boolean>(getIsLoading);

  const { values, handleChange } = useForm({ email: "" });

  const isEmailValid = validateEmail(values.email );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid) {
      //@ts-ignore
      dispatch(fetchResetCode(values.email));
    }
  };

  useEffect(() => {
    if (resStatus && !isError) {
      dispatch(setResetPasswordAllowed(true));
      navigate("/reset-password");
    }
  }, [resStatus, isError, navigate, dispatch]);

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          name={"email"}
          placeholder={"Укажите e-mail"}
          value={values.email}
          onChange={handleChange}
          //@ts-ignore
          errorText={"Email должен быть в формате user@domain.com."}
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
          disabled={!isEmailValid}
        >
          {!isLoading ? "Восстановить" : "Отправка..."}
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

export default ForgotPasswordPage;
