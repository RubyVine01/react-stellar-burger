import styles from "./order-details-page.module.css";


import { FC } from "react";
import OrderDetails from "../../components/order-details/order-details";

const OrderPage: FC = () => {
  return (
    <main className={styles.content}>
      <OrderDetails/>
    </main>
  );
};

export default OrderPage;
