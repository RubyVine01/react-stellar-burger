import { FC } from "react";
import styles from "./order-history-page.module.css";
import OrderList from "../../../components/order-list/order-list";

const OrderHistory: FC = () => {
  return (
    <div className={`${styles.content} pt-10`}>
      <OrderList />
    </div>
  );
};

export default OrderHistory;
