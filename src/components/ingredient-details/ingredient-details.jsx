import { useSelector } from "react-redux";
import styles from "./ingredient-details.module.css";
import { getIngredientDetails } from "../../services/selectors/ingredient-details-selector.js";

function IngredientDetails() {

  const ingPageData = {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  }
  const ingredient = useSelector(getIngredientDetails) || ingPageData

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
