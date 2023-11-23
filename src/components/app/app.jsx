import styles from "./app.module.css";

import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// ProtectedRoute
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import ResetPasswordProtectedRoute from "../protected-route/protected-route-reset-password";

// components
import AppHeader from "../app-header/app-header.jsx";
import Modal from "../modal/modal";

// pages
import Main from "../../pages/main/main";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrdersPage from "../../pages/orders-page/orders-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import LoginPage from "../../pages/login-page/login-page";
import UserProfilePage from "../../pages/user-profile-page/user-profile-page";
import UserProfile from "../../pages/user-profile-page/profile-page/profile-page";
import OrderHistory from "../../pages/user-profile-page/order-history-page/order-history-page";

// services
import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import { closeModal } from "../../services/slices/modal-slice";
import { deleteIngredientDetails } from "../../services/slices/ingredient-details-slice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const onCloseIngredientModal = () => {
    dispatch(closeModal());
    dispatch(deleteIngredientDetails());
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes  location={background || location}>
        <Route index element={<Main />} />
        <Route
          path="/profile"
          element={<OnlyAuth component={<UserProfilePage />} />}
        >
          <Route index element={<UserProfile />} />
          <Route path="order-history" element={<OrderHistory />} />
        </Route>
        <Route path="/orders" element={<OrdersPage />} />
        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<RegistrationPage />} />}
        />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path="/reset-password"
          element={
            <ResetPasswordProtectedRoute component={<ResetPasswordPage />} />
          }
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                onClose={onCloseIngredientModal}
                title="Детали ингредиента"
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
