import styles from "./ingredients-item.module.css";

import { FC } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { setIngredientDetails } from "../../services/slices/ingredient-details-slice/ingredient-details-slice";
import { getAllCart } from "../../services/selectors/burger-constructor-selector";
import { TIngredient } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

type TIngredientsItemProps = {
  ingredient: TIngredient;
};

const IngredientsItem: FC<TIngredientsItemProps> = ({ ingredient }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const allCart = useAppSelector(getAllCart);

  const count: number = allCart.filter(
    (item) => item._id === ingredient._id
  ).length;

  const [, dragRef, preview] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const onOpen = () => {
    dispatch(setIngredientDetails(ingredient));
    navigate(`/ingredients/${ingredient._id}`, {
      state: { background: location },
    });
  };

  return (
    <>
      <li
        className={styles.card}
        ref={dragRef}
        onClick={onOpen}
        data-test="ingredient-item"
      >
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
    </>
  );
};

export default IngredientsItem;
