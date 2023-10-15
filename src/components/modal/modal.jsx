import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
//import OrderDetails from "../order-details/order-details";

function Modal() {
  const title = "Детали ингредиента";

  return (
    <div className={`${styles.modal} pr-10 pl-10`}>
      <div className={`${styles.modal_head} `}>
        <h2 className={`text text_type_main-large `}>{title}</h2>
        <button className={styles.btn_close}>
          <CloseIcon type="primary" />
        </button>
      </div>
      <IngredientDetails />
    </div>
  );
}

export default Modal;
