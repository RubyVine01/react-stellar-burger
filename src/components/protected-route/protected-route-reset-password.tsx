import { Navigate } from "react-router-dom";
import { getResetPasswordAllowed } from "../../services/selectors/reset-password-selector";
import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/hooks";

type TComponent = {
  component: ReactElement;
};

const ResetPasswordProtectedRoute = ({ component }: TComponent) => {
  const resetPasswordAllowed = useAppSelector(getResetPasswordAllowed);

  if (!resetPasswordAllowed) {
    // Пользователь не прошел через процесс восстановления пароля
    return <Navigate to="/forgot-password" />;
  }

  return component;
};

export default ResetPasswordProtectedRoute;
