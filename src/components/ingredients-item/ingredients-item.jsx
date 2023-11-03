import styles from "./ingredients-item.module.css";
import { ingredientType } from "../../utils/prop-types";

import { DragPreviewImage, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { openModal } from "../../services/reducers/modal-slice";
import { setIngredientDetails } from "../../services/reducers/ingredient-details-slice";

import {
  getStatusModal,
  getTypeModal,
} from "../../services/selectors/modal-selector";
import { getAllCart } from "../../services/selectors/burger-constructor-selector.js";

function IngredientsItem({ ingredient }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(getStatusModal);
  const modalType = useSelector(getTypeModal);
  const allCart = useSelector(getAllCart);
  const count = allCart.filter((item) => item._id === ingredient._id).length;

  const [, dragRef, preview] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const onOpen = () => {
    dispatch(setIngredientDetails(ingredient));
    dispatch(openModal("ingredient"));
  };

  return (
    <>
      <li className={styles.card} ref={dragRef} onClick={onOpen}>
        <DragPreviewImage connect={preview} src={ingredient.image} />
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
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

IngredientsItem.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default IngredientsItem;
