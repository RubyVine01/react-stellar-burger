import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js";

function BurgerIngredients({ ingredients, onClick }) {
  const bunSet = ingredients.filter((item) => {
    return item.type === "bun";
  });

  const sauceSet = ingredients.filter((item) => {
    return item.type === "sauce";
  });

  const mainSet = ingredients.filter((item) => {
    return item.type === "main";
  });

  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
      <IngredientsTabs />
      <div className={`${styles.ingredients} ${styles.scroll} mt-10`}>
        <IngredientsSet headline="Булки" ingredients={bunSet} onClick={onClick} />
        <IngredientsSet headline="Соусы" ingredients={sauceSet} onClick={onClick}/>
        <IngredientsSet headline="Начинки" ingredients={mainSet} onClick={onClick}/>
      </div>
    </section>
  );
}

// возможно с точки зрения синтемантики стоит вместо div использовать ul
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default BurgerIngredients;
