import styles from "./ingredient-page.module.css";


import { FC } from "react";
import OrderFullDetails from "../../components/order-full-details/order-full-details";

const IngredientPage: FC = () => {
  return (
    <main className={styles.content}>
      <OrderFullDetails/>
    </main>
  );
};

export default IngredientPage;
