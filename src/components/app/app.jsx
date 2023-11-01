import React, { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { fetchIngredients } from "../../services/middleware/ingredients-data-thunk";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;

// import Modal from "../modal/modal.jsx";
// import OrderDetails from "../order-details/order-details.jsx";
// import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
// const [orderModal, setOrderModal] = useState(false);
// const [ingredientModal, setIngredientModal] = useState(null);

// function closeModal() {
//   setOrderModal(false);
//   setIngredientModal(null);
// }

// function openOrderModal() {
//   setOrderModal(true);
// }

// function openIngredientModal(ingredient) {
//   setIngredientModal(ingredient);
// }

// {/* {ingredientModal && (
//       <Modal onClose={closeModal} title="Детали ингредиента">
//         <IngredientDetails ingredient={ingredientModal} />
//       </Modal>
//     )}
//     {orderModal && (
//       <Modal onClose={closeModal}>
//         <OrderDetails order={orderData} />
//       </Modal>
//     )} */}
