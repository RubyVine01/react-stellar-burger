import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { urlIngredientsData } from "../../utils/const.js";
import { request } from "../../utils/api.js";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [element, setElement] = useState();
  const [openOrderModal, setOrderOpenModal] = useState();
  const [openIngredientsModal, setOpenIngredientModal] = useState();

  useEffect(() => {
    request(urlIngredientsData)
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleElementModal = (event, element) => {
    setOpenIngredientModal(!openIngredientsModal);
    setElement(element);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients
          ingredients={ingredients}
          onClick={handleElementModal}
        />
        <BurgerConstructor />
      </main>
      {!!openIngredientsModal && (
        <Modal
          onClose={() => setOpenIngredientModal(false)}
          title="Детали ингредиента"
        >
          <IngredientDetails ingredient={element} />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={() => setOrderOpenModal(false)}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
