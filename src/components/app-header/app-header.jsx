import React, { useState } from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
function AppHeader() {
  const params = useParams();
  console.log(params);
  const [currentLink, setCurrentLink] = useState("/");

  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <div  className="mr-2" to="/">
          <BurgerIcon type={params === "/" ? "primary" : "secondary"} />
          <p
            className={`${styles.name} ${
              params === "/" ? styles.name_active : styles.name_default
            } text_type_main-default pl-2`}
          >
            "Конструктор"
          </p>
        </div>

        {/* <NavLink
          className="mr-25"
          icon={
            <ListIcon type={params === "/orders" ? "primary" : "secondary"} />
          }
          navLink="/orders"
          linkName="Лента заказов"
        />

        <div className={`${styles.logo_container} pl-3`}>
          <Logo />
        </div>

        <NavLink
          className={styles.profil_position}
          icon={
            <ProfileIcon
              type={params === "/profile" ? "primary" : "secondary"}
            />
          }
          navLink="/profile"
          linkName="Личный кабинет"
        /> */}
      </nav>
    </header>
  );
}

export default AppHeader;
