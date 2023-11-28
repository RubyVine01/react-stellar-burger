
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getResetPasswordAllowed } from "../../services/selectors/reset-password-selector";

const ResetPasswordProtectedRoute = ({ component }) => {
  const resetPasswordAllowed = useSelector(getResetPasswordAllowed);

  if (!resetPasswordAllowed) {
    // Пользователь не прошел через процесс восстановления пароля
    return <Navigate to="/forgot-password" />;
  }

  return component;
};

export default ResetPasswordProtectedRoute;