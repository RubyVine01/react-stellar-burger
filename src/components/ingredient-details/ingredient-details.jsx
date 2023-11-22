import { useSelector } from "react-redux";
import styles from "./ingredient-details.module.css";
import { getIngredientDetails } from "../../services/selectors/ingredient-details-selector.js";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { useLocation } from "react-router-dom";

function IngredientDetails() {
  const ingredients = useSelector(getIngredients);

  const location = useLocation();
 
  const pathSegments = location.pathname.split('/'); 
  const ingredientId  = pathSegments[2];

  const pageIngt = ingredients.filter((item) => {
    if (item._id === ingredientId) {
      console.log(item);
      return item
    } else {
      return null
    }
     
  });

  const ingredient = useSelector(getIngredientDetails) || pageIngt[0];

  console.log( useSelector(getIngredientDetails));

  if (!ingredient) {
    return null;
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
}

export default IngredientDetails;
