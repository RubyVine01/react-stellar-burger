import styles from "./app.module.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../app-header/app-header.jsx";
// import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
// import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import LoginPage from "../../pages/login-page/login-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import UserProfilPage from "../../pages/user-profil-page/user-profil-page";
import Main from "../main/main";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "../../pages/orders-page/orders-page";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/profile" element={<UserProfilPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
