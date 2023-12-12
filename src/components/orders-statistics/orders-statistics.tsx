import { useAppSelector } from "../../hooks/hooks";
import {
  getOrdersNumListDone,
  getOrdersNumListInWork,
  getTotal,
  getTotalToday,
} from "../../services/selectors/orders-selector";
import styles from "./orders-statistics.module.css";

import { FC } from "react";

const OrdersStatistics: FC = () => {
  const ordersCountDone = useAppSelector(getTotal);
  const ordersCountDoneToday = useAppSelector(getTotalToday);
  const ordersNumListDone = useAppSelector(getOrdersNumListDone);
  const ordersNumListInWork = useAppSelector(getOrdersNumListInWork);

  return (
    <section className={styles.order_statistics}>
      <div className={styles.orders_list_conteiner}>
        <h2 className={`text text_type_main-medium mb-2`}>Готовы:</h2>
        <h2 className={`text text_type_main-medium mb-2`}>В работе:</h2>
        <ul className={styles.orders_list}>
          {ordersNumListDone.slice(0, 30).map((number) => {
            return (
              <li
                key={number}
                className={`text text_type_digits-default text_color_success mt-2 ${styles.orders_item}`}
              >
                {number}
              </li>
            );
          })}
        </ul>

        <ul className={styles.orders_list}>
          {ordersNumListInWork.map((number) => {
            return (
              <li
                key={number}
                className={`text text_type_digits-default mt-2 ${styles.orders_item}`}
              >
                {number}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.done_orders}>
        <h2 className={`text text_type_main-medium`}>
          Выполнено за все время:
        </h2>
        <p className={`text text_type_digits-large`}>{ordersCountDone}</p>
      </div>

      <div className={styles.done_orders}>
        <h2 className={`text text_type_main-medium`}>Выполнено за сегодня:</h2>
        <p className={`text text_type_digits-large`}>{ordersCountDoneToday}</p>
      </div>
    </section>
  );
};

export default OrdersStatistics;
