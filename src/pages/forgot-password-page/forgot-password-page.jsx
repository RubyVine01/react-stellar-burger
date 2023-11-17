import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password-page.module.css";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchResetCode } from "../../services/thunks/forgot-password-thunk";
import { getStatusSentCode } from "../../services/selectors/forgot-password-selector";

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const resStatus = useSelector(getStatusSentCode);

  console.log(resStatus);

  console.log(email);
  console.log(resStatus);
  const onChangeEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailRegex.test(emailValue));
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      dispatch(fetchResetCode(email));
      setEmail("");
    },
    [dispatch]
  );

  return (
    <main className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          name={"email"}
          placeholder={"Укажите e-mail"}
          value={email}
          onChange={onChangeEmail}
          errorText={"Email должен быть в формате user@domain.com."}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!isEmailValid}
        >
          Восстановить
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
