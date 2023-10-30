import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";
import PropTypes from "prop-types";
//import { ingredientType } from "../../utils/prop-types.js";
import { useSelector } from "react-redux";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";

function BurgerIngredients({ onClick }) {
  // console.log(getIngredients())
  const ingredients = useSelector(getIngredients);
  

  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
      <IngredientsTabs />
      <ul className={`${styles.ingredients} ${styles.scroll} mt-10`}>
        <IngredientsSet
          headline="Булки"
          ingredients={ingredients}
          onClick={onClick}
          type="bun"
        />
        <IngredientsSet
          headline="Соусы"
          ingredients={ingredients}
          onClick={onClick}
          type="sauce"
        />
        <IngredientsSet
          headline="Начинки"
          ingredients={ingredients}
          onClick={onClick}
          type="main"
        />
      </ul>
    </section>
  );
}

// BurgerIngredients.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default BurgerIngredients;
