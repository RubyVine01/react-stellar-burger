import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";

function BurgerIngredients({ ingredients }) {
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
      <h1 className={`${styles.title} text_type_main-large pt-10`}>
        Соберите бургер
      </h1>
      <IngredientsTabs />
      <div className={`${styles.ingredients} ${styles.scroll} mt-10`}>
        <IngredientsSet headline="Булки" ingredients={bunSet} />
        <IngredientsSet headline="Соусы" ingredients={sauceSet} />
        <IngredientsSet headline="Начинки" ingredients={mainSet} />
      </div>
    </section>
  );
}

// возможно с точки зрения синтемантики стоит вместо div использовать ul

export default BurgerIngredients;
