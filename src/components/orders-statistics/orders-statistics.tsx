import styles from "./orders-statistics.module.css";

import { FC } from "react";

const ordersNumList: string[] = [
  "034533",
  "034532",
  "034531",
  "034530",
  "034529",
];

const ordersNumListInWork: string[] = ["034533", "034532", "034531", "034530"];
const doneOrdersCount: number = 23657;
const doneOrdersCountDay: number = 257;

const OrdersStatistics: FC = () => {
  return (
    <section className={styles.order_statistics}>
      <div className={styles.orders_list_conteiner}>
        <h2 className={`text text_type_main-medium mb-2`}>Готовы:</h2>
        <h2 className={`text text_type_main-medium mb-2`}>В работе:</h2>
        <ul className={styles.orders_list}>
          {ordersNumList.slice(0, 30).map((num: string) => {
            return (
              <li
                key={num}
                className={`text text_type_digits-default text_color_success mt-2 ${styles.orders_item}`}
              >
                {num}
              </li>
            );
          })}
        </ul>

        <ul className={styles.orders_list}>
          {ordersNumListInWork.map((num: string) => {
            return (
              <li
                key={num}
                className={`text text_type_digits-default mt-2 ${styles.orders_item}`}
              >
                {num}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.done_orders}>
        <h2 className={`text text_type_main-medium`}>
          Выполнено за все время:
        </h2>
        <p className={`text text_type_digits-large`}>{doneOrdersCount}</p>
      </div>

      <div className={styles.done_orders}>
        <h2 className={`text text_type_main-medium`}>Выполнено за сегодня:</h2>
        <p className={`text text_type_digits-large`}>{doneOrdersCountDay}</p>
      </div>
    </section>
  );
};

export default OrdersStatistics;
