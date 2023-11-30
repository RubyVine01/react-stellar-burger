import styles from "./ingredient-details.module.css";

import { FC } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { getIngredientDetails } from "../../services/selectors/ingredient-details-selector.js";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { TIngredient } from "../../utils/types";


const IngredientDetails: FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const ingredients = useSelector(getIngredients) as Array<TIngredient>;
  const background = location.state && location.state.background;
  const ingredientDetail = useSelector<TIngredient>(getIngredientDetails);

  const ingredient = useSelector((state) => {
    if (background && ingredientDetail) {
      return getIngredientDetails(state);
    } else {
      return ingredients.find((item) => item._id === id);
    }
  }) as TIngredient;

  if (!ingredient) {
    return (
      <p className={`text pb-8 text_type_main-medium pt-5`}>
        Ингрединт не найден
      </p>
    );
  }

  return (
    <div className={styles.ingredient_details}>
      <img
        className="pb-4"
        src={`${ingredient.image_large}`}
        alt={ingredient.name}
      />
      <p className={`text pb-8 text_type_main-medium`}>{ingredient.name}</p>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Калории,ккал
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Белки, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Жиры, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {ingredient.fat}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Углеводы, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
