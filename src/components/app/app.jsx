import styles from "./app.module.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header.jsx";

import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import LoginPage from "../../pages/login-page/login-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import Main from "../../pages/main/main";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "../../pages/orders-page/orders-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import UserProfilePage from "../../pages/user-profile-page/user-profile-page";
import UserProfile from "../../pages/user-profile-page/profile-page/profile-page";
import OrderHistory from "../../pages/user-profile-page/order-history-page/order-history-page";

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
        <Route path="/profile" element={<UserProfilePage />}>
          <Route index element={<UserProfile />} />
          <Route path="order-history" element={<OrderHistory />} />
        </Route>
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
