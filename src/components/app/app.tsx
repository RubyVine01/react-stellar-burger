// Styles
import styles from "./app.module.css";

// Library
import React, { FC, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// ProtectedRoute
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import ResetPasswordProtectedRoute from "../protected-route/protected-route-reset-password";

// Components
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";

// Pages
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
import OrderPage from "../../pages/order-details-page/order-details-page";
import OrderDetails from "../order-details/order-details";

// Services
import { fetchIngredients } from "../../services/thunks/ingredients-data-thunk";
import { closeModal } from "../../services/slices/modal-slice";
import { deleteIngredientDetails } from "../../services/slices/ingredient-details-slice";
import { deleteOrder } from "../../services/slices/order-info-slice";

// Hooks
import { useAppDispatch } from "../../hooks/hooks";

const App: FC = () => {
  const dispatch = useAppDispatch();
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

  const onCloseOrderModal = () => {
    dispatch(closeModal());
    dispatch(deleteOrder());
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route index element={<Main />} />
        <Route
          path="/profile"
          element={<OnlyAuth component={<UserProfilePage />} />}
        >
          <Route index element={<UserProfile />} />
          <Route path="orders-history" element={<OrderHistory />} />
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
        <Route path="/orders/:number" element={<OrderPage />} />
        <Route
          path="/profile/orders-history/:number"
          element={<OnlyAuth component={<OrderPage />} />}
        />

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
          <Route
            path="/orders/:number"
            element={
              <Modal onClose={onCloseOrderModal}>
                <OrderDetails />
              </Modal>
            }
          />
          <Route
            path="/profile/orders-history/:number"
            element={
              <Modal onClose={onCloseOrderModal}>
                <OrderDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
