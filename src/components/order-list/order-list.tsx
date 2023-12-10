import styles from "./order-list.module.css";
import { FC } from "react";
import OrderItem from "../order-item/order-item";
import { useAppSelector } from "../../hooks/hooks";
import { getOrders } from "../../services/selectors/orders-selector";

const OrderList: FC = () => {
  const orders = useAppSelector(getOrders);

  return (
    <section className={`${styles.order_list} ${styles.scroll} pr-2`}>
      {orders ? (
        orders.map((order) => <OrderItem order={order} key={order.number} />)
      ) : (
        <p>Закгрузка данных</p>
      )}
    </section>
  );
};

export default OrderList;
