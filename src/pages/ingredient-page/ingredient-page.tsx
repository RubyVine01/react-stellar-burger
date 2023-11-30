import styles from "./ingredient-page.module.css";

import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { FC } from "react";

const IngredientPage: FC = () => {
  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4`}>Детали ингредиента</p>
      <IngredientDetails />
    </main>
  );
};

export default IngredientPage;
