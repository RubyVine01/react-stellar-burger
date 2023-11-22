import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { setAuthChecked } from "../../services/slices/user-slice";
import { checkUserAuth } from "../../services/thunks/user-thunk";
import { getIsAuthChecked, getUser } from "../../services/selectors/user-selector";
import { getResetPasswordAllowed } from "../../services/selectors/reset-password-selector";


const ProtectedRoute = ({ onlyUnAuth = false, allowResetPassword = false,  component }) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector(getIsAuthChecked);
  const user = useSelector(getUser);
  const resetPasswordAllowed = useSelector(getResetPasswordAllowed);
  const location = useLocation();

  if (!isAuthChecked) {
    // Запрос еще выполняется
    return null; // или прелоадер
  }

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (allowResetPassword && !resetPasswordAllowed) {
    return <Navigate to="/forgot-password" />;
  }

  // !onlyUnAuth && user
  return component;
};

export const OnlyAuth = (props) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth={true} {...props} />;

export const ResetPasswordRoute = (props) => <ProtectedRoute allowResetPassword={true} {...props} />;
