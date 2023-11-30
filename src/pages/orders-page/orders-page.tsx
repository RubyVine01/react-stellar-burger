import { FC } from "react";
import styles from "./orders-page.module.css";

const OrdersPage: FC = () => {
  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4`}>Лента заказов</p>
    </main>
  );
};

export default OrdersPage;
