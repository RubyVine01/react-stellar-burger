// import PropTypes from "prop-types";
// import { ingredientType } from "../../utils/prop-types.js";
import styles from "./ingredients-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../../services/selectors/burger-constructor-selector.js";
import { getStatusModal, getTypeModal } from "../../services/selectors/modal-selector";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { openModal } from "../../services/reducers/modal-slice";

function IngredientsItem({ ingredient }) {
  const allCart = useSelector(getAllCart);

  const count = allCart.filter((item) => item._id === ingredient._id).length;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  

  const dispatch = useDispatch();

  const onOpen = () => {
    dispatch(openModal())
  }

  const isOpen = useSelector(getStatusModal);
  const modalType = useSelector(getTypeModal);
  
  return (
    <>
      <li className={styles.card} ref={dragRef} onClick={onOpen}>
        <img
          className={styles.image}
          src={ingredient.image_large}
          alt={ingredient.name}
        />
        {count > 0 && (
          <Counter
            count={count}
            size={count < 100 ? "default" : "small"}
            extraClass="m-1"
          />
        )}

        <div className={styles.price}>
          <span className="text_type_digits-default">{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-default`}>{ingredient.name}</p>
      </li>
      {isOpen && modalType === "ingredient" && (
        <Modal title="Детали ингредиента">
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}

// IngredientsItem.propTypes = {
//   ingredient: ingredientType.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default IngredientsItem;

//onClick={() => onClick(ingredient)}
