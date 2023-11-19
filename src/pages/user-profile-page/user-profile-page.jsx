import styles from "./user-profile-page.module.css";
import { NavLink, Outlet } from "react-router-dom";

function UserProfilePage() {
  const linkClassName = ({ isActive }) =>
    isActive
      ? "text_color_primary  text text_type_main-medium mt-8 " +
        " " +
        styles.link
      : "text_color_inactive text text_type_main-medium mt-8" +
        " " +
        styles.link;

  return (
    <main className={styles.content}>
      <div className={`${styles.navigation_part} ml-5`}>
        <nav className={styles.nav}>
          <NavLink to="/profile" className={linkClassName} end>
            Профиль
          </NavLink>
          <NavLink to="order-history" className={linkClassName}>
            История заказов
          </NavLink>
          <NavLink to="/" className={linkClassName}>
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
}

export default UserProfilePage;
