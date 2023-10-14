import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";

function Modal({ content }) {
const title = "Детали ингредиента";

  return (
    <div className={`${styles.modal} pr-10 pl-10`}>
      <div className={`${styles.modal_head} `}>
        <h2 className={`${styles.title} text_type_main-large `}>{title}</h2>
        <button className={styles.btn_close}>
          <CloseIcon type="primary" />
        </button>
      </div>
      <IngredientDetails />
      {content}
    </div>
  );
}

export default Modal;
