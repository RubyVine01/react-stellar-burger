import React, { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

import { burgerFilling } from "../../utils/data.js"; //тестовые данные
import { fetchIngredients } from "../../services/middleware/ingredients-data-thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartList,
  getCartListBun,
} from "../../services/selectors/burger-constructor-selector";
import {
  addToCart,
  clearCart,
  deleteFromCart,
} from "../../services/reducers/burger-constructor-slice";

const ingr = {
  _id: "60666c42cc7b410027a1a9bb",
  name: "Хрустящие минеральные кольца",
  type: "main",
  proteins: 808,
  fat: 689,
  carbohydrates: 609,
  calories: 986,
  price: 300,
  image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  image_mobile:
    "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
  __v: 0,
};

const ingr2 = {
  _id: "2",
  name: "Хрустящие минеральные кольца",
  type: "main",
  proteins: 808,
  fat: 689,
  carbohydrates: 609,
  calories: 986,
  price: 300,
  image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  image_mobile:
    "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
  __v: 0,
};

const ingr3 = {
  _id: "3",
  name: "Хрустящие минеральные кольца",
  type: "bun",
  proteins: 808,
  fat: 689,
  carbohydrates: 609,
  calories: 986,
  price: 300,
  image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  image_mobile:
    "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
  __v: 0,
};

function App() {
  const dispatch = useDispatch();

  dispatch(addToCart(ingr));
  dispatch(addToCart(ingr));
  dispatch(addToCart(ingr2));
  dispatch(addToCart(ingr3));
  // dispatch(deleteFromCart(ingr3));
  
  const cart1 = useSelector(getCartList);
  // const cart1= useSelector(getCartListBun);
  // console.log(cart1);
  console.log(cart1);

  // dispatch(deleteFromCart(cart[1]));

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
