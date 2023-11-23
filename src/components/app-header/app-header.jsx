import styles from "./app-header.module.css";

import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { getUser } from "../../services/selectors/user-selector";

function AppHeader() {
  const { pathname } = useLocation();
  const user = useSelector(getUser);
  const currentLink = user ? "/profile" : "/login";

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

        <NavLink className={linkClassName} to="/orders">
          <ListIcon type={pathname === "/orders" ? "primary" : "secondary"} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Лента заказов
          </p>
        </NavLink>

        <div className={`${styles.logo_container} pl-3`}>
          <Logo />
        </div>

        <NavLink className={linkClassName} to={currentLink}>
          <ProfileIcon
            type={pathname.startsWith(currentLink) ? "primary" : "secondary"}
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
