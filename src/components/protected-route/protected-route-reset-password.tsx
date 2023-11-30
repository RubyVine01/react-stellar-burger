import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getResetPasswordAllowed } from "../../services/selectors/reset-password-selector";
import { ReactElement } from "react";

type TComponent = {
  component: ReactElement;
};

const ResetPasswordProtectedRoute = ({ component }: TComponent) => {
  const resetPasswordAllowed = useSelector<boolean>(getResetPasswordAllowed);

  if (!resetPasswordAllowed) {
    // Пользователь не прошел через процесс восстановления пароля
    return <Navigate to="/forgot-password" />;
  }

  return component;
};

export default ResetPasswordProtectedRoute;
