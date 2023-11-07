import styles from "./app.module.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import LoginPage from "../../pages/login-page/login-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import NewPasswordPage from "../../pages/new-password-page/new-password-page";
import UserProfilPage from "../../pages/user-profil-page/user-profil-page";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {/* <UserProfilPage/> */}
      <LoginPage />
      <ForgotPasswordPage />

      <RegistrationPage />
      <NewPasswordPage />
      {/* <main className={styles.content}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main> */}
    </div>
  );
}

export default App;
