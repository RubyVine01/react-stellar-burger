import styles from "./order-list.module.css";
import { FC } from "react";
import OrderItem from "../order-item/order-item";
import { useAppSelector } from "../../hooks/hooks";
import { getOrders } from "../../services/selectors/orders-selector";

const OrderList: FC = () => {
  const orders = useAppSelector(getOrders);

  return (
    <section className={`${styles.order_list} ${styles.scroll} pr-2`}>
      {!orders ? (
        <p className={`text text_type_main-medium mt-2}`}>Загрузка данных...</p>
      ) : (
        orders
          .slice()
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((order) => <OrderItem order={order} key={order.number} />)
      )}
    </section>
  );
};

export default OrderList;
