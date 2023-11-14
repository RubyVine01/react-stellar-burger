import styles from "./app.module.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header.jsx";


import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import LoginPage from "../../pages/login-page/login-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import UserProfilPage from "../../pages/user-profil-page/user-profil-page";
import Main from "../main/main";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "../../pages/orders-page/orders-page";
import NotFound from "../../pages/not-found-page/not-found-page";


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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
