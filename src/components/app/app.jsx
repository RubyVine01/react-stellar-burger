import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { orderData, burgerFilling } from "../../utils/data.js"; //тестовые данные
import { fetchIngredients } from "../../services/middleware/ingredients-data-thunk";
import { useDispatch, useSelector } from "react-redux";
 import { store } from "../../services/store";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";

function App() {


  // const ingredients = useSelector(getIngredients);
  //  console.log(ingredients)

  //const [ingredients, setIngredients] = useState([]);
  const [orderModal, setOrderModal] = useState(false);
  const [ingredientModal, setIngredientModal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())

  }, []);

  function closeModal() {
    setOrderModal(false);
    setIngredientModal(null);
  }

  function openOrderModal() {
    setOrderModal(true);
  }

  function openIngredientModal(ingredient) {
    setIngredientModal(ingredient);
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients
          // ingredients={ingredients}
          onClick={openIngredientModal}
        />
        <BurgerConstructor
          onClick={openOrderModal}
          burgerFilling={burgerFilling}
        />
      </main>
      {ingredientModal && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={ingredientModal} />
        </Modal>
      )}
      {orderModal && (
        <Modal onClose={closeModal}>
          <OrderDetails order={orderData} />
        </Modal>
      )}
    </div>
  );
}

export default App;
