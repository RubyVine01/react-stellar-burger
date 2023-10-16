import { ingredientType } from "../../utils/prop-types.js";
import styles from "./ingredient-details.module.css";

function IngredientDetails({ ingredient }) {
  if (!ingredient) {
    return null;
  }

  return (
    <div className={styles.ingredient_details}>
      <img className="pb-4" src={`${ingredient.image_large}`} alt="" />
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
}

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default IngredientDetails;
