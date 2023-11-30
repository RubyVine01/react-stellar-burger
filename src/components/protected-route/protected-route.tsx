import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { setAuthChecked } from "../../services/slices/user-slice";
import { checkUserAuth } from "../../services/thunks/user-thunk";
import {
  getIsAuthChecked,
  getUser,
} from "../../services/selectors/user-selector";
import { TUser } from "../../utils/types";

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  component: ReactElement;
};

const ProtectedRoute = ({
  onlyUnAuth = false,
  component,
}: TProtectedRouteProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector<boolean>(getIsAuthChecked);
  const user = useSelector(getUser) as TUser;
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

  // !onlyUnAuth && user
  return component;
};

export const OnlyAuth = ({ component }: { component: ReactElement }) => (
  <ProtectedRoute onlyUnAuth={false} component={component} />
);
export const OnlyUnAuth = ({ component }: { component: ReactElement }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
