import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useParams } from "react-router-dom";

function AppHeader() {


  const linkClassName = ({ isActive }) =>
    `${isActive ? styles.active : styles.default}`;

    const iconType = ({ isActive }) => (isActive ? "primary" : "secondary");
    
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            `mr-2 pt-4 pb-4 pr-5 pl-5 ${styles.nav_link} ${linkClassName({
              isActive,
            })}`
          }
          to="/"
        >
          <BurgerIcon type={iconType({ isActive })} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Конструктор
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `mr-2 pt-4 pb-4 pr-5 pl-5 ${styles.nav_link} ${linkClassName({
              isActive,
            })}`
          }
          to="/orders"
        >
          <ListIcon type={iconType({ isActive })} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Лента заказов
          </p>
        </NavLink>

        <div className={`${styles.logo_container} pl-3`}>
          <Logo />
        </div>

        <NavLink
          className={({ isActive }) =>
            `mr-2 pt-4 pb-4 pr-5 pl-5 ${styles.profil_position} ${styles.nav_link} ${linkClassName({
              isActive,
            })}`
          }
          to="/profile"
        >
          <ProfileIcon type={iconType({ isActive })} />
          <p className={`${styles.name} text text_type_main-default pl-2`}>
            Личный кабинет
          </p>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
