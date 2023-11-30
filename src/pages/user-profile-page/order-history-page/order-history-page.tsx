import { FC } from "react";
import styles from "./order-history-page.module.css";

const OrderHistory: FC = () => {
  return (
    <div className={styles.content}>
      <p className={`text text_type_main-large mb-4`}> История заказов</p>
    </div>
  );
};

export default OrderHistory;
