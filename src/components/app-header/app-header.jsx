import React, { useState } from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import NavLink from "../nav-link/nav-link.jsx";

function AppHeader() {
  const [typeIcon, setTypeIcon] = React.useState("/order");

  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className="pr-2">
            <NavLink
              icon={
                <BurgerIcon type={typeIcon === "/" ? "primary" : "secondary"} />
              }
              btnName="Конструктор"
              navLink="/"
              isActiveText = {typeIcon === "/" ? styles.name_active : styles.name_default}
            />
          </li>
          <li className="pr-25">
            <NavLink
              icon={
                <ListIcon type={typeIcon === "/order" ? "primary" : "secondary"} />
              }
              btnName="Лента заказов"
              navLink="/orders"
              isActiveText = {typeIcon === "/orders" ? styles.name_active : styles.name_default}
            />
          </li>
          <li className={styles.logo_container}>
            <Logo />
          </li>
          <li className={styles.profil_position}>
            <NavLink
              icon={
                <ProfileIcon
                  type={typeIcon === "/profile" ? "primary" : "secondary"}
                />
              }
              btnName="Личный кабинет"
              navLink="/profile"
              isActiveText = {typeIcon === "/profile" ? styles.name_active : styles.name_default}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
