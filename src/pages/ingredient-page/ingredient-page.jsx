import styles from "./ingredient-page.module.css";

import IngredientDetails from "../../components/ingredient-details/ingredient-details";

function IngredientPage() {
  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4`}>Детали ингредиента</p>
      <IngredientDetails />
    </main>
  );
}

export default IngredientPage;
