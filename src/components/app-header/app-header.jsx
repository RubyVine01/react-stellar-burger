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
  const [currentLink, setCurrentLink] = useState("/");

  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className="pr-2">
            <NavLink
              icon={
                <BurgerIcon
                  type={currentLink === "/" ? "primary" : "secondary"}
                />
              }
              navLink="/"
              linkName="Конструктор"
            />
          </li>
          <li className="pr-25">
            <NavLink
              icon={
                <ListIcon
                  type={currentLink === "/order" ? "primary" : "secondary"}
                />
              }
              navLink="/orders"
              linkName="Лента заказов"
            />
          </li>
          <li className={`${styles.logo_container} pl-3`}>
            <Logo />
          </li>
          <li className={styles.profil_position}>
            <NavLink
              icon={
                <ProfileIcon
                  type={currentLink === "/profile" ? "primary" : "secondary"}
                />
              }
              navLink="/profile"
              linkName="Личный кабинет"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
