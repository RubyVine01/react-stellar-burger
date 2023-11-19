
import styles from "./user-profile-page.module.css";
import { NavLink, Outlet } from "react-router-dom";

function UserProfilePage() {

  return (
    <main className={styles.content}>
      <div className={styles.navigation_part}>
        <nav className={styles.nav}>
          <NavLink
            to="/profile"
            className={`text text_type_main-medium text_color_primary pt-8 ${styles.link}`}
          >
            Профиль
          </NavLink>
          <NavLink
            to="order-history"
            className={`text text_type_main-medium text_color_inactive pt-8 ${styles.link}`}
          >
            История заказов
          </NavLink>
          <NavLink
            to="/"
            className={`text text_type_main-medium text_color_inactive pt-8 ${styles.link}`}
          >
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
