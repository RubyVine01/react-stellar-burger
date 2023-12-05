import { FC } from "react";
import styles from "./orders-page.module.css";
import OrderList from "../../components/order-list/order-list";
import OrdersStatistics from "../../components/orders-statistics/orders-statistics";

const OrdersPage: FC = () => {
  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4 mt-10  ${styles.title}`}>
        Лента заказов
      </p>
      <div className={styles.orders_content}>
        <OrderList />
        <OrdersStatistics />
      </div>
    </main>
  );
};

export default OrdersPage;
