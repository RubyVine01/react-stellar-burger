import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";

function AppHeader() {
  const { pathname } = useLocation();
  const linkClassName = ({ isActive }) =>
    isActive
      ? `text_color_primary  pt-4 pb-4 pr-5 pl-5 ${styles.nav_link}`
      : `text_color_inactive  pt-4 pb-4 pr-5 pl-5  ${styles.nav_link}`;


  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <NavLink className={linkClassName} to="/">
          <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Конструктор
          </p>
        </NavLink>

        <NavLink
          className={linkClassName} 
          to="/orders"
        >
          <ListIcon type={pathname === "/orders" ? "primary" : "secondary"} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Лента заказов
          </p>
        </NavLink>

        <div className={`${styles.logo_container} pl-3`}>
          <Logo />
        </div>

        <NavLink
          className={linkClassName} 
          to="/profile"
        >
          <ProfileIcon
            type={pathname.startsWith("/profile")  ? "primary" : "secondary"}
          />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Личный кабинет
          </p>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
