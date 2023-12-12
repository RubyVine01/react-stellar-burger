import styles from "./user-profile-page.module.css";
import { FC, MouseEventHandler } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fetchLogout } from "../../services/thunks/user-thunk";
import { useAppDispatch } from "../../hooks/hooks";

const UserProfilePage: FC = () => {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text_color_primary  text text_type_main-medium mt-8 " +
        " " +
        styles.link
      : "text_color_inactive text text_type_main-medium mt-8" +
        " " +
        styles.link;

  const dispatch = useAppDispatch();

  const logout: MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(fetchLogout());
  };

  return (
    <main className={styles.content}>
      <div className={`${styles.navigation_part} ml-5`}>
        <nav className={styles.nav}>
          <NavLink to="/profile" className={linkClassName} end>
            Профиль
          </NavLink>
          <NavLink to="orders-history" className={linkClassName}>
            История заказов
          </NavLink>
          <NavLink to="/" className={linkClassName} onClick={logout}>
            Выход
          </NavLink>
        </nav>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.description}`}
        >
          В этом разделе вы можете
          <br /> изменить свои персональные данные
        </p>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default UserProfilePage;
