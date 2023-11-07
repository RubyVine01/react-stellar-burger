
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredient-page.module.css";

function IngredientPage() {


  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4`}>Детали ингредиента</p>
      <IngredientDetails/>
    </main>
  );
}

export default IngredientPage;
